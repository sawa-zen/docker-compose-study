var express = require("express");
var app = express();

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
    }
];

// 写真リストを取得するAPI
app.get("/", function(req, res, next){
    res.json(photoList);
});
