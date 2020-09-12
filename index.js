const fastify=require('fastify')()
fastify.get('/',(req,res)=>{
    res.redirect("https://www.google.com")
})


fastify.listen(5000,function(err,address){
    if(err){
        console.log(err)
        process.exit(1);

    }
    else{
        console.log("server is listening")
    }
})