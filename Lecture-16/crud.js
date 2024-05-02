const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/crud")

const productSchema = new mongoose.Schema({
    name:String,
    price:Number
});

const saveInDB = async()=>{
    const Product = mongoose.model('products',productSchema)
    let data = new Product({name:"smartphone",price:20000})
    const result = await data.save();
    console.log(result);
}

const updateInDB = async()=>{
    const Product = mongoose.model('products',productSchema)
    let data = await Product.updateOne(
        {name:"max 100"},{$set:{price:700}}
    )
    console.log(data);
}

const deleteInDB = async()=>{
    const Product = mongoose.model('products',productSchema)
    let data = await Product.deleteOne({name:"max 100"}
    );
    console.log(data);

}

const findInDb = async()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.find();
    console.log(data);
}

saveInDB();
