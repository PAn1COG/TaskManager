# Task Scheduler Web Application

## Introduction
This project is a Task Scheduler Web Application, designed using Laravel for the backend, and HTML, CSS, and JQuery for the frontend.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- XAMPP (or similar software) installed, as it provides support for PHP and MySQL.
- Laravel installed on your system.

## Setup and Installation

### Step 1: Set Up XAMPP
- Download and install XAMPP from [XAMPP Official Website](https://www.apachefriends.org/index.html).
- Ensure that the PHP and MySQL modules are active.

### Step 2: Configure the Database
- Start MySQL through the XAMPP control panel.
- Navigate to the `Database` folder in the project directory.
- In `http://localhost/phpmyadmin/index.php` go to SQL Tab. Run the provided `.SQL` file queries to set up the database environment by copy pasting the queries and RUN.

### Step 3: Run the Laravel Project
- Open a terminal or command prompt.
- Navigate to the project directory(`.\TaskManager`).
- Run the following command to start the Laravel server:
  
  php artisan serve
  
  You should get success message:

  INFO  Server running on [http://127.0.0.1:8000].

### Step 4: Access the Application
- Navigate to `.\TaskManager\frontEnd` folder in file expolorer and open `index.html` file.
- This should open the tasks page of the application in your browser.

## Usage
After completing the setup, the Task Scheduler Web Application should be accessible and ready to use through your browser.

## Support
For any assistance or feedback, please contact sushrutdiwan07@gmail.com.
