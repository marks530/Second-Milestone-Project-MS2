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
    Golf is played in Ireland by over 180,000 people. This is the number of registered players who are members of golf clubs. It is also played by a huge number of people who are not members of clubs and who play golf regularly. They are very often members of golf societies. Golf societies are groups of amateur/casual golfers that have been formed to enable the society members to be involved in golf tournaments without being actual members of a golf club. Usually societies are formed in a workplace or a social gathering point such as a sports club or a pub.
    Golf club have only recently(in the last 5 years) updated their IT systems to allow scores and golf handicaps to be collected digitally. This is a great benefit to clubs members. They can look up their scores from all of the tournaments included in the system. This service is provided by a company called Howdiddo.com and is so successful is hard to imagine ever being without it.
    This project is about replicating that service for the casual golfer. 

    ## Project Goals
The goal of the project is to provide a web based application to groups of casual golfers. The application will offer a means of collecting the scores of golf players who have just finished playing a round of golf and wish to submit their scores to calculate the winner of a competition. The player will enter their score (in golf strokes) for each golf hole and be given a total of the strokes for the round.
As this is a project to be completed for a Milestone Project for the Code Institute the goal is to create an interactive website demonstrating this skills learn in the second phase of the course.
The project was created using HTML CSS and JavaScript and is ready for further development. I would like very much to develop the project using the new skills that I will learn in the next stages of the course such as adding a database to store user statistics. This can be done back-end applications and using the Python language.
## User Goals
The user of the site will be initially be the organizer of the event usually the captain of the golf society. The captain will set up the event and he will then instruct the competitors to log in with their names and be taken to the score entry page.
This method of collecting scores will give the organizer a immediate update on the players scores and information on who is leading the competition. The player who is entering his score will get a total of the number of strokes and a verification that his score has been entered on the system.
The player can also view the leaderboard and see how they have fared in the competition.
## User Stories
The user/player is introduced to the site by the event organizer.
When the user connects to the website he/she is presented with event information. The home page contains images of the course they are playing and details of the days timetable.
When the player has finished their round they connect to the site and click in the "Score Entry" button.
They are presented with a score card in the form of a table showing the the golf hole number, the golf hole index (which is the degree of difficulty of the each hole 1 being the most difficult) and the empty score area. The table also shows the par value for each of the golf holes which is the expected score for each hole. The par 3 holes are usually the shortest usually reachable in one shot, the 
par 4 holes are longer and reachable in 2 shots and the par 5 holes are the longest reachable in 3 shots. 
Above the score card the user will find the score entry area with a header showing a hole number, an increment and decrement buttons and the score entry box. 
The score entry area is programmed the present the golf holes starting at hole 1 and ending at hole 9 (18 holes will introduced as the app evolves)and the score entry box will already contain the par value for the given hole and that will be the default score for each hole. 
This application will reduce the onerous task of collating all the scores for all the players and the organizer. At the moment the application is limited in its scope and will be developed as the Full Stack course progress.
The user enters their name and hits the "Click to enter Score button" and the name is entered above the score card. They then proceed to enter their score by using the increment/decrement buttons and clicking the submit button when the score is correct. So all the scores are entered with clicks of the mouse.
The answer box or score box automatically picks up the par value for each hole and enters it in the score box. Each time the submit button is clicked for a hole the score is added to hole row on the score card. At hole 9 the user is presented with an alert and a congratulations message, their name and their total number of strokes or score. 
The players name and score are added to the leaderboard on a separate page using the web storage feature of the browser. Each player can see their position on the leaderboard.

## Site Owner Goals
The site owner is getting a web application which has copied a typical score entry system used in golf clubs and is making it available to casual golfers and golf society members.  In the club environment this service is provided by Howdiddo.com and it works so well it is in constant use. 
Scores for each golf tournament are stored and available to the user at any time. The site owner is offering an effective professional service to the casual golfer. Golfers casual or club members are hugely interested in their statistics, the score achieved,the number of points scored each round , reducing their handicap, and so on.
All of which means that golfers players/users(the terms are all interchangeable here) are all regularly referring to the database of their statistics and thereby looking up information from the website. 
The service is intended to be free to use with sign up and log in required. 
In the professional environment the user is presented with stream of advertising for all sorts of golf products and services. This provides the site owner will regular users who can be exposed to relevant advertising.
## UX

The home page is designed to be a relatively simple page with a Navigation bar, a hero image of the golf course and banner message with information on the event. 
This is followed by a carousel allowing the site to show the user multiple images of the golf course. The footer will contain useful contact information.
This page serves as an introduction to the event as all the users will already be familiar with.
The most important element on the page is the "Score Entry" button which is a link that takes the user to the score entry page.
The layout of the page is based on the score entry system used by HowdidIdo.com used by golf clubs and the Maths game used in the Code Institute course on Javascript demonstrated by Matt Rudge.
This combination seemed to fit perfectly the requirements for the purpose.
The increment/decrement buttons around the par value and the hole count keeping track of the hole number
## Design Choice     

The site layout contains a navigation bar, a banner image, a welcome message and event details section, a carousel with multiple images of the golf course, an information section and a footer.
This is a simple layout which can be developed to suit many different courses throughout the country and indeed abroad
In the center of the page is the "Score Entry" button which is the call to action for the page. This takes the user to the score entry page 

This page contains the business area of the site. The layout directs the user to log in and enter their score via the score entry area to appear in the score card table. The structure and layout of the score entry area is based on the Maths game used in the JavaScript course. The increment and decrement were a perfect fit for the score entry structure. The JavaScript content takes some elements from the game but is largely modified. Extra functions to get the players name, fetch the par values and present them in the score entry box, log the scores in the score card, total the numbers of strokes and add the total score to the score card 
The leaderboard page contains a table with a column for the players names and a column for the total scores for each individual. The structure is based on the local storage property that allows access to a storage object saved across browser sessions. This accessed by functions created in both the JavaScript files on the site. The site is configured for a maximum of 9 players but can easily be extended

 
## Wireframes
![alt text](https://github.com/marks530/Second-Milestone-Project-MS2/blob/master/wireframes/score_entry_iphone.png "Logo Title Text 1")
## Features
The main features of the site are the interactive score card and leaderboard which allow the user view playing statistics and those of fellow competitors.
A carousel on the home page can show a range of images of a given course. Many more images can easily be added.
#### **Features Left to Implement** 
    As the project was implemented using only front-end interactive technologies there is plenty of scope for development by employing backend services. 
    The app was setup with 9 holes and a limit of 9 players. It would be very easy to extend this. But the first task was to get the app to work and then to extend later. I will look at improving the user experience by experimenting with different layouts and use of buttons 
    
    In order to keep the user coming back to the site records of each event and associated statistics could be made available. The user could look up every time a round of golf was played and the individual scores at the time. Using the historical data a host of other useful statistics can be calculated. The user can measure their performance over time. As with similar sites relevant advertisements can be displayed to the user and an e-commerce utility could be added to the site
    Using the landing page with its carousel and banner image it is possible to show multiple images of a given course and it would be a feature that could be extended over time. Templates could be set up for any number of different courses
  ## Technologies Used
  
  ## Testing
  
  
  ## Bugs
  This link was causing problems in the footer section not working to display the logos for the social media links. Using a link with version 4.7.0 fixed the problems. I intend to investigate this issue when more time is available.
  
  ## Deployment
  
  
  
  ## Content
  
  #### Acknowledgements
  
  
  ## Footnote