const http=require('http');
const server=http.createServer((req,res)=>{
   const url=req.url;
   if(url==="/"){
    //res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>MY First Page</title></head>')
    res.write('<body><h1>Hello node.js</h1></body>')
    res.write('</html>')
    return res.end();
   }
   else if(url==="/home"){
    res.write('<html>')
    res.write('<head><title>MY First Page</title></head>')
    res.write('<body><h1> Welcome home</h1></body>')
    res.write('</html>')
     return res.end();
   }
   else if(url==="/about"){
    res.write('<html>')
    res.write('<head><title>MY First Page</title></head>')
    res.write('<body><h1> Welcome to About Us page</h1></body>')
    res.write('</html>')
     return res.end();
   }
   else if(url==="/node"){
    res.write('<html>')
    res.write('<head><title>MY First Page</title></head>')
    res.write('<body><h1> Welcome to my Node Js project</h1></body>')
    res.write('</html>')
     return res.end();
   }
   


})
server.listen(4000)

