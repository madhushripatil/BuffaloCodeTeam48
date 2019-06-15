var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');


const { spawn } = require('child_process')

const logOutput = (name) => (data) => console.log(`[${name}] ${data}`)

function run() {
  return new Promise((resolve, reject) => {
    const process = spawn('python3', ['./python-Apollo-graphQL.py', 'my', 'args']);

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
      resolve(out);
    });
  });
}

(async () => {
  try {
    const output = await run()
    logOutput('main')(output)
    process.exit(0)
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
})();



// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello team 48!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');