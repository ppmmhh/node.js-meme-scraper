// import libraries
import fs from 'node:fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

// website URL, folder where images will be stored
const websiteUrl = 'https://memegen-link-examples-upleveled.netlify.app/';
const folderName = './memes';

// check if folder "memes" exists, otherwise create
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName, { recursive: true });
}

// function to scrape memes
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const url = require('url');

const scrapeImages = async (url) => {
  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);

    $('img')
      .slice(0, 10)
      .each(function (i, element) {
        const memeUrl = $(elem).attr('src');
        downloadedMemes.push(memeUrl);
      });
    // Generate the file names
    let fileName = 1;
    for (const memeUrl of downloadedMemes) {
      fileName = fileName < 10 ? '0' + fileName : fileName;

      // Get Image with axios
      const imageResponse = await axios({
        method: 'get',
        url: memeUrl,
        responseType: 'stream',
      });

      // Save image to file
      imageResponse.data.pipe(fs.createWriteStream(`./memes/${fileName}.jpg`));
      fileName++;
    }
    console.log('Download was successful');
  } catch (error) {
    console.error(error);
  }
};
