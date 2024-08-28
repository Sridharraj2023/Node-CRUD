import { findIndexById } from "../common/helper.mjs";

const users = [
    
{
    "id": 1,
    "name": "Sridhar R",
    "Age": 32
},

{
    "id": 2,
    "name": "Kavitha",
    "Age": 30
}


];


const getAllUsers = (req, res) => {
    res.status(200).send({

        message: "Data fetched successfully",
        users

    })
}

const getUserById = (req,res)=>{
    try {
        const {id} = req.params;

        let index = findIndexById(users,Number(id))

        if(index!==-1){
            res.status(200).send({
                message:"Data Fetch Successfull",
                data:users[index]
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const createUser = (req, res) => {
    try {
        // Check if req.body exists and has content
        // if (!req.body || Object.keys(req.body).length === 0) {
        //     return res.status(400).send({
        //         message: "Bad Request: No data provided"
        //     });
        // }

        // Safely set the ID property on the incoming data
        req.body.id = users.length ? users[users.length - 1].id + 1 : 1;

        users.push(req.body);

        res.status(201).send({
            message: "Data Saved Successfully"
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error",
            error
        });
    }
}

const editUserById = (req,res)=>{
    try {
        const {id} = req.params;

        let index = findIndexById(users,Number(id))

        if(index!==-1){
           
            req.body.id = Number(id)

            users.splice(index,1,req.body)

            res.status(200).send({
                message:"Data Updated Successfully",
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const deleteUserById = (req,res)=>{
    try {
        const {id} = req.params;

        let index = findIndexById(users, Number(id))

        if(index!==-1)
            {          
            
            users.splice(index,1)
            
            res.status(200).send({
                message:"Data Deleted Successfully",
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } 
    
    catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}



export default {getAllUsers, getUserById, createUser, editUserById, deleteUserById}
