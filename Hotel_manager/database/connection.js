import mongoose from "mongoose";
import { print, OutputType } from "../helper/print.js";

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
async function connect() {
  try {
    let connection = await mongoose.connect(process.env.MongoURL);
    print("connect mongoose success", OutputType.SUCCESS);
    return connection;
  } catch (error) {
    const { code } = error;
    if (error.code == 8000) {
      print("Wrong Username or Password", OutputType.ERROR);
      throw new Error("Wrong Username or Password");
    } else if (code == "ENOTFOUND") {
      print("Wrong server name/connection string", OutputType.ERROR);
      throw new Error("Wrong server name/connection string");
    }

    print("Cannot connect mongoose", OutputType.ERROR);
    throw new Error("Cannot connect mongoose");
  }
}
export default connect;
