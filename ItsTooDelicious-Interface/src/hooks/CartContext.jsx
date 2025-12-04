import { useEffect, useContext, createContext, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = (products) => {
    localStorage.setItem('itsTooDelicious:cartInfo', JSON.stringify(products));
  };

  const clearCart = () => {
    setCartProducts([]);
    localStorage.removeItem('itsTooDelicious:cartInfo');
  };

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductsInCart = [];

    if (cartIndex >= 0) {
      newProductsInCart = cartProducts;

      newProductsInCart[cartIndex].quantity += 1;

      setCartProducts(newProductsInCart);
    } else {
      product.quantity = 1;

      newProductsInCart = [...cartProducts, product];

      setCartProducts(newProductsInCart);
    }

    updateLocalStorage(newProductsInCart);
  };

  const removeProductFromCart = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id != productId);

    setCartProducts(newCart);

    updateLocalStorage(cartProducts);
  };

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id == productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
    });

    setCartProducts(newCart);

    updateLocalStorage(cartProducts);
  };

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id == productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id == productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd;
      });

      setCartProducts(newCart);

      updateLocalStorage(cartProducts);
    } else {
      removeProductFromCart(productId);
    }
  };

  useEffect(() => {
    const clientCartData = localStorage.getItem('itsTooDelicious:cartInfo');

    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        clearCart,
        putProductInCart,
        removeProductFromCart,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('O useCart deve apresentar um contexto válido!');
  }

  return context;
};
