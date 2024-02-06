let w=require('fs');

let data = "# Introduction to writeFile";

//Writing to a file

w.writeFile("Testwrite.md", data, (err) => {
    if (err){
        console.log(err);
    }
    else{
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log((w.readFileSync("Testwrite.md")).toString());
    }
  });



//Printing an error using readFileSync

let error = "Error printing in readFileSync, System said : ";
try{
    var value = w.readFileSync('Testwrite.md');
    console.log(value);
}
catch (err) {
    console.log(error);
    console.log(err);
  }


