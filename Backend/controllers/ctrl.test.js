const request = require('supertest')
const app = require('../index');

// describe("POST /register",()=>{

describe("given a username and email and password",()=>{
   //save username and email and password in database  hadi hyadha amehsikjcbskcbciucueciue
    //save username and email and password in database
    //reponse à json object contient the user id
    //should reponse with 200 status code
    test("should reponse email al ready exist", async()=>{
        const res = await request(app).post('/api/user/register').send({
            name:"nhghgame",
            email:"sabirrrhhh@gmail.com",
            password:"hghgh"
         
        })

        expect(res.statusCode).toBe(400);
    })

    test("should reponse register succes", async()=>{
        const res = await request(app).post('/api/user/register').send({
            name:"nhghgame",
            email:"eggaffhhhhhh@gmail.com",
            password:"hghgh"
        })

        expect(res.statusCode).toBe(200);
    })
    // should specfy json in the contient type header


})
// describe("when the username and password is missing",()=>{


// // shoulde response with a status code of 400

// })

// })

