<span id="top"></span>

# Index

1. [Introduction](#introduction)
   - [What is node?](#whatisnode)
   - [Why node?](#whynode)
   - [Anology](#anology)
   - [Instalation](#installation)
2. [Basics](#basics)
   - [REPL](#repl)
   - [Tab and Underscore](#tab)
   - [Executing Scripts](#executing)
   - [Timer](#timer)
   - [Node CLI](#cli)
   - [Node process object](#process)
3. [NPM](#npm)
   - [Intro to NPM](#npmintro)
   - [Semantic Versioning](#semver)
   - [Create NPM package](#npmpackage)
   - [NPX](#npx)
   - [NPM Update](#npmupdate)
4. [Module](#moduleintro)
   - [Module Intro](#moduleintro)
   - [Global Object](#globalobject)
   - [Event Loop](#eventloop)
   - [Error and Exception](#error)
   - [Node Cluster](#cluster)
   - [Async Pattern](#asyncpatterns)
   - [Event Emitter](#eventemitter)
5. [Web Server](#webserver)
   - [Intro](#serverintro)
   - [Monitoring](#monitoring)
   - [Req and Res Obj](#reqandres)
   - [Web Framework](#webframework)
   - [Template Language](#templatelanguage)
6. [Working with OS](#workingwithos)
   - [Intro](#osintro)
   - [OS Module](#osmodule)
   - [FS Module](#fsmodule)
   - [Child Process Module](#childprocessmodule)
   - [Debugging Node](#debuggingnode)

# Getting started

<span id="introduction"></span>

## Introduction

<span id="whatisnode"></span>

### What is node?

Node is wrapper around a javascript runtime like V8. It can be considered as an abstraction on top of V8 which also provides some usefull asynchonous API.

<span id="whynode"></span>

### Why node?

- The end to end stack can be writen in 1 language which is javascript. Helps developers.
- It is a great platform for tools like webpack, gulp etc.
- It provides some builtin modules like fs, http, crypto etc
- All the modules are asynchronous api with a single thread. So we can do asynchoronous programing in a single thread.
- Node supports C++. So you can build highly performant packages using C++.
- Has a powerful debugger.
- NPM was the first javascript package manager which was shipped with Node. Now we can share the javascript code using this package manager. Generaly the packages are small in size, this is also that reason why it is called node.
- Node is also shipped with a module dependency manager also known as CommonJs which is not part of javascript specification.
- **Single Threaded** : There is a single thread which handles all the http connections, so if this thread is blocked by any 1 connection it cannot handle any further connections till that tread is freed.
- Node asynchonous api are usefull for cloud applications since a lot of these applications have asynchronous operations.

<span id="anology"></span>

### Anologies

1.  **Node** : We can compare writing a program in node to perparing a recipie in the kitchen.

    For example let us assume we are preparing "BUTTER CHICKEN". PFB the comparison :

    - Butter chicken --> Program/Application
      - Your program is the final product that you make.
    - Ingredients --> Packages
      - It is very important to choose the ingredients wisely to make a good product. Simillary it is important to choose the right packages to produce a good application.
    - Computer --> Cook
      - The computer acts as a cook and compiles all the ingredients/pacakges to create the product/app.
    - Kitchen --> Node
      - The Node acts as a kitchen which provides the environment and modules to create the application.

2.  **Callback** : `A callback is a function which the node will "call back" at a later point of time in a program`.

We can consider a callback as calling the name of the person after order is prepared. Let us have 2 entities vendor and customer. Customer places the order and asks the vendor to call his name by passing a "callName" function.

```javascript
        function callName(){
            pickOrder();
        }
        vendor.takeOrder(callName,name){
            setInterval(()=>{
                if(orderReady){
                    callName(name);
                }
            },1000);
        }
```

We can consider a promise as a buzz which is given to us when we order something in pizzahut. It starts buzzing as soon as our order is ready, and we can perform the desired action based on that.

```javascript
let buzz = vendor.takeOrder();
buzz.then(pickOrder);
```

<span id="installation"></span>

### Installation

1. Window go to official site of node and download the instalation software. I would recommend installing node in a Ubuntu subsystem on windows.

2. For mac you can use Homebrew to install node like `brew install node`.

<span id="basics"></span>

## Basics

<span id="repl"></span>

### REPL

- REPL stands for Read, Eval, Print and Loop.
- This instructs node to read a line, evaluate it, print the result and loop until the user exits the repl.

  `Note : Difference b/w a statement and an expression is that a statement would always return undefined. While the expression returns a value which generally is other than undefined.`

- **Node Editor** : Type `.editor` which will create a editor screen for you. Then type the code you want to run and press `Crtl + D` to finish or `Ctrl + C` to cancel. This piece of code will be evaluated and can be used going forward.

- **REPL commands** : .editor is a repl command. Some other commands are like .break, .clear etc. You can get a list of all these commands by typing .help.

<span id="tab"></span>

### Tab and Underscore

- A single tab can be used for autocomplete while a double tab can be used to see a list of possible things you can type from whatever partialy typed string you have. Please try doing the following steps :
  1. Type 'c'
  2. Press double tab
- You can use double tab to list down all the globally available items.
- The underscore or '\_' global value stores the most recent value in the memory.
  ```javascript
  Math.random();
  let random = _; // Here _ will have the random value generated by the above statement.
  ```

<span id="executing"></span>

### Executing Scripts

- You can execute a script by typing node followed by the scripts absolute or relative address.
- Once the execution of the script is complete the node process exits and releases the resources.
- Go to getting-started->execting-scripts folder and execute the script hello-world using the command `node 1-hello-world.js`.
- **require** : This is used to load an inbuilt node module or a third party installed node module. You cann't use any dependency without requiring them first. Even the globally accessible properties in a REPL.

<span id="timer"></span>

### Timers

There are 3 types of timers setTimeout, setInterval, setImmediate.

- **setTimeout** : This function says that it will push the provided callback into the message queue after the delay provided to it.

- **setInterval** : Does exactly the same thing as setTimeout but in a recursive manner.

- **setImmediate** : It is provided by node js. It invokes the callback if there is not operation in I/O queue.

<span id="cli"></span>

### Node CLI

**Syntax** : `node [options] [ -e script | script.js | - ] [arguments]`

CLI or Command line interface are the commands used with node in the command line. For instance `Node -v` which gives the version of node.
Or `Node -p "[Some string command]"` which executed the string command and produces the result. Eg `Node -p "os.cpus().length"`

You can use `Node -h | less` command to know more about the node cli commands.

- Some v8 options : You can see the v8 options by `node --v8-options`. These options are directly passed to v8.

- **Environment variables** : Node cli also accepts some environment variales which can be seen by `Node -h | less`.
  Eg `NODE_DEUG="http" node [script]` will print the debug information of the core module http. Eg `NODE_PATH="/" node -p "process.env.NODE_PATH"`

<span id="process"></span>

### Node process object

Node process object contains all the information related to the process which start when we execute node.
Eg process.env, process.stdin etc

- We can pass the environment variables in 2 ways.
  1. `VAL1=100 VAL2=200 node [script]`
  2. ```javascipt
        > export VAL1=100
        > export VAL2=200
        > node [script]
     ```
- There are 2 ways for you to pass infromation to the node process

  1. Using node arguments
  2. Using environment variables

- How to read and write from the console
  - process.stdin : Used to take input from the console.
  - process.stdout : Used to print output to the console.

<span id="npm"></span>

## NPM

<span id="npmintro"></span>

### Introduction

NPM stands for node package manager which help's in maintaining node packages. These packages can be reused in different projects by different developers.

- Update npm : `npm i -g npm`
- EACCESS error shows that you have installed node with some admin priviledges.

- What does npm install [package] do ?

  - It first downloads the package and all the dependent packages in the node_modules folder.
  - Then it makes an entry of the pacakge with its version in the pacakge.json file.
  - Then it creates a list of different packages downloaded in the package-lock.json file along with their versions.

- What happens if a dependent package is already installed in node_modules?

  1. Node will see if the dependent package installed at the root level of node_modules folder has the same version.
  2. If yes then it will ignore the package since it is already installed.
  3. If not then it will create a node_modules folder inside the root package which is dependent on the other package and intall it there.

- package-lock.json :

  1. **version** : Tells about the version of package to be installed.
  2. **resolved** : Repository address to install the package.
  3. **integrity** : If the SSH is enabled then this is the key.
  4. **requires** : This is the dependent packages.
  5. **dependencies** : These are the dependent packages which need to be installed locally.
  6. **dev** : This tells if the package is a devDependencie or not.

- `npm init` : Used to generate a package.json file. Use `npm init --yes` to use the defaults.

<span id="semver"></span>

### Semantic Versioning

- semver or Semantic versioning is the format used by npm to version its packages.
- Version breakup for 4.2.0
  - 4 -> Major number(Breaking changes)
  - 2 -> Minor number(Nothing major and backward compatible)
  - 0 -> Patch number(Bug fixes or security fixes)
- Special characters in versioning :
  - **~** : Update can install the most recent patch version.
  - **^** : Update can install the most recent minor version.
- You can visit [this](https://semver.npmjs.com/) site to see different versions of the packages available.
- You could also use the `x` notation to define the package. Eg 4.9.x or 4.x
- Regardless of a package is intalled globaly or localy, you can require it from any node script.
- node_modules folder in the connection between npm and node.

<span id="npmpackage"></span>

### Create and publish npm package

Steps to create and publish a package :

1. Create a folder for your package and name it based on the name which you want to give to your package. Let take it **test_package** for now.
2. Inside this create an index.js file and export the functionality which you want to provide.
3. Now run the `npm init` command to create the package.json file. Your package is ready now.
4. Now you need to publish it to [npmjs.com](https://npmjs.com). For this you need to have an account with npmjs.com. Please go and create one if not already present.
5. Once you have an account, login to the account using the command `npm login`.
6. After you have logged in you can go ahead and publish the package using the command `npm publish`. This will publish your package to the npm directory.
7. Thats it! your first npm package is live and ready for use. Now you can run the command `npm i [your package name]` to install the package.
8. Import the package using `require("package name")` and use it.

<span id="npx"></span>

### NPX and NPM scripts

**NPM Scripts**

1. NPM scripts are used to execute the node cli packages. Lets take an example of **jest**.
2. We add the node scripts in the scripts section of package.json. Eg
   ```javascript
   scripts: {
     test: jest;
   }
   ```
3. Install the jest localy using `npm i jest`.
4. Now you can run the jest using `npm run test`. This will look for the jest package in the node modules and run it. You can also run it by using `npm test`. `test` is one of the special scripts of npm which doesn't need the `run` keyword. There are some more special npm commands like `start` etc.

**NPX**

If you just run `jest` in the command line it would not run. This is because it would look for global instalation of jest and not the local installation. If you want to run jest from local installation the run it useing `npx`. NPX stands form Node package exection. **NPX makes it easy to use CLI tools and other executables hosted on the registry**. This means that any cli in the npm registry in run using npx command.Calling `npx <command>` when `<command>` isn’t already in your \$PATH will automatically install a package with that name from the npm registry for you, and invoke it.

`Note : npx looks into the local /node_modules folder for the package and if it can’t find it, it will download and run it without having that package globally installed. Make sure you --save or --save-dev the package first. This keeps dependent packages listed in package.json, so that npx can use the local version instead of downloading it to the npm cache.`

```javascript
# Before
$ node ./node_modules/.bin/mocha

# Now with npx:
$ npx mocha
```

- We can configure eslint using the command `npx eslint --init` or `eslint --init` if eslint is installed globaly.
- You can have a look at all the npm scripts by using `npm help npm-scripts`.

<span id="npmupdate"></span>

### NPM Update

- `npm update` command is used to update the npm packages based on the semantic versioning done in the package.json.
- `npm ls` displays the complete package dependency tree.
- `npm show [package] version` is used to see all the versions of a npm package.
- `npm outdated` is a command which tells you which packages will be updated and to which version.
- `npm i [package]@[version]` command is used to intall a specific version of npm package or `npm i [package]@latest` is used to install the latest version of npm package.

<span id="module"></span>

## Module and Concurrency

<span id="moduleintro"></span>

### Module Intro

- Module is nothing but a file that contains code.
- Node internaly wraps the file code in a function. It passes some arguments to these functions. These are not global arguments but only specific to these functions. PFB an example:

  ```javascript
  function(exports, module, require, __filename, __dirname){
    // file Code
  }
  ```

- All the variables defined in a node file are also not global since the are enclosed by a function. So they are local to that node function.
- The wrapping function returns the `module.exports` property. It return this by default and we don't need to return this explicitly.
- `exports` property is just an alias for module.exports property. So exports also points to the same object ie module.exports. So if we do `exports = [some value]` we are reassigning a new memory location to exports and it no longer points to module.exports.
  ```javascript
  exports = () => {}; // Not correct
  module.exports = () => {}; // Correct
  ```
- The result of `require([filename])` is the module.exports property.

<span id="globalobject"></span>

### Gloal Object

- `global` is the global object in node. It is similar to `window` object in browser.
- Try by logging `console.dir(global,{depth:0})`.
- So when we do `setTimeout()` we are actully doing `global.setTimeout()`.

<span id="eventloop"></span>

### Event Loop

- Write `console.log("Ashish")` in a file and execute it using `node [filename]`. See that `Ashish` is printed in the console. At this time the node process has exited after executing this statement. There was no reason for node process to keep running in the background so it exited.
- We can prevent the node process from exiting by a simple hack ie using setInterval. The reason why the process doesn't exit is because the nodes event loop is itself buisy now.
  ```javascript
  setInterval(console.log, 1000, "Ashish");
  ```
  Now if you try running the command `ps -ef | grep node` to list all the running node processes you will see a node process running.

`Note : Every node process starts a event loop. But if there is no asynchronous operation to perform, the node process exits.`

<span id="error"></span>

### Errors and Exceptions

| **Error**                                                                                                                                               | **Exception**                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Errors are Problems                                                                                                                                     | Exceptions are Conditions                                 |
| Errors should not be handled                                                                                                                            | Exceptions should be handled.                             |
| In a way we can say unknown exceptions are problems. So the safest thing to do is to not handle it and let the process exit if it encounters a problem. | Whereas exceptions are known before had and are handeled. |

<span id="cluster"></span>

### Node Cluster

- If we let the process exit if it encounters a problem then does that mean that our application will crash? Actully no because we run multiple node process for our application in production which is also known as node cluster.

- A node cluster has 2 things
  - A pool of node processes.
  - A master process which monitors this pool. If some process goes down then this master process restarts that process.
  - One node process takes 1 CPU core. So if we have 4 cores we can run 4 processes in the node cluster.
  - You can build the node cluster using the inbuilt cluster module. You can also use PM2 tool which helps in creating and running node clusters.

<span id="asyncpatterns"></span>

### Async Patterns

1. **Ediomatic Callback Pattern** :

   - In any async pattern the callback is the last arugment of the async function.
   - The callback always recieves an error object as the first argument. This is why it is know as **error first callback pattern**. If the is an error then this argument will be the error object otherwise it will be null.
   - Example
     ```javascript
     server.listen(4242, err => {
       console.log("Server is running...");
     });
     ```
     - In this example the first argument is the port at which the server needs to start. This is an async operation.
     - The second argument is the callback that is invoked on successful start of server or the Ediomatic callback.
     - The first argument of this callback is an err object which is the error thrown in-case of any issue with the async operation. Also called as thee error first callback.

2) **Promise Pattern** :
   - Using `utils.promisify([async func])` method we can get a promise from any async function.
   - Some module give builtin support for promises. Eg the fs module like `require('fs').promises`.

<span id="eventemitter"></span>

### Event Emitter

- Streams are event emitters like `process.stdin` and `process.stdout`.
- Events are the basis of node application. It works on the `pub sub` pattern.
- `events` is the built in node module used for emitting events`.
- Example

  ```javascript
  const EventEmitter = require("events");
  var myEmitter = new EventEmitter();
  myEmitter.on("Test_Emit", () => console.log("Emitted"));
  myEmitter.emit("Test_Emit");
  ```

<span id="webserver"></span>

## Web Server

<span id="serverintro"></span>

### Introduction

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(4242, () => {
  console.log("Server is running...");
});
```

- In the above example we have passed a callback as a handler to the request event. Every time a new request event occurs, this handler is invoked and req/res objects are passed as arguments to this handler.
- The **server** object which is returned is an event emitter. One of the events this emits is **request**.
- The above code can also be written as follows :

  ```javascript
  const http = require("http");

  const server = http.createServer();
  server.on("request", (req, res) => {
    res.end("Hello World\n");
  });

  server.listen(4242, () => {
    console.log("Server is running...");
  });
  ```

- `res.end("Hello World\n");` is equal to `res.write("Hello World\n"); res.end();`

- The **end** method is mandatory to end the http session. If not used the http session will think that the data is still being streamed.

- `server.listen` method is used to start the server. The first argument passed is the os port at which the server needs to start and the second is the callback which is invoded after successful start of server.

<span id="monitoring"></span>

### Monitoring

- Node js as a runtime doesn't autoreload on any file update. To do that you need to monitor the save events of a file.
- We do that using the `nodemon` package.
- You can intall this package globally using `npm i -g nodemon`. Then run the node process using `nodemon` instead of `node`.

<span id="reqandres"></span>

### Request and Response Object

```javascript
const server = http.createServer();
server.on("request", (req, res) => {
  console.log(req);
  res.end("Hello World\n");
});
```

- You can log request object using `console.log(req)`. It will show all the request object properties. To avoid the nested properties log `console.dir(req, {depth:0})`.
- Please note that the request object is of type `IncomingMessage`. This is the class which is used to instantiated the request object. This is important to know becouse if you need to know what you can do with the request object you need to look for this class inside the `http` module and read its documentation.

  `NOTE : Please observe that the req object is logged twice instead of once. This is becasue for every incoming request my request handler is invoked twice and not once.`

- If you log **req.url** instead of req then you will see that one request is for favicon.ico. So the browser is automatically trying to ask the server if it has the favicon.

- If you log the response object using `console.dir(res, {depth:0})` you will observe that it is of type **ServerResponse**.
- Both request and response objects are stream. The request object is a readable stream while response object is a writable stream. Since all stream are event emitters we can subscribe to events emitted by these objects too.

<span id="webframework"></span>

### Web Framework

- Node provides my low level built in modules like HTTP, HTTP2 and HTTPS. Although we can use these modules to build our application but there capabilities are limited. Eg the Http module doesn't have inbuild method to read the request body of post request. For this reason a lot of frameworks have come up and are widely used as well.
- These framework generally wrap the inbuild node modules and give you out of the box functionality. There are very powerfull frameworks available like express.

```javascript
const express = require("express");

const server = express();

server.listen(4242, () => {
  console.log("Express Server is running...");
});
```

- **express** exports a function as its default export.You need to call that function to create a express server.
- In express we don't define a single request listner, but multiple listners ie a listner per url. This is how it is different from built in http module.

- Some alternative to express :
  - [Koa](https://koajs.com/)
  - [Sails](https://sailsjs.com/)
  - [Meteor](https://www.meteor.com/)

<span id="templatelanguage"></span>

### Template Language

- Templating language is needed to generate some static html based on some data and deliver it to the client. If we don't use a templating language them we will have to do a lot of string concatination.
- Most of these templating languages work with big frameworks like Koa and Express.
- Some of the most popular templating languages are
  - pug(earlier known as jade)
  - handlebars(same language that the ember framework uses).
  - ejs(Embedded Javascript)
  - React + JSX
- You need to inform the framework about the template language being used. For express you can do that using `server.set('view engine', 'ejs');`
- Instead of using **server.send** we use **server.render** to render the index view.

<span id="workingwithos"></span>

## Working with OS

<span id="osintro"></span>

### Intro

- There are some moduled which are designed to interact with the operating system.
- Some of them are :
  - os (General os operations)
  - fs (Operations related to os file system)
  - child_process (Enable us to run any os command from within node)

<span id="#osmodule"></span>

### OS Module

- Provides operating system related utility method.
- Refer to the 1-os file inside 6-os folder to refer to some os operations which can be performed.

<span id="fsmodule"></span>

### FS Module

- This is one of the most widely used built in module for node js. It is very powerfull and provides a lot of functionality.
- You can read and write files not only as buffers but as steams.
- | readFile(path[, options]) | createReadStream(path[, options]) |
  | ------------------------- | --------------------------------- |
  | Uses buffers              | Uses Streams                      |
  | Uses more memory          | Uses less memory                  |
- Refer to the 2-fs file inside 6-os folder to refer to some os operations which can be performed. Here we are refering to `require('fs').promises` to access all the methods which return promises.

<span id="childprocessmodule"></span>

### Child Process Module

- This modules starts another child process. This process once completed informs the node process about its completion.
- There are 4 main child process which are as follow :
  - exec : To execute any shell script command.
  - execFile
  - fork : To start another node process. This is used to create node cluster.
  - spawn : This is the prefered way of executing the os commands. Preferred over exec and execfile

<span id="debuggingnode"></span>

### Node Debug

- Node debugger is integrated with chrome dev tools
- Steps :
  - Go to the terminal and write `node --inspect-brk [filename]`.
  - Open chrome and in the url pane type `chorme://inspect`.
  - Node process will be listed in the targets.
  - Click on the process and the browser starts debugging the file for you.
