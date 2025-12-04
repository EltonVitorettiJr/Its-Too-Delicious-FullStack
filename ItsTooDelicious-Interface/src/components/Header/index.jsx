import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
} from './styles';

import Logo from '../../assets/Logo.svg';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { UserCircleIcon, ShoppingCartSimpleIcon } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';

export function Header() {
  const navigate = useNavigate();

  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();
  const { clearCart } = useCart();

  return (
    <Container>
      <Content>
        <Navigation>
          <button onClick={() => navigate('/')}>
            <img src={Logo} alt="Logo-Its-Too-Delicious" />
          </button>
          <div>
            <HeaderLink to={'/'} $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <hr />
            <HeaderLink to={'/cardapio'} $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
            <hr />
            <HeaderLink
              to={'/faleConosco'}
              $isActive={pathname === '/faleConosco'}
            >
              Fale Conosco
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircleIcon size={'32px'} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout
                onClick={() => {
                  clearCart();
                  logout();
                  navigate('/login');
                }}
              >
                Sair
              </Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCartSimpleIcon size={'26px'} />
            <HeaderLink to={'/carrinho'} $isActive={pathname === '/carrinho'}>
              Carrinho
            </HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
