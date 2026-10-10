# KENNYSONG

**Your next food craving starts here.**

Uwansum is a food and recipe sharing website inspired by the joy of discovering delicious meals according to your craving. Users can explore a collection of recipes, view individual recipe details, and submit their own recipes through a simple interface.

##  Features

- **Home Page** — A welcoming landing page with a food-inspired design, scroll down to get recipes according to your craving.
- **Recipe Collection** — Browse a collection of recipes.
- **Recipe Details** — View individual recipes on dedicated pages.
- **Share a Recipe** — Submit a recipe with your name, email, and recipe details.
- **Database Integration** — Uses MongoDB Atlas to store submitted recipes.
- **Responsive Design** — A layout designed to work across different screen sizes.
- **Deployment** — Built with Next.js and deployed using Vercel.

##  Tech Stack

- **Framework:** Next.js (App Router), React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Deployment:** Vercel
- **Version Control:** Git and GitHub

## Website Link
https://uwansum-website-mq7ck50fz-enkay2.vercel.app/

##  Project Structure

```text
kenny-food/
├── app/
│   ├── api/
│   │   └── recipes/
│   │       └── route.ts
│   ├── recipes/
│   │   └── [slug]/
│   ├── share/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── data/
│   └── recipes.ts
├── lib/
│   └── mongodb.ts
├── models/
│   └── Recipe.ts
├── public/
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- A MongoDB Atlas account

### 1. Clone the repository

```bash
git clone https://github.com/enkay1309/uwansum-website.git
cd uwansum-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add your MongoDB Atlas connection string:

```env
MONGODB_URI=your_mongodb_conn_string
```



### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Database

Uwansum uses MongoDB Atlas to store recipes submitted through the website. Mongoose defines the recipe schema and manages database interactions.

The application uses an API route to process recipe submissions and save them to the database.

##  Deployment

The project can be deployed using [Vercel](https://vercel.com/).



##