# Sudoku generator

start with 'npm start'

run tests with 'npm test'

The exercise was to build a sudoku generator using TDD

Initially I started thinking this would be a pretty simple project, my steps were:

 -  Create / use some boilerplate code with the usual tools, linting, babel, jest etc.
 -  Scaffold out some very simple rendering markup using react
 -  Create some tests around generating the database of numbers
 -  Walk through each test adding a layer of complexity each time
 
 I hit a brick wall after about an hour and a half, as far as I could see my code should be gerating a perfect array of 9 smaller arrays with each row and column not repeating the number, however it was hanging everytime. This was before I even added the third rule that each mini grid should also only feature the 1 to 9 numbers once.
 
At this point I had to go back to the drawing board. From logging my results I could see that the generator was getting stuck and was unable to proceed, I realised that gerating a soduku wasn't as simple as adding any number that would fit into the matrix, eventually it would hit a wall.

This is when I realised that the generator would have to work as a crawler. If it hit a brick wall it would have to come back, slicing and pushing back and forth along the arrays, retracing its steps every time it hit a dead end. 

I started sketching out some tests for this new design with testable functions such as add row, add number and remove row and remove number with maybe a state machine as a controller but was quite far over the 2 hours I set for the exercise and had to put a pin in it.


 
