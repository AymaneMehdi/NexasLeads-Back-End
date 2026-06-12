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
NexasLeads-Back-End/
├── controllers/        
│   ├── blogController.js
│   ├── loginController.js
│   ├── partnerController.js
│   ├── statisticsController.js
│   └── userController.js
│
├── middlewares/        
│   ├── auth.js
│   └── middleware.js
│
├── models/             
│   ├── blog.js
│   ├── partner.js
│   └── user.js
│
├── routes/             
│   ├── blogRoutes.js
│   ├── loginRoutes.js
│   ├── partnerRoutes.js
│   ├── statisticRouter.js
│   └── userRoutes.js
│
├── .gitignore
├── SECURITY.md
├── LICENSE       
├── app.js
├── package-lock.json              
├── package.json              
└── vercel.json
```

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AymaneMehdi/NexasLeads-Back-End.git
   cd NexasLeads-Back-End
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

## Deployment

The easiest way to deploy your app is using [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Security

Please review our [Security Policy](SECURITY.md) for information about reporting vulnerabilities.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Copyright © Aymane Mehdi**