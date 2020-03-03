const express = require('express');
const path =  require('path');
const bodyParser =  require('body-parser');
const fs = require('fs');
let app = express();

let dataPath = path.join(__dirname, '../data.json');

//super special middleware logger
app.use((req, res, next) => {
    console.log(req.url);
    next();
})

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...')
// })

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/order/:id', (req, res) => {
//     let id = req.params.id;
//     res.send(id);
// });

app.use(bodyParser.urlencoded({extended: false}));


app.post('/forms-submissions', (req, res) => {
    let po = {
        email: req.body.email,
        password: req.body.password
    }


fs.writeFile(dataPath, JSON.stringify(po), (err) => {
    if (err) console.log(err);
});
    res.send(po);
})

app.listen(3000);