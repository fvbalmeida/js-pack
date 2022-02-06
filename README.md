# JavaScript Projects

Enjoy the codes.


## First steps
In order to run the apps, you must install NodeJS!

[Install NodeJS](https://nodejs.org)


## How to run the apps:

Just access the desired folder by the terminal or code editor and execute:

```bash
node "filename".js
```


## Folders:

### 1 - Votes

In this project we can calculate votes in relation to the total number of voters!

### 2 - Bubble sort

This project allows us to sort arrays in javascript.

### 3 - Factorial

Want to calculate the factorial of any number? You got it!

### 4 - Sum

If you need to sum the multiples of 3 and 5, here is the code!


## 5 - API

This is a Rest API made with NodeJS, Express and MongoDB!

Full CRUD included: GET, POST, PUT, PATCH and DELETE. 


### .ENV
To save your data, you need to create a database in [MongoDB](https://www.mongodb.com/), so you can connect it to the API. 

After this process, rename the ".env.example" file inside the folder to ".env" and complete it with your MongoDB credentials. 


### Installation

Open the folder "5 - api/backend" by the terminal or code editor and run these commands:

```bash
npm install
```
Then:

```bash
npm start
```


### Ready to GO!

Test the API with Postman, Insomnia, etc. 

### Routes:

Base URL: http://localhost:3344

#### GET
##### /vehicles 
(List all the vehicles)

##### /vehicles/unsold 
(List all unsold vehicles)

##### /vehicles/brand=:brand 
(List all vehicles by brand. Ex.: Volvo, BMW, Chevrolet, etc)

##### /vehicles/last-week 
(List all vehicles added in the last week)

##### /vehicles/decade=:decade 
(List all vehicles by decade. Ex.: 1990, 2000, 1950, etc)

##### /vehicles/:id 
(Show a vehicle's information by its ID)

#### POST
##### /vehicles 
(Register a vehicle)

Ex.: 

```bash
{
    "vehicle": "Car",
    "brand": "BMW",
    "year": 2010,
    "description": "Well maintained",
    "sold": false
}
```

#### PUT
##### /vehicles/:id 
(Update all information of the selected vehicle. This route expects all the required fields, since it is a PUT request.)

#### PATCH
##### /vehicles/:id
(Update one or more information of the selected vehicle. You don't need to pass all the fields to this route since it is a PATCH request.)

#### DELETE
##### /vehicles/:id 
(Delete the selected vehicle.)

## That's all, folks!
