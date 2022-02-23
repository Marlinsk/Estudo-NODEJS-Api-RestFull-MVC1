const User = require("../models/User");

module.exports = class UserService {
  static async getAllUsers() {
    try {
      const allUsers = await User.find();
      return allUsers;
    } catch (error) {
      console.log(`Could not fetch users ${error}`);
    }
  }

  static async createUser(data) {
    try {
      const newUser = {
        name: data.name,
        username: data.username,
        email: data.email,
      };
      const response = await new User(newUser).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserbyId(userId) {
    try {
      const singleUserResponse = await User.findById({ _id: userId });
      return singleUserResponse;
    } catch (error) {
      console.log(`User not found. ${error}`);
    }
  }

  static async updateUser(name, username, email) {
    try {
      const updateResponse = await User.updateOne({ name, username, email });
      return updateResponse;
    } catch (error) {
      console.log(`Could not update user ${error}`);
    }
  }

  static async deleteUser(userId) {
    try {
      const deletedResponse = await User.findOneAndDelete(userId);
      return deletedResponse;
    } catch (error) {
      console.log(`Could  ot delete user ${error}`);
    }
  }
};
