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

Also, copy the `env-example` file to `.env` and modify the values according to your needs:
* `DB_PROTOCOL` : Should be `mysql` normally.
* `DB_USER`, `DB_PASSWORD` : Put your user credentials here. If you run a local instance of MySQL on your machine, you can use the `root` user, on the server use the credentials provided for your group (used for phpMyAdmin).
* `DB_HOST` : Is usually `localhost`, but you can replace it with the project server's URL if you want to connect to it from your local machine.
* `DB_PORT` : Should be `3306` normally.
* `DB_DATABASE` : This can be whatever you want on your local machine, but needs to be your group name on the server (e.g. `grpXX`).
* `PORT` : This is the port that will be used by your Express app. Replace it with `100XX`, where `XX` is your group number, e.g. `10008` for group 8.
* `NODE_ENV` : Either `development` for local testing or `production` on the server.

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
