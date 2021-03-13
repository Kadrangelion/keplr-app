import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Switch from '../Switch';
import { HeaderContainer, HeaderTitle } from './Header.style';

type HeaderProps = {
  toggleTheme: Function;
  //next prop is needed to set switch initial value depending on theme
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
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
      <Switch
        onClick={toggleTheme}
        defaultValue={isDarkMode}
        rightLabel={
          <span className="material-icons">
            mode_night
          </span>
        }
        leftLabel={
          <span className="material-icons">
            light_mode
          </span>
        }
      />
    </HeaderContainer>
  )
}

export default Header;