# 🚀 ZenoTrade - Next-Gen Trading Platform

<div align="center">
  <img src="frontend/public/media/images/logo1.png" alt="ZenoTrade Logo" width="300" height="auto" />
  
  <br/>

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) &nbsp;&nbsp;&nbsp;[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) &nbsp;&nbsp;  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  
  <br/>
  
  <h3>
    <a href="https://zenotrade.onrender.com">Live Demo</a> | 
    <a href="https://zenotrade-dashboard-o8ih.onrender.com">Dashboard</a> | 
    <a href="https://zenotrade-backend-rjkp.onrender.com">Backend API</a>
  </h3>

  <p><strong>Demo Credentials:</strong> <code>demo1@gmail.com</code> / <code>demo1@123</code></p>

  *Your Gateway to Smart Trading*
</div>

## 🌟 Project Overview

ZenoTrade is a modern, full-stack trading platform designed for speed, security, and usability. It features a robust backend, a dynamic dashboard for real-time portfolio management, and a seamless user experience.

```
┌───────────────┐           ┌──────────────┐
│    Frontend   │           │   Dashboard  │
│  Landing &    │───┐   ┌───│   Trading    │
│     Auth      │   │   │   │  Interface   │
└───────────────┘   │   │   └──────────────┘
                    ▼   ▼
              ┌──────────────┐
              │   Backend    │
              │     API      │
              └──────────────┘
                     │
                     ▼
              ┌──────────────┐
              │   MongoDB    │
              │  Database    │
              └──────────────┘
```

## 📱 Frontend (`/frontend`)

The public-facing application featuring:

- **Landing Page Components**
  - Responsive Navigation Bar
  - Dynamic Home Page with Feature Showcases
  - Pricing Plans & Support Center
  
- **User Management**
  - **Secure Authentication**: Login/Signup with robust error handling.
  - **Redirection**: Intelligent routing based on authentication state.

## 📊 Dashboard (`/dashboard`)

The trader's command center, recently enhanced with Phase 2 features:

- **Core Trading Features**
  - **Buy/Sell Action Windows**: Execute trades instantly.
  - **Real-time Position Tracking**: Monitor your active positions.
  - **Holdings Management**: View your long-term investments.
  - **Order History**: Comprehensive log of all your trades.
  
- **Analytics & Customization**
  - **Dynamic Summary**: Real-time calculation of Total Investment, Current Value, and P&L.
  - **Portfolio Analytics**: Interactive Doughnut chart visualizing portfolio distribution.
  - **Dark Mode**: Fully implemented toggleable dark/light theme for comfortable viewing.
  - **User Profile**: Dedicated profile page with user details and logout functionality.
  - **Notifications**: Real-time trade alerts using `react-toastify`.

## ⚙️ Backend (`/backend`)

Robust server infrastructure featuring:

- **Security**
  - **HttpOnly Cookies**: Secure session management.
  - **CORS Configuration**: Properly configured for production (Render) and local development.
  - **Password Hashing**: BCrypt encryption for user data.

- **API Endpoints**
  - `/user`: Securely fetch user profiles.
  - `/allHoldings`, `/allOrders`: Fetch trading data.
  - `/signup`, `/login`, `/logout`: Authentication routes.

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= 14.x
MongoDB >= 4.x
npm or yarn
```

### Setting Up Development Environment

1. **Clone the Repository**
```bash
git clone <repository-url>
cd stock-trading-platform
```

2. **Backend Setup**
```bash
cd backend
npm install

# Create .env file with:
PORT=3002
MONGO_URL=your_mongodb_uri
JWT_SECRET=your_secret

npm start
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm start
# Access at http://localhost:3000
```

4. **Dashboard Setup**
```bash
cd dashboard
npm install
npm start
# Access at http://localhost:3001
```

## 🔧 Core Technologies

### Frontend & Dashboard
- **React.js**: UI Components
- **Material UI**: Icons and Design Elements
- **Context API**: State Management (`GeneralContext`)
- **Chart.js**: Data Visualization (Doughnut, Vertical Graphs)
- **Axios**: API Requests
- **React Toastify**: Notifications

### Backend
- **Node.js & Express.js**: Server Runtime
- **MongoDB & Mongoose**: Database
- **JWT**: Authentication
- **Cookie Parser**: Session handling

## 📦 Project Structure

```
stock-trading-platform/
├── frontend/                 # Public website
│   ├── src/
│   │   ├── landing_page/    # Landing page components
│   └── public/              # Static assets
│
├── dashboard/               # Trading interface
│   ├── src/
│   │   ├── components/      # Trading components (Menu, Summary, Profile)
│   │   ├── GeneralContext.js # Global State
│   └── public/             # Dashboard assets
│
└── backend/                # Server
    ├── Controllers/        # Logic (Auth, Requests)
    ├── Routes/             # API Routes
    ├── schemas/            # Database schemas
    └── index.js            # Entry point
```

## 🔐 Security Features

- **JWT-based Authentication**: Secure, stateless auth.
- **HttpOnly Cookies**: Prevents XSS attacks on tokens.
- **Secure & SameSite Cookies**: Configured for cross-site usage in production.
- **Protected API Endpoints**: Middleware verification for sensitive data.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a pull request

---

<div align="center">
  <p>Made with ❤️ for traders who demand excellence</p>
</div>
