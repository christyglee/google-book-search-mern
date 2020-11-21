# Google Books Search: MERN Review
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-express-red.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-axios-yellow.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-mongoose-purple.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-react_router_dom-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-if_env-orange.svg)](https://shields.io/)

 ## Description 
We created a new React-based app called Google Book Search. It allows users to search books from the Google API and save their favorites to review or purchase later. It also has the functionality to delete books from saved lists. When a user searches for a book, the Google results are dynamically rendered to a card below the search bar. When a user clicks view, they are directed to a Google page for the specific book. When a user clicks save, the selected book is saved to a Mongo database. When a user clicks "saved" in the navbar, React dynamically renders the saved page component which displays their saved books from the database. When a user clicks delete, the respective book is removed from the database. This application is great for anyone who wants to search and save specific books.

## Features
* MongoDB stores users' saved books
* Express defines the backend server API routes
* React creates the application and the user interface components
    * The save page and search page are stateful components that import all other components
    * Multiple useState hooks are utilized to access and update different states
    * A useEffect hook is utilized to render a user's saved books to the saved page
    * React Router allows React to dynamically render page components depending on what a user selects from the navbar
* Node.js runs JavaScript outside of the browser to allow the backend to function

Here is our Google Book Search in action!:

![alttext](googlebooksearch.gif)


### Built With
* [MongoDB](https://www.mongodb.com/) - cross-platform document-oriented database program
* [Express](https://expressjs.com/) - backend web application framework for Node.js, for building web applications and APIs
* [React.js](https://reactjs.org/) - a front-end JavaScript library for building user interfaces and UI components
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment that allows JavaScript to be run in command line
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - code that creates the logic and structure of the program
* [JSX](https://reactjs.org/docs/introducing-jsx.html) - a syntax extension to JavaScript used in React to describe whta a UI should look like
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - defines styling on the HTML page
* [Bootstrap](https://getbootstrap.com/) - CSS framework used to build mobile responsive websites
* [Git](https://git-scm.com/) - version control system to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub
* [Heroku](https://heroku.com) - cloud platform for deploying applications

## Deployed Link

* [See Live Site](https://intense-castle-73728.herokuapp.com/)


## Code
The below code demonstrates how React Router dynamically renders the search or saved page based on the route a user requests through the navbar


        <Router>
            <Header></Header>
                <Switch>
                    <Route path="/" exact>
                        <SearchPage></SearchPage>
                    </Route>
                    <Route path="/saved" exact>
                        <SavedPage></SavedPage>
                    </Route>
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                </Switch>
        </Router>

The below code demonstrates how React uses a useState hook to render a card for each book from the search results 

        <>{books.map(book => {
            return (
                <Card key={book._id}>
                    <div className="row">
                        <div className="col-8">
                            <Title title={book.title} />
                        </div>
                        <div className="col-4">
                            <div className="float-right">
                                <ViewBtn link={book.link} />
                                <DeleteBtn onClick={() => deleteBook(book._id)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Author author={book.authors} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <ImageTag src={book.image} name={book.title} />
                        </div>
                        <div className="col-9">
                            <Description description={book.description} />
                        </div>
                    </div>
                </Card>
            )
        })}</>


## Authors

**Kelly Stone** 

- [Github](https://github.com/kellystone4)
- [LinkedIn](https://www.linkedin.com/in/kelly-a-stone/)

**Rebecca Eng** 

- [Github](https://github.com/engrebecca)
- [LinkedIn](https://www.linkedin.com/in/engrebecca/)

**Christy Lee** 

- [Github](https://github.com/christyglee)
- [LinkedIn](https://www.linkedin.com/in/christy-lee/)

**Kelly Kim** 

- [Github](https://github.com/kellykim831)
- [LinkedIn](https://www.linkedin.com/in/realtorkellykim/)
<br> 

## Acknowledgments

* [Link to Google](https://www.google.com)
* [Link to W3 Schools](https://www.w3schools.com)
* [Link to StackOverflow](https://www.stackoverflow.com)
* [Link to Node.js](https://nodejs.org/en/)













