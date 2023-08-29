
# BookMyTix

Welcome to the Movie Ticket Booking App! This application allows users to book movie tickets, manage theaters, and enjoy a seamless movie-going experience. It offers both user and admin functionalities. This project is built using the MERN (MongoDB, Express, React, Node.js) stack and follows the MVC (Model-View-Controller) architecture This site is live at https://bookmytix.onrender.com/

**Please take note**: As a result of utilizing the free tier on the Render platform, the ability to utilize disk storage is not available.However, it's important to highlight that this functionality performs as expected when the project is run locally

## Features
- User Registration and Login with Authentication
- Admin Registration and Login with Authorization
- Admin can manage movies and manage theaters
- Admin Credentials - admin@gmail.com / admin1234
- Admin can approve/block theaters
- Users can add new theaters (need to wait for admin approval)
- Users can add available shows for approved theaters
- Payments using Stripe Payment
- Users can select their choice of their seats and book tickets for available shows
- Users can view their booked tickets
- Client side Movie search functionality

## Tech stack
The BookMyTix website is built using the following technologies:

**Backend**

- Node.js with Express as the server framework(ES 6 Module)
- MongoDB for the database with Mongoose as the ODM
- JWT authentication (JSON web tokens)
- bcryptjs for password hashing

**Frontend**

- React with functional components & hooks
- React router for client-side routing
- Redux Toolkit for state management
- Axios for handling HTTP requests
- Stripe for payment integration

## Getting Started
### Steps to setup the project
1. Clone the repository:

        git clone <repository_url>

2. Configure the environment variables: Add (mongo_url, jwt_secret, stripe_key) variables and values will be your mongodb atlas url, your jwt secret and your stripe api backend key.

3. Install dependencies for both the client and server:
**Install frontend dependencies using npm**

        cd client 
        npm install

**Install Backend dependencies 

        cd ..
        npm install

4. Run the application:

In the root directory 

        npm start
In the Client directory

        npm start

This command will start the development server for both the frontend and backend, and you can access the application in your browser.

### Folder Structure

- BookMyTix/
  - client/
    - node_modules/
    - public/
      - assets/
    - src/
      - apicalls
      - components/
      - pages/
      - redux/
      - stylesheets
    - package.json
  - node_modules  
  - server/
    - config/
    - middleware/
    - models/
    - routes/
    - server.js
  - .env 
  - .gitignore
  - nodemon.json
  - package-lock.json
  - package.json      
  - README.md    

The following libraries are used in the backend and frontend respectively

**Backend**

        "bcryptjs": "^2.4.3",
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "jsonwebtoken": "^9.0.1",
        "mongoose": "^7.4.4",
        "nodemon": "^3.0.1",
        "stripe": "^13.3.0"

**Frontend**

        "@reduxjs/toolkit": "^1.9.5",
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "antd": "^5.8.4",
        "axios": "^1.4.0",
        "browserify-zlib": "^0.2.0",
        "moment": "^2.29.4",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-redux": "^8.1.2",
        "react-router-dom": "^6.15.0",
        "react-scripts": "5.0.1",
        "react-stripe-checkout": "^2.6.3",
        "redux": "^4.2.1",
        "web-vitals": "^2.1.4"

## Contributing
Contributions to BookMyTix are welcome! If you find any bugs, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.