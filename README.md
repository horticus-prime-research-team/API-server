# API Server


DevStation, Apprenti, CodeFellows 401 Final project brought to you by:

### Group Members of Horticus-Prime Research Team:

* Chloie Parsons
* Felipe Delatorre
* Michael Chapman

- An extension of the below project:

DevStation, Apprenti, CodeFellows 401 midterm project by 

### Group Members of [Horticus-Prime](https://github.com/horticus-prime):

* Chloie Parsons
* Ed Dearment
* Matt Wilkin
* Michael Chapman

### Description of Project

In order to increase gardening productivity and to conserve water resources, our research team was tasked with remotely monitoring soil moisture content. We utilized a Raspberry Pi in conjunction with a Grove Moisture Sensor to achieve this. The Raspberry Pi collects moisture sensor data via a direct connection and posts at regular intervals to an API using socket-io which which emits data via TCP. The API server stores the collected data in a MongoDB database. We have implemented authorization of users with role-based access control, including protected CRUD routes.

In addition, when the moisture drops below and/or about a certain defined threshold, the app sends a message to the user.
We designed the system for sensor scalability which could include additional sensors, such as moisture, temperature, humidity and sun-light sensors

## Technologies Utilized 

VSCode, Trello, Github, git, Node.js, Express, Raspberry Pi, a Grove Moisture Sensor, and third-party libraries as necessary.

## Languages
* JavaScript

### Version 1.0.0
### Libraries and Frameworks
* React
* Hooks
* Styleguidist
* Mongoose
* MongoDB
* Eslint
* Express
* Superagent
* Express swagger generator
* JSDOC

### Setup (Dependencies)
- bcrypt (version ^3.0.6)
- cors (version ^2.8.5)
- dotenv (version ^8.0.0)
- eslint (version ^6.0.0)
- express (version ^4.17.1)
- express-swagger-generator (version ^1.1.15)
- jest (version ^24.8.0)
- jsdoc (version ^3.6.2)
- jsonwebtoken (version ^8.5.1)
- moment (version ^2.24.0)
- mongodb-memory-server (version ^5.1.5)
- mongoose (version ^5.6.1)
- morgan (version ^1.9.1)
- node-cron (version ^2.0.3)
- socket.io-client (version ^2.2.0)
- superagent (version ^5.1.0)
- supergoose (version ^0.2.6)
- supertest (version ^4.0.2)

### Development Environment
To operate in the development environment, run these scripts:
    * npm install
    * npm start
    * npm test
    * npm test-watch

### Problem Domain

We are a research team that has been given a back-end system for monitoring the moisture levels of soil for plants. We need to build a front-end for this back-end system that has two portions. One aspect of visual data will be based off of the incoming stream of data from the sensor. This data will be displayed as a moisture level number, and a light that changes between green, yellow, and red based off of the moisture categories of dry, moist, and wet. The second and third representations of data will be in table and chart form, pulling data from our database. The table will show data accumulated over time and the chart will provide a visual representation of the data.

### Licensing/Attribution
* MIT

#### MVP1
* Authorization: Admin role with full CRUD capabilities
* Chart.js for displaying moisture data
* Live-stream data viewport
* Button (red, green, yellow) to reflect moisture level
* Initial UI
* Admin page for editing roles and adding users
* Documentation for onboarding new researchers

#### MVP 2
* Clean and sleek UI
* Moisture table for displaying moisture data
* Partial CRUD on moisture table
* Additional roles of Senior and Assistant

#### Data Flow Diagram

[UML](TBD)
