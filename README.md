![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

<h1 align="center">Interactive Frontend Milestone 2 Project 
<h2 align="center">Automate your Golfing experience :robot: </h2>


Here is the deployed version on the site : 
**[Golf Score App](https://marks530.github.io/Second-Milestone-Project-MS2/)**

# **Table of Contents**

- [**Project Introduction**](#project-introduction)
- [**Project Goals**](#project-goals)
- [**User Goals**](#user-goals)
- [**User Stories**](#user-stories)
- [**Site Owner Goals**](#site-owner-goals)
- [**UX**](#ux)
- [**Design Choices**](#design-choices)
- [**Wireframes**](#wireframes)
- [**Features**](#features)
	- [Existing features](#existing-features)
	- [Features left to implement](#features-left-to-implement)       
- [**Technologies Used**](#technologies-used)
- [**Testing**](#testing)	
- [**Bugs**](#bugs)
- [**Deployment**](#deployment)
- [**Credits**](#credits)
	- [Content](#content)
	- [Acknowledgements](#acknowledgements)
- [**Footnote**](footnote)    
    

    ## Project Introduction UX
    
    I am a regular golfer, I wanted an application to document my scores etc.

    ## Project Goals
The goal of the project is to provide a web based application to groups of casual golfers. The application will offer a means of collecting the scores of golf players who have just finished playing a round of golf and wish to submit their scores to calculate the winner of a competition. The player will enter their score (in golf strokes) for each golf hole and be given a total of the strokes for the round.
As this is a project to be completed for a Milestone Project for the Code Institute the goal is to create an interactive website demonstrating this skills learn in the second phase of the course.
The project was created using HTML CSS and JavaScript and is ready for further development. I would like very much to develop the project using the new skills that I will learn in the next stages of the course such as adding a database to store user statistics. This can be done back-end applications and using the Python language.

    ## User Goals
The user of the site will be initially be the organizer of the event usually the captain of the golf society. The captain will set up the event and he will then instruct the competitors to log in with their names and be taken to the score entry page.
This method of collecting scores will give the organizer a immediate update on the players scores and information on who is leading the competition. The player who is entering his score will get a total of the number of strokes and a verification that his score has been entered on the system

    ## User Stories
The user/player is introduced to the site by the event organiser and likes what he/she sees
When the user connects to the website he/she is presented with event information. The home page contains images of the course they are playing and details of the days timetable.
When the player has finished their round they connect to the site and click in the "Score Entry" button.
They are presented with a score card in the form of a table showing the the golf hole number, the golf hole index 
(which is the degree of difficulty of the each hole 1 being the most difficult) and the empty score area. The table also shows the par value 
for each of the golf holes which is the expected score for each hole. The par 3 holes are usually the shortest usually reachable in one shot, the 
par 4 holes are longer and reachable in 2 shots and the par 5 holes are the longest reachable in 3 shots. 
Above the score card the user will find the score entry area with a header showing a hole number, an increment and decrement buttons
and the score entry box. The score entry area is programmed the present the golf holes starting at hole 1 and ending at hole 9 and the 
score entry box will already contain the par value for the given hole and that will be the default score for each hole. 
This application will reduce the onerous task of collating all the scores for all the players for the organizer.
     ## Site Owner Goals
The site owner is getting a web application which has copied a typical score entry system used in golf clubs and is making it available to casual golfers and golf society members. (Golf Societies are groups of amateur golfers that have formed to enable the members to be involved in golf tournaments without being members of a golf club. Usually societies are formed in a workplace or a social gathering point such as a pub). In the club environment this service is provided by Howdiddo.com and it works so well it is in constant use. 
Scores for each golf tournament are stored and available to the user at any time. The site owner is offering an effective professional service to the amateur golfer. Golfers casual or club members are hugely interested in their statistics the score achieved, each round the number of points scored, reducing their handicap, the list goes on.
All of which means that golfers players users(the terms are all interchangeable here) are all regularly referring to the database of their statistics and thereby looking up information from the website. The service is intended to be free to use with sign up and log in required. As in the professional environment the user is presented with stream of advertising for all sorts of golf products and services. This provides the site owner will regular users who can be exposed to relevant advertising.
    
    ## UX
   

    ## Design Choices

The home page is designed to be a relatively simple page with a Navigation bar, a hero image of the golf course
and banner message with information on the event. This is followed by a carousel allowing the site to show the user multiple images of the golf course. The footer will contain useful contact information.
This page serves as an introduction to the event as all the users will already be familiar with.
The most important element on the page is the "Score Entry" button which is a link that takes the user to the score entry page.
The layout of the page is based on the score entry system used by HowdidIdo.com used by golf clubs and the Maths game used in the Code Institute course on Javascript demonstrated by Matt Rudge.
This combination seemed to fit perfectly the requirements for the purpose.
The increment/decrement buttons around the par value and the hole count keeping track of the hole number
        ###Landing Page
The landing page is created with a welcome message and many images of the golf course included in the event.
The page layout contains a navigation bar, a banner image, a welcome message and event details section, a carousel with multiple images of the golf course, an information section and a footer.
In the center of the page is the "Score Entry" button which is the call to action for the page. This takes the user to the score entry page 

    ###Score Entry Page
This page contains the business area of the site. The layout directs the user to log in and enter their score via the score entry area to appear in the score card table. The structure and layout of the score entry area is based on the Maths game used in the JavaScript course. The increment and decrement were a perfect fit for the score entry structure. The JavaScript content takes some elements from the game but is largely modified. Extra functions to get the players name, fetch the par values and present them in the score entry box, log the scores in the score card, total the numbers of strokes and add the total score to the score card

    ###Leaderboard Page

    ## Wireframes

    #### Wireframe 1 - Desktop View

    -[home page - golf background](wireframes/index_desktop.jpg "Index.html Desktop Wireframe" )
    -[score entry page - score card] (wireframes/score_entry_desktop.jpg) "Score.html Desktop Wireframe
    *Fig 1. Desktop Landing Page *

    Wireframes etc.

    ## **Features**

    #### **Existing features**

    #### **Features Left to Implement** 
    As the project was implemented using only front-end interactive technologies there is plenty of scope for development by employing backend services. In order to keep the user coming back to the site records of each event and associated statistics could be made available. The user could look up every time a round of golf was played and the individual scores at the time. Using the historical data a host of other useful statistics can be calculated. The user can measure their performance over time. As with similar sites relevant advertisements can be displayed to the user and an e-commerce utility could be added to the site

    ## Technologies Used

    -   [Javascript](https://www.javascript.com/)
    -   [CSS3](https://www.w3schools.com/css/default.asp)
    -   [HTML5](https://www.w3schools.com/html/) 


    ## Testing

    ## Bugs
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
    This link was causing problems in the footer section not working to display the logos for the social media links. Using a link with version 4.7.0 fixed the problems. I intend to investigate this issue when more time is available 
    ## Deployment

    I had a minor issue whilst deploying via Github pages as originally my html files were in a folder in the root filesystem. Once I deployed to Github pages, I was only able to view the README.md. To rectify this I simply moved my html files to the root folder of the project.  

    I used StackOverflow to resolve my minor **[issue](https://stackoverflow.com/questions/48919200/github-pages-only-showing-readme-file)    
    ## Credits

    #### Content
    #### Acknowledgements

    ## Footnote