exports.calculate = (srcWidth, srcHeight, maxWidth, maxHeight) => {
    let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return {width: Math.round(srcWidth * ratio * 100) / 100, height: Math.round(srcHeight * ratio * 100) / 100};
};