const fs=require('fs');
fs.readFile('demo3khbmkhj.txt','utf-8',function(err,data){
    if(err){
        console.log("Error: ",err);
    }else{
        console.log("File content: qkdjnjkadsnlojn asdoljn ", data);
    }
});