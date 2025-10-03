import './App.css'
import { Route, Routes } from "react-router";
import Layout from './components/layout'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<DashboardPage />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
