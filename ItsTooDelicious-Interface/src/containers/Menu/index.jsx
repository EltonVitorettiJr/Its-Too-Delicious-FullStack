import { useEffect, useState } from 'react';
import {
  Banner,
  BottomBackground,
  CategoriesMenu,
  CategoryButton,
  Container,
  ProductsContainer,
} from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/FormatPrice';
import { CardProducts, BackButton } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const categoryId = +queryParams.get('categoria');

  const [activeCategory, setActiveCategory] = useState(() => {
    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const allProducts = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(allProducts);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category_id === activeCategory),
      );
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR <br /> HAMBÚRGUER <br /> ESTÁ AQUI!
        </h1>
        <p>Esse cardápio está irresistível!</p>
      </Banner>

      <BottomBackground>
        <BackButton></BackButton>
        <CategoriesMenu>
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              $isActiveCategory={category.id === activeCategory}
              onClick={() => {
                navigate(
                  {
                    pathname: '/cardapio',
                    search: `?categoria=${category.id}`,
                  },
                  {
                    replace: true,
                  },
                );
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoriesMenu>
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </BottomBackground>
    </Container>
  );
}
