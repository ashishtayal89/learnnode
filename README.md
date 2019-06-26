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
   - [Module Intro](#moduleintro)

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

  1. Node will see if the dependent package is installed at the root level of node_modules folder is the same as required.
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

# Advanced
