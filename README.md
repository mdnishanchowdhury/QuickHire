QuickHire - Installation Steps
1. Clone the Repository
git clone https://github.com/mdnishanchowdhury/QuickHire.git
cd QuickHire
2. Backend Setup

Navigate to backend folder:

cd backend

Install dependencies:

pnpm install

Create a .env file in backend/ with your database info:

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
PORT=5000

Run Prisma migrations (optional if using):

npx prisma migrate dev

Start backend server in dev mode:

pnpm dev

Backend will run at http://localhost:5000.

3. Frontend Setup

Navigate to frontend folder:

cd ../frontend

Install dependencies:

pnpm install

Start frontend server:

pnpm dev

Frontend will run at http://localhost:5173.
