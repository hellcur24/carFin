const fs = require('fs');
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const filePath = path.join(path.dirname(require.main.filename), 'data', 'infoDB.json');



app.set('view engine', ejs);

app.use(express.static('public'));

app.get('/',(req,res) =>{
    fs.readFile(filePath,(error, fileContent) => {
        if(error){
            console.log(error);
        }else{
            let infoBd  = JSON.parse(fileContent);
            
            res.render(path.join(__dirname, 'views', 'index.ejs'),{
        
                cars: infoBd
            });
        }
    });
    
});

app.listen(4000,()=>{
    console.log('Server is runing on Port 4000');
});

