const fs=require('fs');
const requestHandler=(req,res)=>{
const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs.readFile("message1.txt",{encoding : 'utf-8'},(err,data)=>{
            if(err){
                console.log(err);
            }
        res.write('<html>')
        res.write('<head><title>My First Page</title>')
         res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form>')
        res.write('</html>')
        return res.end();

        })
        
    }
    else if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',chunk=>{
            body.push(chunk)
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split("=")[1];

            fs.writeFile("message1.txt",message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            })

        })
    }
}
//module.exports=requestHandler;

// module.exports={
//     handler:requestHandler
// }

exports.handler=requestHandler;
