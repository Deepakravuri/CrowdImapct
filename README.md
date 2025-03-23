# Crowdsourced Social Good Platform

This is a **MERN stack** web application designed to enable crowdsourcing for social good. Users can register, create projects, collaborate with organizations, and contribute to meaningful causes.

## Features

- **User Authentication** (Login & Registration)
- **Landing Page** with an overview of the platform
- **Project Management** (Create, View, and Manage social projects)
- **Organization Collaboration** (Partner with NGOs and other groups)
- **Contact & About Pages** to provide more information
- **Fully Responsive UI** using Material UI (MUI)

## Tech Stack

- **Frontend:** React (Vite) + Material UI
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **Deployment:** TBD

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Install dependencies for the frontend:
   ```sh
   cd client
   npm install
   ```

3. Install dependencies for the backend:
   ```sh
   cd ../server
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the `server` directory with:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. Run the project:
   - Start the backend:
     ```sh
     cd server
     npm start
     ```
   - Start the frontend:
     ```sh
     cd client
     npm run dev
     ```

6. Open the app in your browser at `http://localhost:5173`

## Folder Structure

```
root/
│-- client/ (Frontend - React Vite)
│-- server/ (Backend - Express & MongoDB)
│-- public/ (Static Assets)
│-- README.md
```

## Contributing

Contributions are welcome! Feel free to **fork** the repo, create a **pull request**, and improve the platform.

## License

This project is **open-source** and licensed under the MIT License.

---

### Screenshots

![image alt](https://github.com/Deepakravuri/CrowdImapct/blob/0411590d621a2348304824576d230ee951260ed0/Output_Images/Landing%20Page%201.png)

