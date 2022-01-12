# nyt-article_search-react
A POC built on ReactJS which lets you search articles directly from the New York Times

# Setup

## Pre-requisites

[Node.js](https://nodejs.org/en/download/)

## Install required packages

`cd nyt-article_search-react`

`npm i`

## Setting up Environment

Create a new **.env** environment file and put it at the root level of project structure

Copy and paste this template

  `REACT_APP_BASE_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json`

  `REACT_APP_API_KEY=YOUR_API_KEY_HERE`

## Running the application

### Development Mode

`npm start`

### Production Mode

`npm build`

## Running the unit tests

`npm test`

# Application

**About**

This application lets you search articles from The New York Times and also provides you with a preview of them.

## Home Page

![localhost_3000_ (1)](https://user-images.githubusercontent.com/19465523/149210031-8c10900b-5a25-4aa1-80a3-0c6381e5498b.png)

![home-mobile](https://user-images.githubusercontent.com/19465523/149211275-dfab1ccf-bc74-46a2-828d-dc616be84882.png)

- The landing page
- Lets you search for articles by the Keywords
- Simple type the keyword and press 'Enter'
- Related articles will appear below in a list
- 10 records are shown at once, to see more, use the pagination buttons at the bottom
- Click on any article item and it will navigate you to the Article page where you can preview it

## Article Page

![localhost_3000_ (2)](https://user-images.githubusercontent.com/19465523/149210172-e90128eb-229c-40b4-afa8-78904f9dd4a2.png)

![article-mobile](https://user-images.githubusercontent.com/19465523/149210857-fafabc1c-9026-4b8a-950c-cc6e1233e202.png)

- This page shows you a preview of any clicked article at the Home page
- You could also reach to this page by simply pasting the Article URL
- You may read the full story at the source i.e The New York Times or go back to the results page where you left from
