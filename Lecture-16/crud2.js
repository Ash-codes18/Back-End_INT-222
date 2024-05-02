const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/crudops")

const productSchema = new mongoose.Schema({
    modelnum:Number,
    name:String,
    price:Number
});

const Product = mongoose.model('Products', productSchema);

let data = new Product({modelnum:3, name:"Laptop",price:78000})
data.save()

.then(doc=>{
    console.log(doc);
})

.catch(err=>{
    console.error(err);
})


Product.find({modelnum:1})
.then(doc=>{
    console.log(doc);
})

.catch(err=>{
    console.log(err);
})


Product.findByIdAndUpdate("6614cc67f4457488e68d87f8",
{price:5000},{new:true}
)

.then(doc=>{
    console.log(doc)
})

.catch(err=>{
    console.error(err);
})

Product.findByIdAndDelete("6614cc67f4457488e68d87f8")

.then(response=>{
    console.log(response)
})

.catch(err=>{
    console.error(err);
})
