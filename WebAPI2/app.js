var express = require('express')
var bparser = require('body-parser')

var dbg = false
var port = 3000
var app = express()

app.get('/gets', getsFunction)
app.post('/posts', postsFunction)
app.put('/puts', putsFunction)
app.delete('/deletes', deletesFunction)

//app.all('*', cookErrors)

app.listen(port, dbgListening)


function dbgListening(){
    if (dbg){
        console.log(
            "Listening on " + String(port)
        )
    }
    
}

function responseFunction(req, res){
    //test emptyness
    if ( !(Object.keys(req.query).length === 0 && req.query.constructor === Object)  ){
        res.send(req.query)
    }else{
        res.send("No Query Headers.")
    }
}

function getsFunction(req, res){
    if (dbg) {
        console.log("gets")
    }
    responseFunction(req,res)
}

function postsFunction(req, res){
    if (dbg) {
        console.log('posts')
    }
    responseFunction(req, res)
}

function putsFunction(req, res){
    if (dbg) {
        console.log("puts")
    }
    responseFunction(req,res)
}

function deletesFunction(req, res){
    if (dbg) {
        console.log("deletes")
    }
    responseFunction(req,res)
}


