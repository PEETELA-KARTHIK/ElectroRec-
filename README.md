# ElectroRec - Multi-Store Electronics E-commerce Platform

## Overview
ElectroRec is a multi-store e-commerce web application for electronics, featuring dedicated stores for Mobiles, Laptops, Smartwatches, and Headphones. Each store is a self-contained Node.js/Express/MongoDB app with a modern, unified frontend.

## Features
- Central landing page with navigation to all stores
- Product listing, filtering, and sorting (where applicable)
- Product details modal popup
- Loading spinner for better UX
- Responsive, modern UI
- Backend API (Node.js/Express) with MongoDB

## Folder Structure
```
ElectroRec-/
  ├── Headphone-store/
  ├── Laptop-store/
  ├── mobile-store/
  ├── Smartwatch-store/
  └── Landing page/
```
Each store contains its own `index.html`, `server.js`, `script.js`, `styles.css`, and images.

## Setup & Running Locally
1. Install dependencies:
   ```bash
   cd <store-folder>
   npm install
   ```
2. Start the server:
   ```bash
   node server.js
   ```
3. Open `index.html` in your browser for the frontend.

Repeat for each store (`Headphone-store`, `Laptop-store`, `mobile-store`, `Smartwatch-store`).

## Usage
- Use the landing page to choose a store.
- Use the navigation bar to switch between stores.
- Filter or sort products as needed.
- Click a product for more details in a modal popup.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)

## Contribution
1. Fork this repository and create a new branch.
2. Make your changes in the relevant store folder.
3. Test your changes locally.
4. Commit and push your changes.
5. Submit a pull request with a clear description.

## License
This project is open-source and available under the [MIT License](LICENSE). 