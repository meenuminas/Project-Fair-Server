

----server using Express JS------------

1- Create a folder for server
2- Create package.json file : using npm init -y
3- Install external packages to create server : using npm i express cors dotenv
4- Create .env file : to hold environmental variables
5- Create .gitignore file: add node_modules , .env
6- Create index.js file 
7- Create express server in index.js file
           -import dotenv package, call config method : To load content of .env file into process.env
           -import express to a variable
           -import cors to a variable
           -create express server: call express()
           -Use cors in express serve :
           -Create a port to host server app
           -Server must LISTEN the port for client request
           -to resolve client request(http:get(to obtain data)/post(data create)/put(to update)/delete(to delete)) 
                  -server.httpMethod(path,request handle function(req,res)=>{
                    
                    })

            -Create a Controller folder in server app
                * Create a js file for user management     
                    -Define logic for each request handlers
            -Create a Routes folder in server app  
                 *Create a router.js file in this folder
                     * import express
                     * to set up Routes for express use Router Class

 8- To run server app: use command - nodemon index.js and also update it as start command in package.json script

