import * as Yup from 'yup';
import Order from '../schemas/Order';
import Product from '../models/Product';
import Category from '../models/Category';
import User from '../models/User';

class OrderController {
  async store(req, res) {
    const { products } = req.body;

    const schema = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          }),
        ),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(401).json({ error: err.errors });
    }

    const productsIds = products.map((product) => product.id);

    const findProducts = await Product.findAll({
      where: {
        id: productsIds,
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['name'],
        },
      ],
    });

    const formattedProducts = findProducts.map((product) => {
      const productIndex = products.findIndex(
        (item) => parseFloat(item.id) === parseInt(product.id),
      );

      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category.name,
        url: product.url,
        quantity: products[productIndex].quantity,
      };

      return newProduct;
    });

    const order = {
      user: {
        id: req.userId,
        name: req.userName,
      },
      products: formattedProducts,
      status: 'Pedido Realizado',
    };

    const createdOrder = await Order.create(order);

    return res.status(201).json(createdOrder);
  }

  async index(req, res) {
    const orders = await Order.find();

    return res.status(201).json(orders);
  }

  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    const schema = Yup.object({
      status: Yup.string().required(),
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

    try {
      await Order.updateOne({ _id: id }, { status: status });
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }

    return res
      .status(201)
      .json({ message: 'Order status updated sucessfully!' });
  }

  async delete(req, res) {
    const { id } = req.params;

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    try {
      await Order.deleteOne({ _id: id });
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }

    return res.status(201).json({ message: 'Order deleted sucessfully!' });
  }
}

export default new OrderController();
