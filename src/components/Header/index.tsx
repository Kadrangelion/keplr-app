import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Switch from '../Switch';
import { HeaderContainer, HeaderTitle } from './Header.style';

type HeaderProps = {
  toggleTheme: Function;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <HeaderContainer>
      {/* Check if we are on Home if not display a back button else en empty div to keep flexbox with 3 elements */}
      {location.pathname !== '/' ? 
        <div onClick={() => history.goBack()}>return</div>
        : <div></div>
      }
      <HeaderTitle>Movies</HeaderTitle>
      <Switch toggleTheme={toggleTheme} leftLabel='left' rightLabel='right' />
    </HeaderContainer>
  )
}

export default Header;