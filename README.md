# Img Optimizations

> Allows you to optimize your static assets to increase page loading perfomance.

## Installation

> Please make sure you installed Node.js first (see here https://nodejs.org/en/download/)

```js
// Run this command to install all required dependencies
npm install

// Put your images with ext *.png* or *.jpg* within the 'src' folder.

// Run this command to optimize *.png* images
npm run optimize:png
// Or run this command to optimize *.jpg* images
npm run optimize:jpg

// The script will generate optimized versions of images in the 'dist' folder.
```

Please see 'gulpfile.js' for more details.

## Algorithms used:

- mozjpeg and guetzli to optimize .jpg files
- pngquant to optimize .png files

See more dependencies in the 'package.json' file.
