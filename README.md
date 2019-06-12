


<span id="top"></span>

# Index

1. [Introduction](#introduction)
    - [What is node?](#whatisnode)
    - [Why node?](#whynode)
    - [Anology](#anology)


# Getting started


## Introduction 
<span id="introduction"></span>

### What is node?
<span id="whatisnode"></span>
Node is wrapper around a javascript runtime like V8. It can be considered as an abstraction on top of V8 which also provides some usefull asynchonous API.

### Why node?
<span id="whynode"></span>
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

### Anologies
<span id="anology"></span>

# Advanced

