const jwt = require('jsonwebtoken')
var storage = require('local-storage')
const User = require('../../models/userModel')
const Category = require('../../models/category')
const Meal = require('../../models/meal')
const upload = require("../../outils/imageUmploder");
const removefile = require('../../outils/removeimage')
const fs = require('fs')
const { db } = require('../../models/userModel')



const registerlivreur = async (req, res) => {
  const { first_name, last_name, phone, email, password, confirm_password } = req.body
  const role='livreur'

  if (first_name === '' || last_name === '' || phone === '' || email === '' || password === '' || confirm_password === '') throw Error('Please fill all the fields')


  const userExists = await User.findOne({ email })
  const phoneExists = await User.findOne({ phone })

  if (userExists) { throw Error('User already Exists') }
  else {
    if (phoneExists) throw Error('Phone the User already Exists')
    else {
      // Password Hash 
      const salt = await bcrypt.genSalt(10)
      const password_Hash = await bcrypt.hash(password, salt)

      const user = await User.create({
        first_name,
        last_name,
        phone,
        role,
        email,
        password: password_Hash,
        verification: false,
        isBanned: false
      })

      if (user) {
        mainMail.nodemailler('verify-email', email)
        throw Error('Check Your Email')
      }

      if (!user) throw Error('Invalid User Data')
    }
  }
}












const managerUser = async (req, res) => {
  const token = storage('token')
  const token_user = await jwt.verify(token, process.env.SECRET)
  const user = await User.findById(token_user.id)
  const role_user = await Role.findById(user.role)
  if (role_user.name != "manager") throw Error("You Can' To Access in This Page")
  res.json({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    role: role_user.name
  })
}

const addcategory = async (req, res) => {
  const { name } = req.body
  if (name == '') res.status(401).send("Please Fill The name")
  const category = await Category.findOne({ name })
  if (category) res.status(401).send("the category deja already")
  if (!category) {
    const category_create = await Category.create({ name })
    if (category_create) {
      res.status(200).send("created category")
    }
  }
}

    //!------------------------------------------------ methode findcategory---------------------------------

                                        const findcategory = async (req, res) => {

                                          const findcategoris = await Category.find()
                                          if (findcategoris) {
                                            res.json(findcategoris)
                                          }
                                        }
    //!------------------------------------------------ methode deletecategory---------------------------------

                                          const deletcategory = async (req, res) => {
                                            const { id } = req.params.id
                                            const finddeleted = await Category.findOne({ id })
                                            if (finddeleted) {
                                              await finddeleted.remove()
                                              res.status(200).send(`deleted succesfully`)
                                            }
                                            else res.status(401).send('not deleted')

                                          }
    //!------------------------------------------------ methode updatecategory---------------------------------

                                            const updatecategory = async (req, res) => {
                                              const id = req.params.id
                                              const name = req.body.name
                                              const data = await Category.findOneAndUpdate({ _id: id }, { name: name })
                                              if (!data) res.send('not')
                                              res.send('updated')
                                            }

const updateuser = async (req, res) => {
  const id  = req.params.id
  const data = await User.findById(id)
  data.isBanned = !data.isBanned
  await data.save()
  res.send(data.isBanned)
}

const listclient = async (req, res) => {
  const id_role = '638f45b410a60d0c0019353a'

  const findclient = await User.find({ role: id_role })
  if (findclient) {
    res.send(
      findclient
    )
  }
  else {
    throw Error('Not User to role client')
  }
}

const listlivreur = async (req, res) => {
  const id_role = '638f45b410a60d0c0019353b'

  const findclient = await User.find({ role: id_role })
  if (findclient) {
    res.send(
      findclient
    )
  }
  else {
    throw Error('Not User to role client')
  }
}

const addimage = async (req, res) => {
  const findcategory = await Category.find()
  console.log(findcategory)
  const { name, description, price, category } = req.body;
  const newProduct = {
    name: name,
    description: description,
    price: price,
    category: category,
    images: req.file.filename

  }
  console.log(newProduct);
  //validation des field
  const isformfield = Object.values(newProduct).every((value) => {
    if (value) {
      return true;
    }
    else {
      return false;
    }
  })

  console.log(isformfield);


  await Meal.create(newProduct);
  console.log(newProduct);

  try {
    res.status(201).json("product is added")

  } catch (error) {
    throw new Error("product is not added");

  }
}    

// jai un probleme file systemenje les resoudrÃ©
const deletproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Meal.findById(id);
    try {
      fs.unlinkSync(`C:/Users/Youcode/Desktop/MARHABA-DELIVRY/backend/images/${result.images[0]}`);
      console.log('deleted from fs file');

    } catch (err) {
      console.log(err)
    }
    await Meal.findOneAndDelete({ _id: id });
    res.status(200).json({ code: 200, message: "Product deleted" });
  } catch (error) {
    throw new Error(error);
  }

}

const GetAllProduct = async (req, res) => {
  const allProduct = await Meal.find().populate({
    path : 'category',
    model : Category
  })
    if (allProduct) {
      res.send(allProduct);
    }
    else throw new Error("no product found");
};


const statistique = async (req,res)=>{
  const user = await User.find().count()
  const meal = await Meal.find().count()
  const category = await Category.find().count()
  res.json({user,meal,category})
}

const updateproduct = async (req, res) => {
  const { id } = req.params
  const UpdatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    categorie: req.body.categorie,
    images: req.file.filename

  };

  try {
    await Meal.findByIdAndUpdate(
      { _id: id },
      UpdatedProduct,
    );
    res.status(201).json({
      message: "Product updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
}

module.exports = {
  managerUser,
  addcategory,
  findcategory,
  deletcategory,
  updatecategory,
  updateuser,
  listclient,
  listlivreur,
  statistique,
  addimage,
  deletproduct,
  GetAllProduct,
  updateproduct
}