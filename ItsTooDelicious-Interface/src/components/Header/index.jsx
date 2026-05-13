import { useState } from 'react';
import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
  MenuButton,
  MenuContainer,
} from './styles';

import Logo from '../../assets/Logo.svg';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { UserCircleIcon, ShoppingCartSimpleIcon, List, X } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';

export function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado do menu mobile

  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();
  const { clearCart } = useCart();

  // Função para fechar o menu ao clicar em qualquer link no celular
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <Container>
      <Content>
        <Navigation>
          <button onClick={() => { navigate('/'); handleCloseMenu(); }}>
            <img src={Logo} alt="Logo-Its-Too-Delicious" />
          </button>
          
          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} color="white" /> : <List size={32} color="white" />}
          </MenuButton>
        </Navigation>

        <MenuContainer $isOpen={menuOpen}>
          <div className="nav-links">
            <HeaderLink to={'/'} $isActive={pathname === '/'} onClick={handleCloseMenu}>
              Home
            </HeaderLink>
            <hr />
            <HeaderLink to={'/cardapio'} $isActive={pathname === '/cardapio'} onClick={handleCloseMenu}>
              Cardápio
            </HeaderLink>
            <hr />
            <HeaderLink
              to={'/faleConosco'}
              $isActive={pathname === '/faleConosco'}
              onClick={handleCloseMenu}
            >
              Fale Conosco
            </HeaderLink>
          </div>

          <Options>
            <Profile>
              <UserCircleIcon size={'32px'} color="white" />
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
              <ShoppingCartSimpleIcon size={'26px'} color="white" />
              <HeaderLink to={'/carrinho'} $isActive={pathname === '/carrinho'} onClick={handleCloseMenu}>
                Carrinho
              </HeaderLink>
            </LinkContainer>
          </Options>
        </MenuContainer>
      </Content>
    </Container>
  );
}