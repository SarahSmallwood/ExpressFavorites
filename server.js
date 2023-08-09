const express = require('express');

const app = express();

const shopping = [shoes, earrings, skirts, yogaGear, hikingGear, wine, cameras, snorkelGear, tops, boots ]

app.get('/', function (req, res){
    res.send('<h1>Shopping List</h1>');
});

app.get('/:indexShoppingList', (req,res)=>{

})

app.listen(3000, function () {
    console.log('Port 3000')
})