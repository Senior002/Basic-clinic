import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/home/Home'
import Chart from '../view/chart/Chart'
import Register from '../view/register/Register'
import Table from '../view/table/Table'
import Service from '../view/service/Service'
import Login from '../view/login/loginPage'
import History from '../view/history/History'

function Approuter () {

  return (
    <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/chart' element = {<Chart/>}/>
            <Route path='/register' element = {<Register/>}/>
            <Route path='/service' element = {<Service/>}/>
            <Route path='/table' element = {<Table/>}/>
            <Route path='/history' element = {<History/>}/>
        </Routes>
    </>
  )
}

export default Approuter