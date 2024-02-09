let fs = require('fs');


fs.readFile('data.txt',(err, data)=>{
    if(err){
        console.error('Getting error :', err);
        return;
    }

    let total=0;

    let str=data.toString();
    let lines=str.split('\n');
    console.log(lines);

    for(let i=0;i<lines.length-1;i++){
        let val="";
        for(let j=0;j<lines[i].length-1;j++){
            if(lines[i][j]==' '){
                val=lines[i][j+1];
                val+=lines[i][j+2];
            }
        }
        total+=parseInt(val);
    }
    // console.log(total);
    let count=lines.length-1;
    // console.log(count);



    if(count==0){
        console.log('No valid student data found.');
        return;
    }

    let avg=total/count;

    fs.writeFile('average_age.txt', `Average Age of Students: ${avg}`,(err)=>{
        if(err){
            console.error('Error while writing:',err);
            return;
        }
        console.log(`Average age calculated and written to average_age.txt`);
    });
});
