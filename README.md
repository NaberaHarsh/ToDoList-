# To-Do List 

Tasklist management application helps to manage your personal and professional productivity. You can use it to manage your tasks from a smartphone, tablet, or computer.

## Installation

Go to the directory where you want to clone this project. Then run the following command for cloning this project
```bash
git clone https://github.com/NaberaHarsh/tasklistManagement.git
```
Once cloned successfully, open the project in visual studio code or any other code editor and install all the dependencies by using npm or yarn. Run command
```
npm install
or
yarn install
```
After successfull installation, run the project. Run command
```
npm start
or
yarn start
```
The project will start running on [http://localhost:3000](http://localhost:3000/) in your browser

## Routes
This project has one public route i.e., the login page and all other private routes, means to access any othe page you need to login first.

## Features
### Login
This is the public route and first page that opens when you start the application. ![login](https://github.com/NaberaHarsh/tasklistManagement/blob/master/public/assets/images/login.png)
Here we have username and password field.
1. Username Field - This field accepts only alphabets.
2. Password Field - This field accepts only alphanumeric values and allowed lenght is 8.

### Dashboard
![Dashboard](https://github.com/NaberaHarsh/tasklistManagement/blob/master/public/assets/images/dashboard.png)
<li> After successfull login you will be directed to Dashboard page.
<li> This page contains the welcome message and some applications and features of application.
<li> In navbar logout button is present, upon clicking you will be logged out and data will be cleared.
  
### Drawer
![drawer](https://github.com/NaberaHarsh/tasklistManagement/blob/master/public/assets/images/drawer.png)
In navbar on clocking on the menu icon drawer will open in left side, it contains list all the pages present in the app.

### Creation 
You can make the list of the tasks using this form 
![Form Image](https://github.com/NaberaHarsh/tasklistManagement/blob/master/public/assets/images/createtask.png)

In the form we have some fields and all are mandatory fields, respective error is shown if any entry is missing or not in proper format.
1. Name Field - This field accepts only alphabets with white space, and max length 15 is characters.
2. Gender Field - This is a Radio Button that acceps 2 values (Male or Female). Only one can be selected at a time.
3. Hobbies Feild - This is a CheckBox that allows you to select one or more than one option at a time.
4. Age - This is a Slider that allows you to slide the cursor and select your age. Allowed values are from 18 to 55.
5. Date - This is a Date Picker that allows you to choose the date accordingly.
6. Task Name  - This field accepts the name of the task. It can contain alphabets, numbers and special characters as well.
7. Status - This Field allows you to select one option from the given options. 
8. Action - Submit button lets you to submit the details but only after validation. Once submitted the form is cleared.

### List Data
All the records submitted can be viewed inside the view tasks section ![Table Image](https://github.com/NaberaHarsh/tasklistManagement/blob/master/public/assets/images/table.png)
From here we can filter the data, sort and search according to taskname, edit the data as well as delete the data.
<li> For sorting click on taskname header in table it will sort ascending and descending manner on each click.
<li> For searching we have a search field in tabel for taskname, you can search taskname from here.

### Edit
On clicking the pencil icon in the table the particular record entries will be available in the form, from here we can edit all the values and can update the record.
![Edit Image](https://github.com/NaberaHarsh/tasklistManagement/blob/master/public/assets/images/edittask.png)

### Delete
On Clicking the trash icon in the table, an alert will pop asking for the condfirmation for deleting the particular record.
![Delete Image](https://github.com/NaberaHarsh/tasklistManagement/blob/master/public/assets/images/delete.png)

### Applications
<li>This is a simple to use to-do list app that can help you plan,list and get more tasks done.
<li>You can create unlimited tasks, set status, give due dates.
<li>You can Create tasks for yourself and for others.
<li>You can keep record of your employees daily tasks as well.
<li>One of the most important reasons for keeping a to-do list is the organization. Organizing your tasks with a list can make everything much more manageable and make you feel       grounded.
<li>Seeing a clear outline of all your tasks will help you feel organized and stay mentally focused.


