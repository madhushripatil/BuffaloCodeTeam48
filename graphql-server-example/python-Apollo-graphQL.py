import graphene
import os, sys, json

# from graphene import ObjectType, String, Schema

# class Query(ObjectType):
#     # this defines a Field `hello` in our Schema with a single Argument `name`
#     hello = String(name=String(default_value="stranger"))
#     goodbye = String()

#     # our Resolver method takes the GraphQL context (root, info) as well as
#     # Argument (name) for the Field and returns data for the query Response
#     def resolve_hello(root, info, name):
#         return f'Hello {name}!'

#     def resolve_goodbye(root, info):
#         return 'See ya!'

# schema = Schema(query=Query)



# class Query(graphene.ObjectType):
#   hello = graphene.String(name=graphene.String(default_value="World"))

#   def resolve_hello(self, info, name):
#     return 'Hello ' + name

# schema = graphene.Schema(query=Query)
# result = schema.execute('{ hello }')
# print(result.data['hello']) # "Hello World"


# importing the requests library 
import requests 

# api-endpoint 
URL = "https://www.boredapi.com/api/activity"

# location given here 
activity = "activity/"

# defining a params dict for the parameters to be sent to the API 
PARAMS = {'address':activity} 

# sending get request and saving the response as response object 
r = requests.get(url = URL) 

# extracting data in json format 
data = r.json() 
print(json.dumps(data))




# Examples running commands from python

# os.system("pwd")
# os.system("ls")
# os.system("cd graphql-server-example")
# cmd = "node index.js"

# returned_value = os.system(cmd)  # returns the exit code in unix
# print('returned value:', returned_value)


# import sys
# import json

# send_message_back = {
#   'arguments': sys.argv[1:],
#   'message': """Hello,
# This is my message.

# To the world"""
# }


# print(json.dumps(send_message_back))

