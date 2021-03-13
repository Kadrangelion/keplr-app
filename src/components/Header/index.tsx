import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Switch from '../Switch';
import { HeaderContainer, HeaderTitle, HeaderReturn } from './Header.style';

type HeaderProps = {
  toggleTheme: Function;
  //Next prop is needed to set switch initial value depending on theme
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <HeaderContainer>
      <HeaderReturn>
        {/* Check if we are on Home if not display a back button else nothing. 
        Test is placed inside div to keep flexbox with 3 elements in all cases */}
        {location.pathname !== '/' && 
          <span onClick={() => history.goBack()} className="material-icons">
            arrow_back_ios
          </span>
        }
      </HeaderReturn>
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