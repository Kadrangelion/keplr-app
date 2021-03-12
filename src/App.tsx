import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Header } from './components';
import { Movie, Home} from './pages';
import { Switch, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
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
