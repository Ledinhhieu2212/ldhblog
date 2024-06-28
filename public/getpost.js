const path = require('path')
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
let postlist = [];

const getPosts = async () => {
    await fs.readdir(dirPath, (err, files)=>{
        if(err){
            
        }
    })
}