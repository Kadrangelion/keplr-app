import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Header } from './components';
import { Movie, Home } from './pages';
import { Switch, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  /*
   *  Method to setCurrent Theme, this method also save desired theme in local Storage
   *  So we can be able to load theme on app launch using storage
   */
  const setMode = (mode:string) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  //On app launch we check if theme is saved in storage and load it. If its not we init them with light
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
    setComponentMounted(true);
  }, []);

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {/* Loading style for styled components */}
      <GlobalStyles />
      <Header isDarkMode={theme === 'dark'} toggleTheme={toggleTheme} />
      {/* We define our routes here, Home is the last one to be define so every path that doesnt match
      any path before "/" is automaticly redirected towards Home who doesn't have exact route defined*/}
      <Switch>
        <Route path="/film/:id" exact><Movie /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
