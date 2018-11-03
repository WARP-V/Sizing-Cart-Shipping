# Air Jordan Website Re-creation

> Project description : the purpose of the project was to build the entire item page of a popular website. Our team chose to focus on the Air Jordan website. My responsibility was to build out the right-side component consisting of the sizes table and item description. 

## Related Projects

  - https://github.com/WARP-V
  - https://github.com/WARP-V/Sizing-Cart_Service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

  - App component is the parent component
    - Description and Sizes are child components of App
      - Row is a child component of Sizes

## Requirements

```sh
Run the following scripts when starting the project:
   "scripts": {
    "seed": "node database/seeding.js", //seeds the database
    "start": "nodemon server/index.js", // starts the server
    "react-dev": "webpack -d --watch", // starts wepback for compiling files
    "lint": "eslint --ignore-path .gitignore . --fix" // linter 
    "test": "jest --coverage", //--> test suite
  },
```

## Development

  - Linter = Eslint with AirBnB style guide
  - Tester = Jest with Enzyme
  - Database = Mondodb with Mongoose
  - Server = Node with Express

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

