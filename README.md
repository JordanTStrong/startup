# startup
Repository for CS260 Winter 2024

# Startup Spec Assignment
## Elevator Pitch
For years, consumers all around the world have benefited from massive changes to the package delivery system. Amazon in particular revolutionized the industry, allowing consumers to 
get products the same day they found them online. Huge profit and consumer benefit was generated. Before long, other companies begain improving their delivery systems too. Getting 
packages delivered to your hosue is no longer a problem. Now, perhaps an even more tedious problem confronts the consumer - returns. Simply put, shopping is fun, returns are not. 
There is a massive need for consumers to be able to return their packages as quickly, efficiently, and easily as they purchased them. This is where Strong Returns comes in. Strong 
Returns connects a customer with a Strong Returns verified driver who will return packages for the customer. Simply logon, say how many boxes you have, and Strong Returns will take 
care of it for you.

## Key Features
Login feature. Users will be able to create accounts that will let them track their previous returns and status on current packages being returned.
Schedule. Users will use this to schedule when they would like for a driver to pick up their returns (or even select pick up ASAP!).
Previous items. Users will be able to see a clear history of every package they have ever returned with Strong Returns. 

![Rough sketch of concept](startupSpec.jpg)


**HTML** 
- Basic structural and organizational elements

**CSS** 
- Styling and animating

**JavaScript** 
- Interactivity. Buttons to login, create account, select a date, box quantity, etc will all be accomplished via JS.

**Web service** 
- When a user schedules a pickup, the web service will process this information, update the database, and send a confirmation notification.

**Authentication** 
- Users will be able to create accounts and log in

**Database persistence** 
- Storing user data in a database. Users will be able to see what packages they have returned, which packages are in process of being returned, and overall number of packages returned.

**WebSocket** 
- Will update the user's dashboard in real time. For example, if the status of a package changes (like from 'scheduled for pickup' to 'in transit'), the dashboard will reflect this change immediately

**Web framework** 
- React will allow UI to be dynamic and responsive. Login forms, package scheduling, and user dashboards will be interactive and update in real-time

# **STARTUP HTML**
## HTML Pages: 
- Created multiple HTML pages that allow users to navigate through the service, including a Homepage, Login/Signup, Dashboard, Schedule Pickup, Account Settings, and a Contact page.

## Links: 
- Incorporated navigational links throughout the application, ensuring users can easily move from logging in to accessing their personal dashboard, scheduling pickups, modifying account settings, and reaching out via the contact page.

## Text: 
- Each page contains textual descriptions and placeholders relevant to its function, such as instructions for scheduling a pickup, updating account details, or initiating contact.

## Images: 
- Used placeholder images, like a logo, which can be replaced with actual images pertinent to the application.

## DB/Login: 
- Included input fields for user authentication on the Login/Signup page and placeholders for dynamic content on the Dashboard page that will display database-pulled data, such as scheduled pickups and return history.

## WebSocket: 
- Although not explicitly shown in the HTML, placeholders were discussed for real-time data updates via WebSocket, to be implemented for showing live updates of package status on the user's Dashboard.


## **STARTUP CSS** 
- Styled the header, footer, and main content body to create a cohesive visual flow throughout the application.
- Customized navigation elements, removing underlines for a cleaner look and updated the anchor colors for improved accessibility and modern aesthetics.
- Ensured responsive design by implementing flexible layouts that adapt seamlessly across a variety of window sizes and devices.
- Refined application elements using high-contrast colors and ample whitespace to ensure the content is easy to read and navigate.
- Applied consistent font styling across all text content to maintain a uniform appearance.



