const express = require('express')
const app = express()

var cors = require('cors')
var jwt = require('jsonwebtoken')
const stripe = require('stripe')('sk_test_51NEquMIc4lZ4UAM1upOBgUqzdXzCGxkRpAKUTfa9iA3GGTBtSTzTuwZMCQ6bjOvHlYPgrX6Om0jm1PBqatHpg5nG00r8HUR1po')
app.use(cors())
require('dotenv').config();

app.use(express.json())
const port = process.env.PORT || 11000


//mongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongmongomongomongomongomongo

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.by31wed.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
//𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.

const verifyJWT = (req, res, next) => {
  console.log('hitting verifyJWT');
  console.log(req.headers.authorization);
  const authorization = req.headers.authorization
  if (!authorization) {
    return res.status(401).send({error: true , message: 'Unauthorized Access'})
  }
  const token = authorization.split(' ')[1];
  
  // verify a token symmetric
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) =>  {
  if (err) {
    return res.status(403).send({error: true , message: 'Token Expaired ,, Unauthorized Access'})
  }
  req.decoded = decoded
  next()
  })}
  
//𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.𝓙𝓦𝓣2.
async function run() {
  try {
    const database = client.db("The_Rainy_Rooftop");
    const Rooftop_Menu_All_Data = database.collection("Rooftop_Menu"); //database collection 1

    const database2 = client.db("Featured_Receipe");
    const Featured_Receipe_All_Data = database2.collection("Receipes"); //database collection 1

    const database3 = client.db("Rainy_Rooftop_Reviews_Section");
    const Rainy_Rooftop_Reviews_All_Data = database3.collection("Reviews"); //database collection 3

    const Cart_Collection = client.db("The_Rainy_Rooftop");
    const Users_Cart_Collection_All_Data = Cart_Collection.collection("Carts"); //database collection 4

    const User_Info_Collection = client.db("The_Rainy_Rooftop");
    const User_Info_Collection_All_Data = User_Info_Collection.collection("User_Info_Data"); //database collection 5

    const paymentCollection = client.db("The_Rainy_Rooftop").collection("payments"); //database collection 6

  //𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣
  // npm i jsonwebtoken
  //var jwt = require('jsonwebtoken') <line 5>
  app.post('/jwt', async (req, res) => {  //<<<<==== get access token 𝓙𝓦𝓣 <<<<<<<<<<<
    const user = req.body;
    console.log(user);
    var token = jwt.sign(user , process.env.ACCESS_SECRET_TOKEN,{ expiresIn: '12h' });
    res.send({token})
  })
//𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣𝓙𝓦𝓣
const verifyAdmin = async(req, res, next) => {
const email = req.decoded.email
const query = {email: email}
const user = await User_Info_Collection_All_Data.findOne(query);
if (user?.role !== 'admin') {
  return res.status(403).send({error: true , message: 'Forbidden Access'})
}
next();
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.post('/rooftop_menu', verifyJWT, verifyAdmin,async (req, res) => {  //<<<<<<==== send data to database<<<<<<<<<<<<<<
    const menu = req.body;
    console.log(menu);
    const result = await Rooftop_Menu_All_Data.insertOne(menu);                            //DATABASE-1           //All Rooftop-Menu-Data 𝐏𝐎𝐒𝐓 to database
    res.send(result)
  })
  
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.get('/rooftop_menu', async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
    const cursor = Rooftop_Menu_All_Data.find();
    const result = await cursor.toArray()                                                    //DATABASE-1           //𝐆𝐄𝐓 All Rooftop-Menu-Data from db
    res.send(result)
  })
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.delete('/rooftop_menu/:id', verifyJWT, verifyAdmin ,async (req, res) => {  //xxxx==== delete data from database xxxxxxx
  const id = req.params.id
  console.log("deleting id", id);
  const query = { _id: new ObjectId(id) };                                                             //𝐃𝐄𝐋𝐄𝐓𝐄
  const  Drone = await Rooftop_Menu_All_Data.deleteOne(query);       
  res.send( Drone)
})
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// app.post('/featured_receipe', async (req, res) => {  //<<<<<<==== send data to database<<<<<<<<<<<<<<
//     const receipes = req.body;
//     console.log(receipes);
//     const result = await Featured_Receipe_All_Data.insertOne(receipes);                    //DATABASE-2           //All Featured-Receipe-Data 𝐏𝐎𝐒𝐓 to database
//     res.send(result)
//   })
  
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.get('/featured_receipe', async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
    const cursor = Featured_Receipe_All_Data.find();
    const result = await cursor.toArray()                                                     //DATABASE-2           //𝐆𝐄𝐓 All Featured-Receipe-Data from db
    res.send(result)
  })
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// app.post('/reviews', async (req, res) => {  //<<<<<<==== send data to database<<<<<<<<<<<<<<
//     const reviews = req.body;
//     console.log(reviews);
//     const result = await Rainy_Rooftop_Reviews_All_Data.insertOne(reviews);                 //DATABASE-3          //All Rainy-Rooftop-Reviews-Data 𝐏𝐎𝐒𝐓 to database
//     res.send(result)
//   })
  
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.get('/reviews', async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
    const cursor = Rainy_Rooftop_Reviews_All_Data.find();
    const result = await cursor.toArray()                                                    //DATABASE-3           //𝐆𝐄𝐓 All Rainy-Rooftop-Reviews-Data from db
    res.send(result)
  })
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.post('/uesrs_own_cart', async (req, res) => {  //<<<<<<==== send data to database<<<<<<<<<<<<<<
    const uesrs_cart = req.body;
    console.log(uesrs_cart);
    const result = await Users_Cart_Collection_All_Data.insertOne(uesrs_cart);                 //DATABASE-4          //All "Specific_Users_Addeded_Cart-Data" 𝐏𝐎𝐒𝐓 to database
    res.send(result)
  })
  
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.get('/uesrs_own_cart', verifyJWT , async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
//-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=
    // console.log(req.headers.authorization);
   const decoded = req.decoded
  console.log('came back ufter verify',decoded);
if (decoded.email !== req.query.email) {
  return res.status(407).send({error: 1 , message: 'Forbidden Access'})
}
//=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=
  const email = req.query.email
  if (!email) {
    res.send([])
  }
  const query = {email: email};
  const result = await Users_Cart_Collection_All_Data.find(query).toArray();
    // const result = await cursor.toArray()                                                    //DATABASE-4           //𝐆𝐄𝐓 All "Specific_Users_Addeded_Cart-Data" from db
    res.send(result)
  })
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
app.delete('/uesrs_own_cart/:id', async (req, res) => {  //xxxx==== delete data from database xxxxxxx
  const id = req.params.id
  console.log("deleting id", id);
  //https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/        //𝐃𝐄𝐋𝐄𝐓𝐄
  const query = { _id: new ObjectId(id) };
  const booking = await Users_Cart_Collection_All_Data.deleteOne(query);
  res.send(booking)
})
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
app.post('/user_data', async (req, res) => {  //<<<<<<==== send data to database<<<<<<<<<<<<<<
    const user_data = req.body;
    const query = {email: user_data.email}
    const existing_user = await User_Info_Collection_All_Data.findOne(query);
    if (existing_user) {
      return res.send({message: 'User Already Exist'})
    }
    const result = await User_Info_Collection_All_Data.insertOne(user_data);                            //DATABASE-5           //𝐏𝐎𝐒𝐓  𝖚𝖘𝖊𝖗_𝖉𝖆𝖙𝖆 𝖙𝖔 𝖉𝖆𝖙𝖆𝖇𝖆𝖘𝖊
    res.send(result)
  })
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
app.get('/user_data', verifyJWT , verifyAdmin , async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
  const cursor = User_Info_Collection_All_Data.find();
  const result = await cursor.toArray()                                                                //DATABASE-5           //𝐆𝐄𝐓  𝖚𝖘𝖊𝖗_𝖉𝖆𝖙𝖆 𝖋𝖗𝖔𝖒 𝖉𝖆𝖙𝖆𝖇𝖆𝖘𝖊
  res.send(result)
})
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
app.patch('/user_data/admin/:id', async (req, res) => {
  const id = req.params.id
  // const update_booking = req.body;
  // //https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/
  const filter = { _id: new ObjectId(id) };                                             //PATCH ~ 𝐔𝐏𝐃𝐀𝐓𝐄_All
  // const options = { upsert: true };
  const update_user_data = {
    $set: {
      role: 'admin'
    },
  };

  const result = await User_Info_Collection_All_Data.updateOne(filter, update_user_data);
  res.send(result)
  // console.log('clear', update_user);
})
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
app.get('/user_data/admin/:email', verifyJWT, async (req, res) => {
  const email = req.params.email;

  if (req.decoded.email !== email) {
    res.send({ admin: false })
  }

  const query = { email: email }
  const user = await User_Info_Collection_All_Data.findOne(query);
  const result = { admin: user?.role === 'admin' }
  res.send(result);
})
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//paymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpayhaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpayment
 // create payment intent
 app.post('/create-payment-intent', verifyJWT , async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card']
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // payment related api
  app.post('/payments', verifyJWT, async (req, res) => {
    const payment = req.body;
    const insertResult = await paymentCollection.insertOne(payment);

    const query = { _id: { $in: payment.cartItems.map(id => new ObjectId(id)) } }
    const deleteResult = await Users_Cart_Collection_All_Data.deleteMany(query)

    res.send({ insertResult, deleteResult });
  })
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  app.get('/payments', async (req, res) => {   //>>>>------get data from database>>>>>>>>>>>>>>>>
    const cursor = paymentCollection.find();
    const result = await cursor.toArray()                                                    //DATABASE-3           //𝐆𝐄𝐓 All Rainy-Rooftop-Reviews-Data from db
    res.send(result)
  })
//paymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpayhaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpaymentpayment,

//admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admi
app.get('/admin-stats', verifyJWT, verifyAdmin, async (req, res) => {
  const users = await User_Info_Collection_All_Data.estimatedDocumentCount();
  const products = await Rooftop_Menu_All_Data.estimatedDocumentCount();
  const orders = await paymentCollection.estimatedDocumentCount();

  // best way to get sum of the price field is to use group and sum operator
  /*
    await paymentCollection.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$price' }
        }
      }
    ]).toArray()
  */

  const payments = await paymentCollection.find().toArray();
  const revenue = payments.reduce( ( sum, payment) => sum + payment.price, 0)

  res.send({
    revenue,
    users,
    products,
    orders
  })
})
//admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admin-stats|admi

app.get('/order-stats', async(req, res) =>{
  const pipeline = [
    {
      $addFields: {
        menuItemsObjectIds: {
          $map: {
            input: '$menuItems',
            as: 'itemId',
            in: { $toObjectId: '$$itemId' }
          }
        }
      }
    },
    {
      $lookup: {
        from: 'Rooftop_Menu',
        localField: 'menuItemsObjectIds',
        foreignField: '_id',
        as: 'menuItemsData'
      }
    },
    {
      $unwind: '$menuItemsData'
    },
    {
      $group: {
        _id: '$menuItemsData.category',
        count: { $sum: 1 },
        total: { $sum: '$menuItemsData.price' }
      }
    },
    {
      $project: {
        category: '$_id',
        count: 1,
        total: { $round: ['$total', 2] },
        _id: 0
      }
    }
  ];

  const result = await paymentCollection.aggregate(pipeline).toArray()
  res.send(result)

})

    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//mongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongomongmongomongomongomongomongo


app.get('/', (req, res) => {
  res.send('The Rainy Rooftop is running')
})


app.listen(port, () => {
  console.log(`The Rainy Rooftop is running on port ${port}`)
})

//http://localhost:9000/mydrones?email=djicorp@gmail.com



//Rainy_Rooftop_Reviews_Section
//Reviews