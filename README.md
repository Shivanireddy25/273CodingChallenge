# 273CodingChallenge

## Application to show basic GDP growth of USA

System Design :

Backend Part - Created a node application with the following endpoint - /api/graph which will get the JSON data from the data source(http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json) and transform it to be used by the front end.

Frontend Part - Created a React application which will show a graph from the data fed by the node application. 

Technologies Used :

D3 library for data visualization

Front-end  – ReactJS

Back-end – Node.js


### Steps to run

Front End:

Download the repository. Install the required dependencies from package.json using npm install. Start the application using "npm start".

Back End:

Download the repository. Install the required dependencies from package.json using npm install. Start the server using the command "node index.js"
