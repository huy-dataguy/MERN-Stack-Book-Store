## I. Overview

The **MERN Stack Book Store** is a full-stack MERN e-commerce platform for browsing, purchasing, and managing books. It features a responsive frontend, a robust backend with MongoDB, and a secure admin dashboard for inventory management.

> _This project was built as part of my learning journey from the [FreeCodeCamp MERN Bookstore tutorial](https://youtu.be/pgw2KPfgK1E?si=AaViTiJXjJ0OVJa9), with the goal of strengthening my fullstack development skills alongside my data engineering background._

- **User Features**: Browse books, add/remove items from the cart, and place orders with cash-on-delivery.
- **Admin Features**: Secure dashboard to add, edit, and delete books, protected by JWT authentication.
- **Technologies**: MongoDB, Express.js, React, Node.js, Tailwind CSS, Redux, RTK Query, Mongoose, JWT, and Firebase for authentication.

Explore the deployed application at: https://book-store-self-nine.vercel.app/
For admin access, use:

- **Username**: admin
- **Password**: admin
  
## II. Getting Started
Follow these steps to run the project locally.
### Prerequisites

- Node.js (v20 or higher)
- MongoDB Atlas account
- Firebase account

### Installation

1. **Clone the Repository**
    
    ```bash
    git clone https://github.com/huy-dataguy/MERN-Stack-Book-Store.git
    cd MERN-Stack-Book-Store
    ```
    
2. **Frontend Setup**
    
    - Navigate to the frontend directory:
        
        ```bash
        cd frontend
        ```
        
    - Install dependencies:
        
        ```bash
        npm install
        ```
        
    - In file `.env` file in the `frontend` directory and add your Firebase configuration:
        ```env
        VITE_API_KEY=your_firebase_api_key
        VITE_AUTH_DOMAIN=your_firebase_auth_domain
        VITE_PROJECT_ID=your_firebase_project_id
        VITE_STORAGE_BUCKET=your_firebase_storage_bucket
        VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
        VITE_APP_ID=your_firebase_app_id
        ```
        
3. **Backend Setup**
    
    - Navigate to the backend directory:
        ```bash
        cd backend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
        
    - In file `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
        
        ```env
        DB_URL=your_mongodb_atlas_connection_string
        JWT_SECRET_KEY=your_jwt_secret_key
        ```
        
        > **Note**:
        > - Get the `DB_URL` by creating a project in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
        > - Generate a `JWT_SECRET_KEY` by running the following in your terminal:
        >     
        >     ```bash
        >     node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
        >     ```
        >     
        
4. **Database Setup**
    - In MongoDB Atlas, create a database named `bookstore`.
    - Create a `users` collection and add a user with:
        
        ```json
        {
          "username": "admin",
          "password": "admin",
          "role": "admin"
        }
        ```
        
5. **Run the Application**
    
    - Start the backend server:
        ```bash
        cd backend
        npm run start
        ```
        
    - Start the frontend server in a new terminal:
        
        ```bash
        cd frontend
        npm run dev
        ```
  - Access the admin dashboard at `http://localhost:5173/admin`.
  - Log in with:
      - **Username**: admin
      - **Password**: admin
## III. Contact
- Email: quochuy.working@gmail.com
- Feel free to contribute and improve this project!
