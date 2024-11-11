import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Home";
import SingleMovie from "./Singlemovie";
import Error from './Error';
import "./App.css";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movie/:id' element={<SingleMovie />}></Route> 
      <Route path='*' element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App