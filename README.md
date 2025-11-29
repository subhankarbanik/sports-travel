
🏁 Sports Travel – Full Stack App

A simple full-stack application for displaying sports travel packages and collecting user enquiries.
Frontend built with Next.js + TailwindCSS, backend built with Node.js + Express.
All enquiries are stored in-memory on the server (no database).


🚀 Tech Stack
Frontend

Next.js (App Router)

TailwindCSS

Backend

Node.js + Express

CORS + JSON parsing

In-memory storage

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/subhankarbanik/sports-travel.git
cd sports-travel

🖥️ Backend Setup
cd backend
npm install


Create a .env file:

PORT=8000


Start backend:

npm run dev


Backend runs at:
👉 http://localhost:8000

🌐 Frontend Setup
cd frontend
npm install


Create .env.local:

NEXT_PUBLIC_API_URL=http://localhost:8000


Start frontend:

npm run dev


Frontend runs at:
👉 http://localhost:3000

🎯 Deployment
Backend (Render)

Add start script in package.json

Deploy root of backend folder

Set PORT in environment variable

Frontend (Vercel)

Add to .env.local or Vercel env:

NEXT_PUBLIC_API_URL=https://sports-travel-1.onrender.com


Build settings (default):

Build: npm run build

Install: npm install

✅ Features

Fully responsive travel package UI

Enquiry modal with validation

Backend API to receive enquiries

In-memory storage (simple & minimal)

Deployed Frontend + Backend
