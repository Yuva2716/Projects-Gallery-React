import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import News from './Components/NewsApp/News';
import Weather from './Components/WeatherApp/Weather'
import Login from './Components/LoginAuth/Login';
import LandingPage from './Components/Landing/LandingPage'
import Signup from './Components/LoginAuth/Signup';
import TodoList from './Components/TodoApp/TodoList';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Home' element={<LandingPage />}></Route>
        <Route path='/WeatherApp' element={<Weather />}></Route>
        <Route path='/NewsApp' element={<News />}></Route>
        <Route path='/TodoApp' element={<TodoList />}></Route>
                
      </Routes>
    </BrowserRouter>
  )
}

export default App