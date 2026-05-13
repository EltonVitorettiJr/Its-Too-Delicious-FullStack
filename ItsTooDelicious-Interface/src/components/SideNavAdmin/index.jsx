import { useState } from 'react';
import { Container, Footer, NavLink, NavLinksContainer, TopBar, MenuButton } from './styles';
import Logo from '../../assets/Logo.svg';
import { navLinks } from './navLinks';
import { SignOutIcon, List, X } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';
import { useResolvedPath } from 'react-router-dom';

export function SideNavAdmin() {
  const { logout } = useUser();
  const { clearCart } = useCart();
  const { pathname } = useResolvedPath();
  
  // Estado para controlar o menu no mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      {/* TopBar organiza o Logo e o Botão do Menu no celular. No PC, ela "some". */}
      <TopBar>
        <img src={Logo} alt="Its-Too-Delicious-Logo" />
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <List size={32} />}
        </MenuButton>
      </TopBar>

      {/* Passamos a prop $isOpen para o CSS saber se deve mostrar os links ou não no mobile */}
      <NavLinksContainer $isOpen={menuOpen}>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
            onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar em um link
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinksContainer>
      
      <Footer $isOpen={menuOpen}>
        <NavLink
          to="/login"
          onClick={() => {
            clearCart();
            logout();
          }}
        >
          <SignOutIcon />
          Sair
        </NavLink>
      </Footer>
    </Container>
  );
}