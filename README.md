# nyt-article_search-react
A POC built on ReactJS which lets you search articles directly from the New York Times.

# Setup

## Pre-requisites

[Node.js](https://nodejs.org/en/download/)

## Install required packages

`cd nyt-article_search-react`

`npm i`

## Setting up Environment

Create a new **.env** environment file and put it at the root level of project structure.

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

## Running linter

  `npm lint`

# Application

**About**

This application lets you search articles from The New York Times and also provides you with a preview of them.

## Home Page

![home-desktop](https://user-images.githubusercontent.com/19465523/149327449-5f7d380b-28a3-4792-b554-11abbf0c46a6.png)

- The landing page
- Lets you search for articles by the Keywords.
- Simple type the keyword and press 'Enter'.
- After searching you will then be redirected towards the Search Page to see results.

## Search Page

![search-desktop](https://user-images.githubusercontent.com/19465523/149210031-8c10900b-5a25-4aa1-80a3-0c6381e5498b.png)

![search-mobile](https://user-images.githubusercontent.com/19465523/149211275-dfab1ccf-bc74-46a2-828d-dc616be84882.png)

- Lets you search for articles by the Keywords.
- Simple type the keyword and press 'Enter'.
- Related articles will appear below in a list.
- 10 records are shown at once, to see more, use the pagination buttons at the bottom.
- Click on any article item and it will navigate you to the Article page where you can preview it.
- You may directly reach this page via the URL of format **/search?query=YOUR_SEARCH_QUERY&page=PAGE_NUMBER**.
- Generic search is also allowed, i.e you are allowed to not pass any search query and page number and it will fetch all articles from the system.

## Article Page

![localhost_3000_ (2)](https://user-images.githubusercontent.com/19465523/149210172-e90128eb-229c-40b4-afa8-78904f9dd4a2.png)

![article-mobile](https://user-images.githubusercontent.com/19465523/149210857-fafabc1c-9026-4b8a-950c-cc6e1233e202.png)

- This page shows you a preview of any clicked article at the Home page.
- You could also reach to this page by simply pasting the Article URL.
- You may read the full story at the source i.e The New York Times or go back to the results page where you left from.

---

# :wrench: Under the hood

The selection of core Tech Stack for this project has been made keeping in mind the complexity of the application.

**Framework:** Create React App

**Language:** Typescript

**Styling:** SCSS

**State Management:** React Context

**Project Structure:** Divided neatly into *Pages*, *Components*, *Services* and *Core* config which houses *Custom Hooks*, *HOCs*. Each component has a directory by its name and a typescript file named *index* and a test file named *index.test* and this structure is consistent throughout the project. The advantage of naming your file *index* is that that you don't repeat yourself - you've already named the folder MyComponent/, why name the file the same?

**Testing:** React Testing Library

---

# :bug: Known Issues / Room for Improvement

## Persistent Storage

App context which holds information such as: *Searched Query*, *Current Page*, *Article being Viewed*, *Path of Article being viewed* is not persistent, i.e as soon as you reload the application, that information is lost, it is therefore important to choose a more persistent means of storage for example LocalStorage.

# :star: Wishlist

## :dart: Accessibility

Compliance with WCAG 2.1 accessibility guidelines.

## :dart: Test Cases

- Unit tests.
- Integration tests.

## :dart: Performance

- Ensure a 100 Lighthouse score.
- Ensure top notch performance against the Web Vitals.

## :dart: Internationalization

- Serving content in region specific language.

## :dart: PWA

- Ability to use this application as a native mobile application.
