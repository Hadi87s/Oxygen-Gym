# Oxygen Gym Website

[**Watch the website's Demo here**](https://youtu.be/0LLAJfMO0DY)

## Overview

The **Oxygen Gym Website** is a dynamic, responsive website designed to manage products and offer services for gym enthusiasts. The website is built with HTML, CSS, JavaScript, PHP, and MySQL, incorporating Firebase for user authentication.

---

## Features

- **Sign-In and Sign-Up Pages**: Users can register and log in securely.
- **Admin Dashboard**: Admins can add, delete, and manage products.
- **Shop Page**: Products are dynamically fetched and displayed based on categories.
- **Responsive Design**: Compatible with all screen sizes using Bootstrap and custom CSS.
- **Interactive Elements**: Carousels, product cards, and user-friendly forms.

---

## Directory Structure

Refer to the directory tree below for the structure of the project. Each section and functionality is well-organized in its respective folder.

```plaintext
Web Project/
├── .idea/
├── images/
├── media/
├── node_modules/
├── scripts/
│   ├── shop.js
│   ├── app.js
│   └── [other global scripts]
├── Sections/
│   ├── Classes/
│   │   └── [class-related files]
│   ├── Coaches/
│   │   └── [coaches-related files]
│   ├── ContactUs/
│   │   └── [contact-related files]
│   ├── Dashboard/
│   │   ├── add_product.php
│   │   ├── fetch_products.php
│   │   ├── products.css
│   │   ├── calendar.html
│   │   ├── dashboard.html
│   │   └── [other dashboard-related files]
│   ├── Exercises/
│   │   └── [exercise-related files]
│   ├── Plans/
│   │   └── [plan-related files]
│   ├── Shop/
│   │   ├── scripts/
│   │   │   ├── fetch_products.php
│   │   │   └── shop.js
│   │   ├── [shop page files]
│   │   └── uploads/ [uploaded product images]
│   ├── SignIn/
│   │   ├── signin.html
│   │   └── [sign-in related files]
│   ├── SignUp/
│   │   ├── signup.html
│   │   └── [sign-up related files]
├── styles/
│   ├── about.css
│   ├── all.min.css
│   ├── animatedBorder.css
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── footer.css
│   ├── gallery.css
│   ├── gBstyle.css
│   ├── navbar.css
│   ├── normalize.css
│   ├── pricing.css
│   ├── sections.css
│   ├── separator.css
│   ├── variables.css
│   ├── video.css
│   └── [other CSS files]
├── SVGs/
│   └── [SVG assets]
├── uploads/
│   └── [uploaded product images]
├── index.html
├── package-lock.json
├── package.json
├── README.md
```

---

## How to Use

### 1. Sign-Up and Sign-In

Users can register on the **Sign-Up** page and log in through the **Sign-In** page.

_Add your screenshots here._

### 2. Admin Dashboard

Admins can:

- Add products with images, names, descriptions, prices, and categories.
- Manage products in real-time using the provided dashboard.

_Add your screenshots here._

### 3. Shop Page

- Products are categorized into:
  - Supplements
  - Snacks
  - Wearables
- Products are dynamically fetched from the database and displayed.

_Add your screenshots here._

---

## Technologies Used

- **Frontend**: HTML, CSS (Bootstrap), JavaScript
- **Backend**: PHP
- **Database**: MySQL

---

## Deployment Instructions

### Step 1: Set Up XAMPP

1. Install XAMPP and start Apache and MySQL servers.
2. Place the project folder (`Web Project/`) into the `htdocs` directory.

### Step 2: Configure Database

1. Open the database folder, reach to oxygen_shop.sql and open it.
2. Import the database on your MySQL server.
3. if the import didn't work, open the file and copy the content.
4. create a new database with the same name in the file.
5. paste the code in the database's CLI and press CTRL + Enter to execute.
