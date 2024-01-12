// import libraries
import axios from 'axios';
import * as cheerio from 'cheerio';

// website URL, folder where images will be stored
const websiteURL = 'https://memegen-link-examples-upleveled.netlify.app/';
const folderName = './memes';

// check if folder "memes" exists, otherwise create
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName, { recursive: true });
}

// function to scrape memes
