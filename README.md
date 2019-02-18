# simple-mern-stack

> 🍣 Getting Started with MERN Stack.

## Install

Install dependencies for `client` & `server` folders
```
$ npm i
```
Create `.env` file for `server` folder
```
PORT=<Your Port>
MONGODB_URI=<Your Mongodb URI>
```

## Usage

One line to run for `client` & `server` folders
```
$ npm start
```

## API

| Route            | HTTP method | Description                 |
|------------------|-------------|-----------------------------|
| /api/cats        | `GET`       | Get all the cats.           |
| /api/cats        | `POST`      | Create a cat.               |
| /api/cats/:catId | `GET`       | Get a single cat.           |
| /api/cats/:catId | `PUT`       | Update a cat with new info. |
| /api/cats/:catId | `DELETE`    | Delete a cat.               |

## License

![](https://img.shields.io/github/license/cuongw/simple-mern-stack.svg?style=flat-square)
