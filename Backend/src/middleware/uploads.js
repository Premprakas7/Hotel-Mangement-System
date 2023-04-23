

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  

const options = {
    storage,
    fileFilter,
    limits:{
        fileSize:1024*1024*5
    }
};

const uploads=multer(options);
module.exports=uploads;