# node.js-meme-scraper

## TODOs

- [x] Create a Node.js CLI application
  - [x] Add `.gitignore` file with the content from cheatsheet
  - [x] Add "memes" folder to `.gitignore`
- [x] Create a directory named "memes"
- [x] Research for libraries
  - [x] Avoid libraries that do multiple steps
- [x] Connect to the current version of the website https://memegen-link-examples-upleveled.netlify.app/
  - [ ] Avoid any caching?
- [x] Download HTML string from the website and save in a variable
- [x] Search inside HTML string for `<img src="..." />` and extract to array of URLs (strings)
  - [x] Maybe inside of the `<section id="images">`?
- [x] Extract first 10 URLs from array
- [x] Loop over array of first 10 URLs and:
  - [x] Download the image data (string)
  - [x] Generate path in the "memes" folder (eg. `./memes/03.jpg`)
    - [x] 1-10
    - [x] double digits
    - [x] `.jpg`
  - [x] Create an empty file with the path
  - [x] Put the image data into the file
- [x] Test it multiple times
- [x] Set up the test
