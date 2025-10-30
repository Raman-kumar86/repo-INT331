const fs=require('fs');
fs.readFile('demo2.txt','utf-8',function(err,data){
    if(err){
        console.log("Error: ",err);
    }else{
        console.log("File content: qkdjnjkadsnlojn asdoljn ", data);
    }
});