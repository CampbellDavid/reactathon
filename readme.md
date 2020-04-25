<img src="src/assets/ga-logo.png" width=150>

# Project Two - Breaking Bad

Software Engineering Immersive: Project 2 (Pair Project)

This was a pair project assigned for the Software Engineering Immersive at General Assembly London (Week 5) built with React.js.

## Team members:

- Xuan Wang (https://github.com/mmxw)
- David Campbell (https://github.com/CampbellDavid)

## Built With

1. HTML
2. Bulma
3. JavaScript
   - ECMAScript6
   - React.js
   - Express.js
   - axios
4. GitHub

# User Experience

## Homepage

We designed out homepage to be minimal with just a navbar and background. We found that the use of a stretched gif image rendered poorly on the page after running the server, hence we used the ‘react-youtube-background’ package to display a YouTube video as a background.

<img src="src/assets/screenshots/homepage.png" width=700>

#

## Viewing Characters

The character index page allows the user to search through the list of characters returned by the API. The user is presented with a full list of all characters and their names on the index page. Each character image has been sized to fit a uniform 2x3 card size, though the various length of names sometimes creates inequal boundaries for the cards.

<img src="src/assets/screenshots/char-index.png" width=700>

#

## Viewing a single character

Each character card on the index page (above) contains a link to the relevant id of the focused character. Upon clicking, the user will be redirected to the page that contains the character information nested within the relevant section of the API.

<img src="src/assets/screenshots/char-show.png" width=700>

#

## Viewing Seasons

Seasons can be viewed by navigating to the ‘seasons’ link in the navbar. The user will be presented with the five seasons as five cards, uniform in size. Each season card links to an index page displaying each episode within that season (pictured below).

<img src="src/assets/screenshots/season-index.png" width=400>
<img src="src/assets/screenshots/episode-index.png" width=400>

#

## Viewing a single episode

The episode view page displays the air date of said episode, the title of it and the characters involved in the episode.

<img src="src/assets/screenshots/episode-show.png" width=700>

#

## Quotes and Deaths

The various quotes and deaths of each character can be accessed via their respective links in the navbar. Each page will display its data as an index of cards which display the necessary information, which includes the character name at the top followed by contents below.

<img src="src/assets/screenshots/quote-index.png" width=400>
<img src="src/assets/screenshots/death-index.png" width=400>

#

## Error Page

The error page will be thrown whenever an unknown route is entered in the navigation bar of the browser.

<img src="src/assets/screenshots/unknown-page.png" width=700>

#

## Planning

-- BACK END --

The back end of the application was obtained via a web search for an API. We chose the Breaking Bad API as it has a lot of content that we could work with and was a topic of interest to both me and Xuan.

-- FRONT END --

The task required the use of React.js for the development of the front end.

## Project Management

We structured the ten days we had as follows:
Day 1:

- Locating a suitable API
- Planning each page
- Starting to code

Day 2:

- Continued to code
- Styling
- Presentation

## Successes and key learnings

This project was the first project that me and a classmate used to obtain data from a back end, as project one was solely a front end application. Obtaining and rendering the correct information using Axios and React.js was a challenge at first, however me and my teammate worked extremely well together and we overcame these challenges as a team.

Learning how to use Axios and React.js proved to be an exceptionally fun task once we learned how to properly render data from the back end onto the front end. We were able to use the same techniques that we learned from project one and implement them onto this project, to show the data. As datasets were the same as what we were used to working with in the previous project, we understood which methods we needed to use to display certain types of data. For example, the API retuned an array of objects for most datasets, meaning we could map through the array and use dot-notation to deliver the necessary data to the user:

- Parent component:

```
<div className="columns is-mobile is-multiline">
  {charQuoteArr.length === 0 && this.state.userInput ?
    <NotFound /> :
    charQuoteArr.map(quote => <QuoteCard key={quote.quote_id} {...quote} />)}
</div>
```

- Child component:

```
import React from 'react'

const QuoteCard = ({ quote, author }) => (
  <div className="column is-half-desktop is-one-third-tablet is-full-mobile">
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{author}</h4>
      </div>
      <div className="card-content">
        <p><i>"{quote}"</i></p>
      </div>
    </div>
  </div>
)

export default QuoteCard
```

## Challenges & future improvements

The following code illustrates the challenge we faced when trying to obtain two different data sets from within the API. We worked tirelessly to find the solution to this problem, and eventually got the data to return in the console.log. From there, it was simply a matter of rendering the data on the user interface:

```
 await axios.all([
        axios.get('https://breakingbadapi.com/api/episodes'),
        axios.get('https://breakingbadapi.com/api/characters')
      ])
        .then(axios.spread((epRequest, charRequest) => {
          this.setState({
            episode: epRequest.data[episodeId()],
            allCharacters: charRequest.data
          })

        }))
```

We wanted to include a search feature on the page which would filter the list according to the user’s choice of words, matching the user input to a character’s name in real time. Xuan was happy to take on this task and did a fantastic job. The following code demonstrates the functionality of the search bar:

```
import React from 'react'

const SearchBar = ({ onChange }) => (
  <div className="columns is-centered">
    <div className="control column is-half">
      <input
        type="text"
        className="input"
        placeholder="Search..."
        onChange={e => {
          const userInput = e.target.value
          onChange(userInput)
        }}
      />
    </div>
  </div>
)

export default SearchBar
```
