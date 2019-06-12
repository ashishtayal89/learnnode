


<span id="top"></span>

# Index

1. [Introduction](#introduction)
    - [What is node?](#whatisnode)
    - [Why node?](#whynode)
    - [Anology](#anology)
    - [Instalation](#installation)


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

1. **Node** : We can compare writing a program in node to perparing a recipie in the kitchen.

    For example let us assume we are preparing "BUTTER CHICKEN". PFB the comparison :
    - Butter chicken    -->     Program/Application
        - Your program is the final product that you make.
    - Ingredients       -->     Packages
        - It is very important to choose the ingredients wisely to make a good product. Simillary it is important to choose the right packages to produce a good application.
    - Computer          -->     Cook
        - The computer acts as a cook and compiles all the ingredients/pacakges to create the product/app.
    - Kitchen           -->     Node
        - The Node acts as a kitchen which provides the environment and modules to create the application.

2. **Callback** : `A callback is a function which the node will "call back" at a later point of time in a program`.

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
    let buzz = vendor.takeOrder()
    buzz.then(pickOrder);
    ```
<span id="installation"></span>
### Installation

1. Window go to official site of node and download the instalation software. I would recommend installing node in a Ubuntu subsystem on windows.

2. For mac you can use Homebrew to install node like `brew install node`.

## Node Basics

### REPL

- REPL stands for Read, Eval, Print and Loop.
- This instructs node to read a line, evaluate it, print the result and loop until the user exits the repl.

`Note : Difference b/w a statement and an expression is that a statement would never return anything back or would always return undefined. While the expression returns a value which generally is other than undefined.`




# Advanced

