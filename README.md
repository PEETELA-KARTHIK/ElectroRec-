# ElectroRec - Multi-Store Electronics E-commerce Platform

## Overview
ElectroRec is a multi-store e-commerce web application for electronics, featuring dedicated stores for Mobiles, Laptops, Smartwatches, and Headphones. Each store is a self-contained Node.js/Express/MongoDB app with a modern, unified frontend. The project is ideal for learning full-stack web development, database integration, and modular app design.

## Features
- **Landing Page:** Central hub with categories and links to each store.
- **Individual Stores:**
  - Product listing with images, price, and specs
  - Filtering and sorting by category or feature (e.g., Best Camera, Gaming, Display)
  - Responsive, modern UI
  - Backend API (Node.js/Express) with MongoDB for product data
- **Navigation:** Easily switch between stores using the top navigation bar
- **Consistent Design:** Unified look and feel across all stores

## Folder Structure
```
ElectroRec-/
  ├── Headphone-store/
  ├── Laptop-store/
  ├── mobile-store/
  ├── Smartwatch-store/
  └── Landing page/
```
- Each store contains its own `index.html`, `server.js`, `script.js`, `styles.css`, and images.
- The Landing page is the main entry point with category navigation.

## Setup & Running Locally
Each store is a separate Node.js app. To run a store:

1. **Install Dependencies**
   ```bash
   cd <store-folder>
   npm install
   ```
2. **Start the Server**
   ```bash
   node server.js
   ```
3. **Open the Store**
   - Open `index.html` in your browser for the frontend.
   - The backend API runs on `localhost:3000` (or as configured).

> Repeat for each store (`Headphone-store`, `Laptop-store`, `mobile-store`, `Smartwatch-store`).

## Usage
- Visit the Landing page to choose a category.
- Use the navigation bar to switch between stores.
- Filter or sort products using the options provided in each store.
- Click on products for more details (future enhancement).

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)

## Contribution Guidelines
1. Fork the repository and create a new branch for your feature or bugfix.
2. Make your changes in the relevant store folder.
3. Test your changes locally.
4. Submit a pull request with a clear description of your changes.

## Future Enhancements
- Product detail modals/popups
- User authentication and cart functionality
- Admin dashboard for product management
- Deployment to cloud platforms (e.g., Heroku, Vercel)
- Add screenshots to this README

## License
This project is open-source and available under the [MIT License](LICENSE). 

---

## 🚀 Deploying Your Project to Heroku

### 1. **Prerequisites**
- [Git](https://git-scm.com/) installed
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- A [Heroku account](https://signup.heroku.com/)

---

### 2. **Prepare Your Project**

#### A. **Choose Which Store to Deploy**
Heroku apps are typically single projects.  
If you want to deploy all stores, you’ll need to deploy each as a separate Heroku app.  
**Let’s start with one (e.g., `Headphone-store`).**  
You can repeat for others.

#### B. **Move into the Store Directory**
```sh
<code_block_to_apply_changes_from>
cd Headphone-store
```

#### C. **Ensure `package.json` and `server.js` are present**
- `package.json` should list all dependencies (`express`, `mongoose`, `cors`, etc.).
- `server.js` should listen on the port provided by Heroku:
  ```js
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  ```

#### D. **Create a `Procfile`**
This tells Heroku how to start your app.
Create a file named `Procfile` (no extension) in `Headphone-store/` with:
```
web: node server.js
```

#### E. **Use a Cloud MongoDB (MongoDB Atlas)**
- Go to [MongoDB Atlas](https://www.mongodb.com/atlas), create a free cluster, and get your connection string.
- In your code, use `process.env.MONGODB_URI` for the connection string:
  ```js
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  ```

---

### 3. **Deploy to Heroku**

#### A. **Login to Heroku**
```sh
heroku login
```

#### B. **Create a New Heroku App**
```sh
heroku create electrorec-headphone
```
*(You can use any name you like.)*

#### C. **Set MongoDB URI as Config Var**
```sh
heroku config:set MONGODB_URI="your-mongodb-atlas-connection-string"
```

#### D. **Initialize Git (if not already)**
```sh
git init
git add .
git commit -m "Initial commit"
```

#### E. **Deploy to Heroku**
```sh
git push heroku master
```
*(If using `main` branch: `git push heroku main`)*

#### F. **Open Your App**
```sh
heroku open
```
Or visit the URL shown in the Heroku dashboard.

---

### 4. **Repeat for Other Stores**
- Repeat steps for `Laptop-store`, `mobile-store`, `Smartwatch-store` as separate Heroku apps.

---

## 📝 **Summary of Files to Check**
- `server.js` uses `process.env.PORT` and `process.env.MONGODB_URI`
- `Procfile` exists with `web: node server.js`
- All dependencies are in `package.json`

---

## 🟢 **Want me to generate a sample `Procfile` and update your `server.js` for Heroku compatibility?**  
If yes, tell me which store to start with (e.g., `Headphone-store`).  
Or, if you want to deploy all at once, I can prepare all four! 

---

## 🚀 Deploy Headphone-store to Heroku

**1. Make sure you are in the Headphone-store directory:**
```sh
<code_block_to_apply_changes_from>
cd A:\Notes\Placements\Projects\ElectroRec-\Headphone-store
```

**2. Log in to Heroku:**
```sh
heroku login
```
A browser window will open for you to log in.

**3. Create a new Heroku app:**
```sh
heroku create electrorec-headphone
```
*(You can use any unique name if this one is taken.)*

**4. Set your MongoDB Atlas URI as a config variable:**
```sh
heroku config:set MONGODB_URI="your-mongodb-atlas-uri"
```
Replace `"your-mongodb-atlas-uri"` with your actual connection string from MongoDB Atlas.

**5. Deploy your code to Heroku:**
```sh
git push heroku master
```
*(If your branch is called `main`, use `git push heroku main`)*

**6. Open your app in the browser:**
```sh
heroku open
```

---

## 🟢 Repeat for Other Stores

Do the same steps for:
- `Laptop-store`
- `mobile-store`
- `Smartwatch-store`

Just change the directory and app name for each one.

---

## 📝 If you need help with MongoDB Atlas:
Let me know and I’ll walk you through creating a free cluster and getting your connection string.

---

**Let me know if you want to proceed with the next store, need help with MongoDB Atlas, or if you run into any errors!** 