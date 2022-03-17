# my-metro-app

# Steps to run my-metro-app
1. git clone https://github.com/will-lee-94/my-metro-app.git
2. Run npm install in the root of my-metro-app
3. Run npm start

# Steps to run tests in my-metro-app
Run the following commands in Terminal (in root directory of app)
1. npm test
    * Runs all unit tests in __tests__ directory
2. npm test -- --coverage
    * Provides code coverage for all js files under src

# Assumptions
1. Metro API hopefully doesn't get updated frequently
2. The direction parameter (2nd param) used in the https://svc.metrotransit.org/NexTrip/Stops/ API is supposed to take in a string value (0-1-2-3) and those 0,1,2,3 values do not necessarily map to Northbound, Southbound, West, East for those values 
3. Was thinking React Routing (fwd, back) might not be needed since the original metrotransit.org page just has one single page which has 3 select dropdowns for bus routes, bus directions, bus stops

# How App was Created & Additional Library(s)
1. Bootstrap App with create-react-app (npx create-react-app my-metro-app
2. Installed Axios Library (for interacting with MetroTransit API)