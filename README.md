# NexasLeads Back-End

This is the Back-End API for **NexasLeads**, a platform to manage blogs, partners, statistics, and users.  
It is built with **Node.js**, **Express.js**, and **MongoDB**, providing authentication, partner management, statistics tracking, and user handling.

---

## Features

- User authentication with JWT  
- Blog management APIs  
- Partner management APIs  
- User management APIs  
- Statistics tracking APIs  
- Middleware for authentication & authorization  
- CORS support  
- MongoDB & Mongoose integration  

---

## Project Structure

```
Back-End/
├── controllers/        # Handles business logic (blogs, login, partners, stats, users)
│   ├── blogController.js
│   ├── loginController.js
│   ├── partnerController.js
│   ├── statisticsController.js
│   └── userController.js
│
├── middlewares/        # Middleware (auth, validation, etc.)
│   ├── auth.js
│   └── middleware.js
│
├── models/             # Mongoose models (schemas)
│   ├── blog.js
│   ├── partner.js
│   └── user.js
│
├── routes/             # API routes
│   ├── blogRoutes.js
│   ├── loginRoutes.js
│   ├── partnerRoutes.js
│   ├── statisticRouter.js
│   └── userRoutes.js
│       
├── app.js              # Express app configuration
├── package.json        # Dependencies & scripts
├── vercel.json         # Vercel deployment config
└── .gitignore
```

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nexasleadsofficial/Back-End.git
   cd Back-End
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory:

   ```env
   port=5000
   url=your_mongodb_connection_string
   ```

---

## Running the Project

### Development
```bash
npm start
```

This will run the Back-End at [http://localhost:5000](http://localhost:5000).

---

## Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT Authentication**  
- **Vercel** (for deployment)  

---

## License

This project is licensed under the [MIT License](LICENSE).  
---
Copyright© Aymane Mehdi  
