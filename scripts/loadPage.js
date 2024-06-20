const fs = require('node:fs');

const loadData = (page,res)=>{
    fs.readFile(`./pages/${page}`,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        res.write(data);
        res.end();
    });
};

module.exports = loadData;