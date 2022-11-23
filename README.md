# Hidden Curriculum Skills Audit for Linguistics
This repository contains code for an academic skills audit created specifically for students in Language and Linguistics at Newcastle University. The audit uses WebSlides for the front end, with many of the swipe/interaction features disabled so that users can only go through the quiz by clicking on specific buttons. 
The quiz does not collect or store any data about particpant's responses; rather, it uses the responses within a single session to recommend particular areas where a student would benefit from further study. As such, the task can be deployed on any platform with JavaScript enabled and doesn't necessarily require a full server.

Below the relevant files are explained.

## HTML
index.html contains template slides for intro, questions, and feedback, which are populated from skills.js. For more information on the structure of this file and how to edit it, see https://webslides.tv

## JavaScript
Javascript is contained in the js/ folder. The file skills.js cycles through questions defined in skillsjson.js in a random order.
