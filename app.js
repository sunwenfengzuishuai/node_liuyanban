let fs = require('fs')
let http = require('http')

http
    .createServer((req, res) => {
        let url = req.url
        if(url=='/'){
            console.log('有人访问首页啦')
            fs.readFile('./views/index.html',(err,data)=>{
                if(err){
                    res.end('404 not found')
                }else{
                    res.end(data)
                }
            })
        }else if(url.indexOf('/public')==0){
            console.log('有人访问静态资源啦')
            fs.readFile('.'+url,(err,data)=>{
                if(err){
                    res.end('404 not found')
                }else{
                    res.end(data)
                }
            })
        }
    })
    .listen(3000,()=>{
        console.log('3000端口监听成功')
    })
