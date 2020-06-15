# Bus-Ticket-Booking
 Backend API of bus ticket booking system

 #### Setting up on system
 1. Clone the repository to the system
 2. `npm install` - To install required packages
 3. `npm test` - To run unit tests
 4. `npm start` - To start the server


##### Postman

`POST` `/tickets/book` - To book ticket   - Provide name, phone, email, age, gender to book ticket.<br />
`PATCH` `/tickets/update/:id` - To update user details by id - Update user details by providing updated details of name,<br />
&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; phone, email, age,  gender.<br />
`GET` `/tickets/viewdetails/:id` - To view user details by id<br />
`GET` `/tickets/viewstatus/:id` - To view status of ticket by id<br />
`GET` `/tickets/viewopen` - To view all open tickets<br />
`GET` `/tickets/viewclose` - To view all closed tickets<br />
`PUT` `/tickets/admin/resetall` - Open up all tickets<br />
<br />
Import postman collection to postman to run commands<br />

###### Technologies used
nodeJS, ExpressJS, JavaScript, MongoDB
 
