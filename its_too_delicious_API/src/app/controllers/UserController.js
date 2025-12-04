import User from '../models/User';
import { v4 } from 'uuid';
import * as Yup from 'yup';

class UserController {
  async store(req, res) {
    const { name, email, password, admin } = req.body;

    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      admin: Yup.boolean(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(401).json({ error: err.errors });
    }

    const userExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(409).json({ error: 'This user already exists!' });
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    });

    return res.status(201).json({
      id: user.id,
      name,
      email,
      admin,
    });
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.status(201).json(users);
  }

  async delete(req, res) {
    const { id } = req.params;

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401);
    }

    const userExists = await User.findByPk(id);

    if (!userExists) {
      return res.status(401).json('Make sure that this user exists!');
    }

    await User.destroy({
      where: {
        id,
      },
    });

    return res.status(201).json('User deleted sucessfully!');
  }
}

export default new UserController();
