import { Home } from './pages/homePage'
import Sidebar from './components/sideBar'
import {ThemeProvider} from '@emotion/react'
import theme from './theme';
import {Flex} from 'rebass';
import globalStyles from './globalStyle';
import { Global } from '@emotion/react';
import PlayingMusic from './components/playingMusic';
import SingleMusic from './pages/singleMusic';
import {Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SignUpPage } from './pages/signUpPage';
import { LogInPage } from './pages/loginPage';
import CreateMusic from './pages/createMusic';
import CreateArtist from './pages/createArtist';


function App() {
    const currentMusic = useSelector(state => state.currentMusic);
    return (
      <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Flex bg='#171719' height={'100%'}>
          <Routes>
            <Route path='/signup' element= {<SignUpPage />}/>
            <Route path='/login' element= {<LogInPage />}/>
            <Route path='/*' element={<Sidebar />}>  
              <Route index element= {<Home />}/>
              <Route path=':id' element= {<SingleMusic />}/>
              <Route path='create-music' element= {<CreateMusic />}/>
              <Route path='create-artist' element= {<CreateArtist />}/>
            </Route>
          </Routes>

          {currentMusic.music && <PlayingMusic />}
        </Flex>
      </ThemeProvider>
      
      </>
    )
}

export default App
