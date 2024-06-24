const fs = require('node:fs');

const getPage = (page,res)=>{
    fs.readFile(`./pages/${page}`,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        res.send(data);
    });
};

module.exports = getPage;