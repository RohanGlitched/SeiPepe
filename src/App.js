import styled, { ThemeProvider } from "styled-components";
import Roadmap from "./Components/Roadmap/Roadmap";
import GlobalStyles from "./Styles/GlobalStyles";
import { light } from './Styles/Themes'
import { Routes, Route } from 'react-router-dom'
import Tools from "./Components/Tools/Tools";
import MainPage from "./Components/MainPage/MainPage";
import './App.css'
import './reloader.js'
import Preloader from "./Icons/Preloader";
import Typewriter from 'typewriter-effect'
import CheckWhitelist from "./Components/CheckWhitelist/CheckWhitelist";


const ButCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40vh;
  font-size: 3vw;
  font-weight: 700;
  @media(max-width: 64em) {
    font-size: 5vw;
    margin-top: 35vh;
  }
`
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <div className="preloader">
          <Preloader />
          <ButCont>
            <Typewriter
              options={{
                autostart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.typeString('<span className = "text-1">Loading...</span>')
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </ButCont>
          <script src="./reloader.js"></script>
            </div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/Roadmap' element={<Roadmap />} />
          <Route path='/check' element={<CheckWhitelist/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;
