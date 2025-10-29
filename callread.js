const fs=require('fs');
fs.readFile('demo1.txt','utf-8',function(err,data){
    if(err){
        console.log("Error: ",err);
    }else{
        console.log("File content: ", data);
    }
});