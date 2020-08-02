const path = require("path");



let getImages = async (query, connection, req, res) => {
    const gallery = req.query.gallery;
    const homepage = req.query.homepage;      
    // const directoryPath = path.join(__dirname, `images/${gallery}/`);

    let getImagesSQL;
    if (homepage==='true'){
        getImagesSQL = `SELECT Resized FROM coins WHERE Homepage=true`;
    } else {
        getImagesSQL = `SELECT Resized FROM coins WHERE Homepage=true`;
    }
        
    
        try {
        let img = await query(getImageSQL);
        let property = Object.keys(img[0]);
        let fileName = 'img/obverse/' + img[0][property] + '.png';
        res.sendFile(path.join(__dirname, fileName))
    } catch (error) {
        res.status(400).send(error);
    }

};

let loadImage = async (query, connection, req, res) => {
    const gallery = req.body.gallery;    
    const directoryPath = path.join(__dirname, `images/${gallery}/`);

    let getImagesSQL;
    if (!gallery) {
        getImageSQL = `SELECT ${side === 'obverse' ? 'obverse_coin' : 'reverse_coin'} FROM coins WHERE idCoin = ${connection.escape(id)}`;

    } else if (type === 'popular') {
        getImageSQL = `SELECT obverse_coin FROM coins WHERE popularity> 20 ORDER BY popularity DESC LIMIT 1`;
    }
    else {
        getImageSQL = `SELECT obverse_coin FROM coins WHERE coin_type = ${connection.escape(type)} LIMIT 1`;
    }
    try {
        let img = await query(getImageSQL);
        let property = Object.keys(img[0]);
        let fileName = 'img/obverse/' + img[0][property] + '.png';
        res.sendFile(path.join(__dirname, fileName))
    } catch (error) {
        res.status(400).send(error);
    }

};

module.exports = { getImages, loadImage }

