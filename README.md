# StockAID Portfolio Manager - *a personal stock management tool*

## Overview
This repository contains the back end for this project.

This is a MERN stack application where users can see trending stocks and add stocks to their own portfolio. Users have the ability to search stock tickers, assess some key data points, and add them to their portfolio. Users can also review top trending stock and add them to their portfolio if they choose.

This application uses stock tickers to fetch data from two different API routes. One API route fetches the company name while the other fetches closing price and daily percentage change data.

## How to Use
Front-end repository: https://github.com/eckmanmatt/stockaid-frontend/tree/master

Deployed website: https://stockaid-portfolio-manager.herokuapp.com/

## Technologies Used
* React
* Express.js
* Node.js
* Mongoose
* MongoDB Atlas
* CSS & Bootstrap
* Git / GitHub
* Heroku

## Challenges and Lessons Learned
API choice - The original API choice for this project had to be scrapped due to API call limits. This change necessitated a change to the trending stocks section. The decision was made to hard code stocks into the database to be pulled into the front end.
API keys - It was discovered toward the end of the project that there was no way to hide API keys on the front end and that our commit history contained these API keys. API routes were quickly generated on the back end and a new key was generated rendering the old one useless.


## Contributors
Matt Downey - Back-end & front-end development
Matt Eckman - Front-end development
