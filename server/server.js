const express = require('express');
const path =  require('path');
let app = express();

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

app.listen(3000);