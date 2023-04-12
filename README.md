Emoji in React

Goal

The goal is to created emoji application where we can search some emoji and clik to copy that emoji.

npm start

I created react app with name emoji and started my project with npm start.

I created new folder componets where I created App file where I had state for inputText with default value of empty marks, and that state added as props in the child component. I created json file in this folder which contains information about emoji such as titles, symbols and keywords.
I created Header file with title and with icons on the left and right side. This file I imported in App file. Afther that I created SearchInput file where I had form-for that I created handleSubmit function and one input field with value and onChange- for this I created handleChange function with same code.
I created InputList file to display list of emoji, for that I used map statement, splice method to show only 20 emojis on the page, and I also used filter and if statement. I created div with className info, this must show us on the right side of the emoji click to copy emoji, for that I used onClick function with navigator code, so we could copy that emoji in this way.
I created index.css for stayling this application. 