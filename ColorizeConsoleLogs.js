// %c to prefix the text you want to have styled

console.log(
  '%cRed %cBlue %cGreenBackground',
  'color: red;', // Then pass the style to be applied as a second parameter, following the css syntax
  'color: blue;', // We can also add more than one styles, by using multiple %c
  'background-color: green;'
)

