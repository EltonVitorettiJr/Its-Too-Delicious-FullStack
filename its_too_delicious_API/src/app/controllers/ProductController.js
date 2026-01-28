import * as Yup from 'yup';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import User from '../models/User.js';

class ProductController {
  async store(req, res) {
    const { name, price, category_id, offer } = req.body;
    const { filename: path } = req.file;

    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
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

    const product = await Product.create({
      name,
      price,
      category_id,
      path,
      offer,
    });

    return res.status(201).json({ message: 'Product created!', product });
  }

  async index(req, res) {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.status(201).json(products);
  }

  async update(req, res) {
    const { name, price, category_id, offer } = req.body;

    const schema = Yup.object({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      path: Yup.string(),
      offer: Yup.boolean(),
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

    const { id } = req.params;

    const findProduct = await Product.findByPk(id);

    if (!findProduct) {
      return res.status(401).json('Make sure that this ID exists.');
    }

    let path;
    if (req.file) {
      path = req.file;
    }

    try {
      await Product.update(
        {
          name,
          price,
          category_id,
          path,
          offer,
        },
        {
          where: {
            id,
          },
        },
      );
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }

    return res.status(201).json('Product updated sucessfully!');
  }

  async delete(req, res) {
    const { admin: isAdmin } = await User.findByPk(req.userId);
    const { id } = req.params;

    if (!isAdmin) {
      return res.status(401);
    }

    const productExists = await Product.findByPk(id);

    if (!productExists) {
      return res.status(401).json('Make sure that this product exists!');
    }

    await Product.destroy({
      where: {
        id,
      },
    });

    return res.status(201).json('Product deleted sucessfully!');
  }
}

export default new ProductController();
