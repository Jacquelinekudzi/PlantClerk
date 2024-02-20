//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
//import Sidebar from './components/Sidebar'
//import Header from './components/Header'
//import Hero from './components/Hero'
//import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import PlantList from './pages/PlantList'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Reports from './pages/Reports'
import AssignOperators from './pages/AssignOperators'
import NewRequisition from './pages/NewRequisition'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element = {<Dashboard/>}></Route> 
        <Route path='/plant-list' element = {<PlantList/>} ></Route>
        <Route path='/analytics' element = {<Analytics/>} ></Route>
        <Route path='/settings' element = {<Settings/>} ></Route>
        <Route path='/reports' element = {<Reports/>} ></Route>
        <Route path='/assign_operators' element = {<AssignOperators/>} ></Route>
        <Route path='/new_requisition' element = {<NewRequisition/>} ></Route>


        </Route>
      </Routes>
    </Router>

   
    </>
  )
}

export default App
