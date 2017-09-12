# image-aspect-ratio
Image aspect ratio is a utility module which provides straight-forward, way to calculate aspect ratio of a image to fit within a given box.


## Installation

To install strong-password-generator, use [npm](http://github.com/npm/npm):

```
npm install image-aspect-ratio
```

## Usage

```javascript
var imageAspectRatio = require("image-aspect-ratio");

imageAspectRatio.calculate(srcWidth, srcHeight, maxWidth, maxHeight);

```
### example
```javascript
var imageAspectRatio = require("image-aspect-ratio");

imageAspectRatio.calculate(srcWidth, srcHeight, maxWidth, maxHeight);
// >> "cWst77snJtVris"
```

## API

`image-aspect-ratio.`

- `calculate(srcWidth, srcHeight, maxWidth, maxHeight)`
  - `srcWidth` - width of the original image {Number} [REQUIRED]
  - `srcHeight` - height of the original image {Number} [REQUIRED]
  - `maxWidth` - maximum width of the box which wraps the image {Number} [REQUIRED]
  - `maxHeight` - maximum heigth of the box which wraps the image {Number} [REQUIRED]
