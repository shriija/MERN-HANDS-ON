###steps to create backend

    1. generate  package.json
        npm init -y
node js lib is the largest library, so the npm (node package manager) is the librarian to access lib
http server in 2 lines of code that accssesible lib

    2. create http server
        a. install and import "express" module (u can create server and apis just using this module hence ME(Express)RN)
            npm install express (node_modules is like "downloads" folder) (for the pplication internal purpose only)
        
        b. import express module



HTTP req types aka CRUD Operations (the req made by the client(frontend))
    GET -- READ ALL RESOURSES
    POST -- CREATE A NEW RESOURSE
    PUT -- UPDATE A RESOURCE
    DELETE -- DELETE A RESOURCE (out of 11 these are widely used)

loclly running IP Address of server (on my computer) : http://127.0.0.1:2929/path or
http://localhost:2929/path

USER API

GET https://localhost:2929/users (get users)
POST https://localhost:2929/user (create user)
PUT https://localhost:2929/users/<id> (update users)
DELETE https://localhost:2929/users/<id> (delete users)

###Create Products API in the same file


