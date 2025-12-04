import * as Yup from 'yup';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const emailOrPasswordInvalid = () => {
      return res.status(401).json({ error: 'Make sure the data are correct!' });
    };

    const isValid = await schema.isValid(req.body);

    if (!isValid) {
      emailOrPasswordInvalid();
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      emailOrPasswordInvalid();
    }

    const isSamePassword = await user.checkPassword(password);

    if (!isSamePassword) {
      emailOrPasswordInvalid();
    }

    return res.status(201).json({
      message: 'Log in is sucessfily!',
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
