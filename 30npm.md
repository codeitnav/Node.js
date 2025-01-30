# What is npm?
1. It's world's largest software library (registry).
2. It's a software package manager.

## software package manager:
- a book library contais  books written by various authors
- npm is a library or a registry which contains code packages written by various developers.
- it's a large public database of Js code that developers from all over the world can use to share and borrow code
- if one author a "code package", he can pubish it to the npm registry for others to use

1. npm did stand for node package manager when it first started out
2. now, it is a package manager for the js programming lang

# package.json

## what?
- it's npm's configuration file
- it is a json file that typically lives in the root directory of your package and holds various metadata relevant to the package

## why?
- package.json is the central place to configure and describe how to interact with and run your package
- it is primiarily used by the npm CLI

1. name and version are mandatory in package.json

# versioning
- node.js use sematic versioning (SemVer)
- SemVer is one of the most widely adopted versioning systems
- it is a simple set of rules and requirements that dictate how version numbers are assigned and incremented.
- it is in format x.y.z where x=major version, y= minor version, z=patch
 -e.g version: 2.0.2

## vresioning rules:
1. when you fix a bug and the code stays backwards-compatible, you increment the patch version
- e.g.: 1.1.1 to 1.1.2

2. When you add new functionality but the code still stays backwards-compatible, you increment the minor version.
- e.g.: 1.1.1 to 1.2.0
- patch is resetted to 0

3. when you make changes and the code is no more backwards compatible, you increment the major version.
- e.g.: 1.1.1 to 2.0.0
- reset the minor and patch version to 0

## NOTES:
1. SemVer always starts with 0.1.0
2. 0.y.z (a major version of 0) is used for initial development
3. when the code is production-ready, you increment to version 1.0.0
4. even the simplest of changes has to be done with an increase in the version number

# npm scripts
- an npm script is a convenient way to bundle common commands for use in a project.
- they are typically entered in the command line in order to do something with the applications.
- npm scripts are stored in project's package.json file, giving access to everyone who has access to the codebase.
- they also ensure that everyone is using the same command with the same options.
- common use cases for npm scripts include building your project, starting a development server, compiling CSS, linting, minifying, etc.
- npm scripts are executed using the command: npm run <script_name>
