const fs = require("fs");

const removeFile = (image_name) => {

    const directoryPath = 'C:\Users\Youcode\Desktop\MARHABA-DELIVRY\backend\images\1671028061674.png';
  
    try {
      fs.unlinkSync('C:\Users\Youcode\Desktop\MARHABA-DELIVRY\backend\images\1671028061674.png');
        console.log('deleted from fs file');
    
    } catch (err) {
        console.log(err)
    }
  };
  
  module.exports = {removeFile}
