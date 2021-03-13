import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Header } from './components';
import { Movie, Home} from './pages';
import { Switch, Route } from "react-router-dom";

function App() {
  // we init theme with the save present in storage or we use light by default if storage is empty
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');

  /*
   *  Method to setCurrent Theme, this method also save desired theme in local Storage
   *  So we can be able to load theme on app launch using storage
   */
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark'); 
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme}/>
      <Switch>
        <Route path="/film/:id" exact><Movie /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
