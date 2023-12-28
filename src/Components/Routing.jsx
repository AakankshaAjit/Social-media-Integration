import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'

import Insta from './Insta'
import Linkedin from './Linkedin'

const Routing = () => {
    return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route>
            <Route path='/Insta' element={<Insta/>}/>
            <Route path='/Linkedin' element={<Linkedin/>}/>
            
            
          

        </Route>
    </Routes>

    </BrowserRouter>
 
    
  )
}

export default Routing