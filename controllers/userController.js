import userModel from "../models/userModel.js";


//get all products
export const getAllUsersController = async (req, res) => {
    try {
      const users = await userModel
        .find({})
        .sort({ createdAt: -1 });
      res.status(200).send({
        success: true,
        counTotal: users.length,
        message: "ALLUsers ",
        users,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in getting users",
        error: error.message,
      });
    }
  };