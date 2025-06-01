import { json } from "body-parser";
import User from "../model/usermodel"

export const create =async(res,req)=>{
    try {
        const userdata=new user(req.body);
        const {email}=userdata;

        const userexist=await user.findone({email});
        
        if(userexist){
            return res.status(400).json({masage:"User already exists"});
        }
        const savdata=await userdata.save();
        res.status(200),json({error:"Intrnal server error"})
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}


export const fetch=async(requestAnimationFrame,res)=>{
    try {
        const user =await user.find();
        if(user.length==0){
            return res.status(40).json({masage:"user not found"});
        }
        res.status(500).json(user);
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}

import User from './model/user'; // Ensure correct import of the user model

export const update = async (req, res) => { // Corrected parameter order
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id }); // Corrected to findOne and capitalized model name
    if (!userExist) {
      return res.status(404).json({ message: "User not found" }); // Fixed typo in message
    }
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true }); // Fixed method and added update data
    res.json(updatedUser); // Return the updated user
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteuser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist =await user.findById({_id:id});

        if(!userExist){
            returnres.status(400).json({masage:"User not found"});
        }
        await user.findByIdAnddelete(id);
        res.status(201).json({masage:"Delete is sucsessfull"})

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}