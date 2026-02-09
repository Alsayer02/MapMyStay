📍 MapMyStay

MapMyStay is a comprehensive web application built with the Laravel framework. It provides a secure user authentication system and an interactive map interface to locate the user and identify nearby hotels.

🎯 Project Goal
The goal of this project is to build a functional web application that executes three primary steps: user registration, user login, and an interactive map experience.

🚀 Functional Requirements
1. Authentication System

Registration Page: Allows new users to create an account by providing their name, email, and password (with confirmation).


Validation: Implements proper server-side validation to ensure data integrity before storing user information in the database.


Login Page: Authenticates registered users using their email and password.


Access Control: Securely prevents unauthenticated users from accessing the map page.


Redirection: Automatically redirects users to the map page upon successful login.

2. Interactive Map Page

Geolocation API: Requests user location permission through the browser's native API.

User Location Handling:


If Accepted: Displays a distinct marker for the user’s current position along with nearby hotels.


If Denied: Displays a clear, user-friendly message explaining why the map cannot be shown.


Interactivity: The map is fully interactive, supporting both zoom and pan features.


Hotel Data: Displays hotel names when clicking on specific markers.


Data Logic: Utilizes dummy hotel data distributed around the user's coordinates.

🛠️ Technical Stack

Backend: Laravel Framework with a relational database.


Frontend: Pure HTML, CSS, and Vanilla JavaScript (No React or Vue used).


Map Library: Leaflet.js.

⚙️ Setup & Installation
Clone the Repository:

Install Dependencies:

Environment Configuration:

Copy .env.example to .env.

Generate the application key: php artisan key:generate.

Configure your database settings in the .env file.

Run Migrations:

Start the Application:
