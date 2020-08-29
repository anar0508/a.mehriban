const path = require("path");
const fs = require("fs");
const Jimp = require("jimp");

const checkPhotoFormat = (tempPath, file, res) => {
  const extension = path.extname(file.originalname).toLowerCase();
  if (extension !== ".jpg") {
    fs.unlink(tempPath, (err) => {
      if (err) {
        console.log(`Error status 500 on image post (file unlink), server.js`);
        return res.status(500);
      }
      console.log(
        `Error status 415 on image post (unsupported file type), server.js`
      );
      return res.status(415);
    });
  } else return ".jpg";
};

const watermarkPicture = async (
  finalPath,
  activePath,
  dimensions,
  watermarkedPath
) => {
  try {
    const original = await Jimp.read(finalPath);
    original.clone().write(activePath);
    const active = await Jimp.read(activePath);
    const logo = await Jimp.read("./server/images/logo/logo.png");
    logo.opacity(0.45);
    const watermark = active.composite(
      logo,
      Math.floor(dimensions.width / 2),
      Math.floor(dimensions.height / 2),
      [Jimp.BLEND_DESTINATION_OVER, 0.2, 0.2]
    );
    watermark.quality(100).write(watermarkedPath);
    fs.unlink(activePath, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (err_1) {
    console.error(err_1);
  }
};

const resizePicture = async (finalPath, resizedPath, res, idPhoto) => {
  try {
    res.json(idPhoto).status(201);
    const original = await Jimp.read(finalPath);
    const resized = original.quality(40).write(resizedPath);
    return resized;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

async function getPaths(query, homepage, gallery, connection) {
  let idPhoto = (
    await query(
      `INSERT INTO photos (homepage, gallery) VALUES (${connection.escape(Number(homepage))},${connection.escape(gallery)})`
    )
  ).insertId;

  const finalPath = path.join(__dirname, `/images/${idPhoto}.jpg`);
  let resizedPath = path.join(__dirname, `/images/${idPhoto}r.jpg`);
  let watermarkedPath = path.join(__dirname, `/images/${idPhoto}w.jpg`);
  let activePath = path.join(__dirname, `/images/${idPhoto}a.jpg`);
  return { idPhoto, finalPath, resizedPath, activePath, watermarkedPath };
}

const removePaths = (file) => {
  fs.access(file, fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.unlink(file, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
};

module.exports = {
  watermarkPicture,
  resizePicture,
  getPaths,
  checkPhotoFormat,
  removePaths
};
