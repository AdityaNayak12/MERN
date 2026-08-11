const http = require('http')



const Myserver = http.createServer((req, res)=>{
    console.log(req.url)
    switch(req.url){
        case '/':
            res.end("This is home page")
            break;
        case '/about':
            res.end("this is about page")
            break;
        case '/contact':
            res.end('this is contact page')
            break;
    }

})


Myserver.listen(8001, ()=>{
    console.log("Server running at 8001")
})