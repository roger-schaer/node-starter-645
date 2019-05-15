# Node.js starter project (module 645)

This project contains the starting blocks for deploying your student project on a server, as well as running the project in debug mode locally during development.

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

* Node.js (>=10)
* PM2 (http://pm2.keymetrics.io/)

## Installing

Install Node.js from the website (see below).

Install PM2 with the following command : `npm install -g pm2`
(note that `sudo` may be required on Linux/macOS to allow global installation).

## Customization of the app
In `package.json`, replace all occurrences of `prj645-grpXX` with your own group number, for example `prj645-grp03` for group number 3.

## Running the app

### Development

Run `npm run debug`

### Production

Run `npm start`

## Stop/delete the app
Run `npm stop` or `npm run delete`, respectively.


## Built With

* [Node.js](http://nodejs.org) - Programming platform
* [Express](http://expressjs.com) - Web Framework
* [Sequelize](http://sequelizejs.com) - ORM
* [Handlebars](http://handlebarsjs.com) - Template engine

## Authors

* **Roger Schaer** - [roger-schaer](https://github.com/roger-schaer)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
