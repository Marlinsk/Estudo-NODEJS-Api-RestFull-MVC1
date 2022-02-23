const UserService = require("../services/UserService");

module.exports = class UserController {
  static async apiGetAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      if (!users) {
        res.status(404).json("There are no user published yet!");
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetUserById(req, res, next) {
    try {
      let id = req.params.id || {};
      const user = await UserService.getUserbyId(id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreateUser(req, res, next) {
    try {
      const createdUser = await UserService.createUser(req.body);
      res.json(createdUser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdateUser(req, res, next) {
    try {
      const comment = {};
      comment.title = req.body.title;
      comment.body = req.body.body;
      comment.userImage = req.body.user_image;

      const updatedUser = await UserService.updateUser(comment);

      if (updatedUser.modifiedCount === 0) {
        throw new Error("Unable to update user, error occord");
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeleteUser(req, res, next) {
    try {
      const userId = req.params.id;
      const deleteResponse = await UserService.deleteUser(userId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
