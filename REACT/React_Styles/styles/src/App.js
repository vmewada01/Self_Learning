import logo from './logo.svg';

import {AppStyled, AppHeader, AppLogo,Flexbox} from "./App.styled"

function App() {
  return (
    <AppStyled width="10px" name="Vishal">
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
       <Flexbox flexDirection="column">
      <div>A</div>
      <div>B</div>
      </Flexbox>
      </AppHeader>
    </AppStyled>
  );
}

export default App;
