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
### example 01 : Calculation with Rectangle image with large width than height
```javascript
var imageAspectRatio = require("image-aspect-ratio");

imageAspectRatio.calculate(1250, 580, 200, 200);
// >> {"width":200,"height":92.8}
```

### example 02 : Calculation with Rectangle image with large height than width
```javascript
var imageAspectRatio = require("image-aspect-ratio");

imageAspectRatio.calculate(580, 1250, 200, 200);
// >> {"width":92.8,"height":200}
```

### example 03 : Calculation with Square image
```javascript
var imageAspectRatio = require("image-aspect-ratio");

imageAspectRatio.calculate(1250, 1250, 200, 200);
// >> {"width":200,"height":200}
```

## API

`image-aspect-ratio.`

- `calculate(srcWidth, srcHeight, maxWidth, maxHeight)`
  - `srcWidth` - width of the original image {Number} [REQUIRED]
  - `srcHeight` - height of the original image {Number} [REQUIRED]
  - `maxWidth` - maximum width of the box which wraps the image {Number} [REQUIRED]
  - `maxHeight` - maximum heigth of the box which wraps the image {Number} [REQUIRED]
