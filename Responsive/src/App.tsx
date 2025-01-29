import { Route, Routes } from 'react-router-dom'
import './App.css'
import Base from './layout/Base'
// import Header from './components/Header'
import LandingPage from './Pages/LandingPage'

function App() {
  

  return (
   <>
   <Routes>
    <Route path="/" element={<Base />} >
    <Route path='/' element={<LandingPage />} />
    </Route>
   </Routes>
   </>
  )
}

export default App
