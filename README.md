# MVC - Tech Journal

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description:
* Tech Journal is the newest online blog for all tech users! Enjoy the wonderful UX and UI for blog posts and links! Either visit the deployed link - or clone to your local repo and follow the [Installation](#installation) and [Usage](#usage) steps to get started locally!

## Tables of Contents:
* [Technologies](#technologies)
* [NPM Packages](#npm-packages)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Usage](#usage)
* [Author(s)](#authors)
* [Contact Info](#contact-info)

## Technologies:
* HTML
* CSS
* JavaScript
* Node/[NPM Packages](#npm-packages)

## NPM Packages:
* [bcrypt v5.0.1](https://www.npmjs.com/package/bcrypt)
* [bulma v0.9.4](https://www.npmjs.com/package/bulma)
* [chalk v4.1.2](https://www.npmjs.com/package/chalk/v/4.1.2)
* [connect-session-sequelize v7.1.4](https://www.npmjs.com/package/connect-session-sequelize)
* [dotenv v16.0.1](https://www.npmjs.com/package/dotenv)
* [express v4.18.1](https://www.npmjs.com/package/express)
* [express-handlebars v6.0.6](https://www.npmjs.com/package/express-handlebars)
* [express-session v1.17.3](https://www.npmjs.com/package/express-session)
* [mysql2 v2.3.3](https://www.npmjs.com/package/mysql2)
* [sequelize v6.20.1](https://www.npmjs.com/package/sequelize)

## Screenshot:
* 


## Installation:
* Download the zip file, or clone to your local machine.
* Open a new terminal in the correct directory, and run command: `npm i`
* Create a `.env` file; Populate the file with `DB_NAME` - `DB_USER` - `DB_PW` on separate lines, and insert your appropriate credentials.

## Usage:
* After you finish installation procedures, enter the following command in the terminal: `mysql -u (*insert username*) -p`
* Please enter your MySQL password when prompted.
* In the MySQL command line, use command: `source db/schema.sql;` to create the proper database.
* After the prompt displays the database was created, use command: `quit;` to exit the MySQL Command Line.
* Lastly, use commands: `npm run seed` - `npm start` to seed your Database, and to start the server respectively. 

## Author(s):
* Jeffrey Young

## Contact Info:
[GitHub](https://github.com/jeffymiyoung)

---
© 2022 MVC - Tech Journal