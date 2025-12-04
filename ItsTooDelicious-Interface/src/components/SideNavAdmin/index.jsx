import { Container, Footer, NavLink, NavLinksContainer } from './styles';
import Logo from '../../assets/Logo.svg';
import { navLinks } from './navLinks';
import { SignOutIcon } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';
import { useResolvedPath } from 'react-router-dom';

export function SideNavAdmin() {
  const { logout } = useUser();
  const { clearCart } = useCart();
  const { pathname } = useResolvedPath();

  return (
    <Container>
      <img src={Logo} alt="Its-Too-Delicious-Logo" />
      <NavLinksContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinksContainer>
      <Footer>
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
