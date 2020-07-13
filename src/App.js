import React, { Children } from 'react'

// import { GlobalStyle } from './styles/GlobalStyles'
// import { ListOfPhotoCards } from './container/ListOfPhotoCards'

import  Login from './components/Login'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
// import { Home } from './pages/Home'
// import { Router } from '@reach/router'
// import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
// import { User } from './pages/User'
// import { NotRegisteredUser } from './pages/NotregisteredUser'
// import { NavBar } from './components/NavBar'
// import Context from './Context'

// const UserLogged = ({ children }) => {
//   return children({ isAuth: true })
// }
export const App = () => {
  return (
    <div>
        <div id='app'>
          <ListOfCategories />
          <ListOfPhotoCards />
        </div>

    <style jsx global>{`
        html {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans','Helvetica Neue', sans-serif; 
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }

        ul, li, h1, h2, h3, p, button {
            margin: 0;
            padding: 0;                
        }

        ul {
            list-style: none;
        }

        button {
            background: transparent;
            border: 0;
            outline: 0;
        }

        body {
            background: #fefefe;
            height: 100vh;
            margin: 0 auto;
            max-width: 500px;
            overscroll-behavior: none;
            width: 100%;
        }

        #app {
            box-shadow: 0 0 10px rgba(0, 0, 0, .05);
            overflow-x: hidden;
            min-height: 100vh;
            padding-bottom: 10px;
        }
    `}</style>
    </div>  
      /* <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
                </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
                </Router>

        }
      </Context.Consumer>

      <NavBar /> */

   
  )
}