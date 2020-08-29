const createUpdatePhotoSQL = (
  connection,
  idPhoto,
  dimensions
) => {
  return `UPDATE photos SET original = ${connection.escape(`/images/${idPhoto}.jpg`)},
         photoWidth = ${connection.escape(Number(dimensions.width))}, 
         photoHeight = ${connection.escape(Number(dimensions.height))}, 
         watermark = ${connection.escape(`/images/${idPhoto}w.jpg`)}, 
         resized = ${connection.escape(`/images/${idPhoto}r.jpg`)} 
         WHERE (idPhotos = ${connection.escape(Number(idPhoto))});`;
};
module.exports = { createUpdatePhotoSQL};
