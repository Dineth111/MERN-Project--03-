import express from"express"
import {fetch,create,update,deleteuser} from "../controler/usercontroler.js"



const route =express.Router();

route.post ("/create",create)
route.get("/fetch",fetch);
route.put("/update/:id",updata);
route.delete("/delete/:id",deleteuser);







export default route;