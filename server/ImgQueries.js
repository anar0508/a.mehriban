const fs = require("fs");
const util = require("util");
const path = require("path");
const {
  checkPhotoFormat,
  getPaths,
  resizePicture,
  watermarkPicture,
  removePaths,
} = require("./imgProcessingService");
const { createUpdatePhotoSQL } = require("./SQLCreators");

const rename = util.promisify(fs.rename);

let getImages = async (query, connection, req, res) => {
  const { homepage, gallery } = req.query;
  let getImagesSQL;
  if (!homepage) {
    getImagesSQL = `SELECT idPhotos, photoWidth, photoHeight FROM photos WHERE 
    gallery=${connection.escape(gallery)}`;
  } else {
    getImagesSQL = `SELECT idPhotos, photoWidth, photoHeight FROM photos WHERE 
    homepage=1`;
  }

  try {
    let images = await query(getImagesSQL);
    res.json(images).status(200);
  } catch (error) {
    res.status(400).send(error);
  }
};

let loadImage = async (query, connection, req, res, sizeOf) => {
  const { homepage, gallery } = req.body;
  let finalFile, resizedFile, activeFile, watermarkedFile, idFile;

  try {
    let file = req.file;
    const tempPath = file.path;

    if (checkPhotoFormat(tempPath, file, res) === ".jpg") {
      let {
        idPhoto,
        finalPath,
        resizedPath,
        activePath,
        watermarkedPath,
      } = await getPaths(query, homepage, gallery, connection);
      idFile = idPhoto;
      finalFile = finalPath;
      resizedFile = resizedPath;
      activeFile = activePath;
      watermarkedFile = watermarkedPath;

      await rename(tempPath, finalPath);
      await resizePicture(finalPath, resizedPath, res, idPhoto);
      let dimensions = await sizeOf(finalPath);
      await watermarkPicture(
        finalPath,
        activePath,
        dimensions,
        watermarkedPath
      );
      let updatePhotoSQL = createUpdatePhotoSQL(
        connection,
        idPhoto,
        dimensions
      );
      await query(updatePhotoSQL);
    }
  } catch (error) {
    console.log(error);
    removePaths(activeFile);
    removePaths(finalFile);
    removePaths(watermarkedFile);
    removePaths(resizedFile);

    try {
      await query(
        `DELETE FROM photos WHERE (idPhotos = ${connection.escape(idFile)});`
      );
    } catch (error) {
      console.log(error);
    }
  }
};

let getImage = async (query, connection, req, res) => {
  const id = req.params.id;
  const { photoVersion } = req.query;
  let getImageSQL = `SELECT ${photoVersion} FROM photos WHERE idPhotos=${connection.escape(Number(id))}`;
   
  try {
    let image = (await query(getImageSQL))[0][`${photoVersion}`];
    
    res.sendFile(path.join(__dirname, image));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
//   const directoryPath = path.join(__dirname, `images/${gallery}/`);

//   let getImagesSQL;
//   if (!gallery) {
//     getImageSQL = `SELECT ${
//       side === "obverse" ? "obverse_coin" : "reverse_coin"
//     } FROM coins WHERE idCoin = ${connection.escape(id)}`;
//   } else if (type === "popular") {
//     getImageSQL = `SELECT obverse_coin FROM coins WHERE popularity> 20 ORDER BY popularity DESC LIMIT 1`;
//   } else {
//     getImageSQL = `SELECT obverse_coin FROM coins WHERE coin_type = ${connection.escape(
//       type
//     )} LIMIT 1`;
//   }
//   try {
//     let img = await query(getImageSQL);
//     let property = Object.keys(img[0]);
//     let fileName = "img/obverse/" + img[0][property] + ".png";
//     res.sendFile(path.join(__dirname, fileName));
//   } catch (error) {
//     res.status(400).send(error);
//   }

module.exports = { getImages, loadImage, getImage };
