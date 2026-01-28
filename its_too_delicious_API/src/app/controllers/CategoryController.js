import * as Yup from 'yup';
import Category from '../models/Category.js';
import User from '../models/User.js';

class CategoryController {
  async store(req, res) {
    const { name } = req.body;

    const schema = Yup.object({
      name: Yup.string().required(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(401).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    const categoryExists = await Category.findOne({
      where: {
        name,
      },
    });

    if (categoryExists) {
      return res.status(401).json({ error: 'This Category already exists!' });
    }

    const { filename: path } = req.file;

    const category = await Category.create({
      name,
      path,
    });

    return res.status(201).json({
      id: category.id,
      name,
      path,
    });
  }

  async index(req, res) {
    const categories = await Category.findAll();

    return res.status(201).json(categories);
  }

  async update(req, res) {
    const { name } = req.body;
    const { id } = req.params;

    let path;
    if (req.file) {
      path = req.file;
    }

    const schema = Yup.object({
      name: Yup.string(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(401).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    const categoryExists = await Category.findByPk(id);

    if (!categoryExists) {
      return res
        .status(401)
        .json({ message: 'Make sure your ID category is correct!' });
    }

    if (name) {
      const categoryNameExists = await Category.findOne({
        where: {
          name,
        },
      });

      if (categoryNameExists && categoryNameExists.id != id) {
        return res
          .status(401)
          .json({ message: 'This category exists already!' });
      }
    }

    await Category.update(
      {
        name,
        path,
      },
      {
        where: {
          id,
        },
      },
    );

    return res.status(201).json('Category updated sucessfuly!');
  }

  async delete(req, res) {
    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    const { id } = req.params;

    const findCategory = await Category.findByPk(id);

    if (!findCategory) {
      return res.status(401).json('Make sure that this ID exists.');
    }

    try {
      await Category.destroy({
        where: {
          id,
        },
      });
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }

    return res.status(201).json('Category deleted sucessfully!');
  }
}

export default new CategoryController();
