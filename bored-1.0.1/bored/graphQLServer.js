
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');


const { spawn } = require('child_process')

const logOutput = (name) => (message) => console.log(`[${name}] ${message}`)

function run() {
  return new Promise((resolve, reject) => {
    const process = spawn('python3', ['./__init__.py', 'activity', 'args']);

    const out = []
    process.stdout.on(
      'data',
      (data) => {
        out.push(data.toString());
        logOutput('stdout')(data);
      }
    );


    const err = []
    process.stderr.on(
      'data',
      (data) => {
        err.push(data.toString());
        logOutput('stderr')(data);
      }
    );

    process.on('exit', (code, signal) => {
      logOutput('exit')(`${code} (${signal})`)
      if (code !== 0) {
        reject(new Error(err.join('\n')))
        return
      }
      try {
        resolve(JSON.parse(out[0]));
      } catch(e) {
        reject(e);
      }
    });
  });
}

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    activity:       String
    accessibility:  Float
    type:           String
    participants:   Int
    price:          Float
    link:           String
    key:            ID!
  }
`);

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);




// The root provides a resolver function for each API endpoint
var root = {
  activity: () => (async () => {
    try {
      const output = await run()
      logOutput('main')(output.message)
      process.exit(0)
    } catch (e) {
      console.error('Error during script execution ', e.stack);
      process.exit(1);
    }
  })()
};

// var root = {
//     query: function ({activity}) {
//       return (async () => {
//         try {
//           const output = await run()
//           logOutput('main')(output.message)
//           process.exit(0)
//         } catch (e) {
//           console.error('Error during script execution ', e.stack);
//           process.exit(1);
//         }
//       })();
//     }
//   };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');





// (async () => {
//   try {
//     const output = await run()
//     logOutput('main')(output.message)
//     process.exit(0)
//   } catch (e) {
//     console.error('Error during script execution ', e.stack);
//     process.exit(1);
//   }
// })();



