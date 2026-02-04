1. Generate package.json
npm init -y

change type to module

2. Create Server.js

3. Install, import "express" and create HTTP Server. Assignn Port
npm i express

### connect MongoDB Database

native driver cannot validate and filter user input
REST API ---mongodb native driver--- MongoDB Server
so we can use this instead:
REST API ---mongodb ODM object document mapping tool (mongoose) --- MongoDB Server
(similar to a object rlational mapping tool(sequelise))

1. install mongoose and connect to mongodb server
2. create schema of the resource (user)
3. craete model of that schema
4. perform db operations on that model
