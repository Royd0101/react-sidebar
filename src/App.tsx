
import { Route, Routes } from "react-router";
import Layout from './components/layout'
import DashboardPage from './pages/DashboardPage'
import IncomePage from './pages/IncomePage'
import ExpensesPage from './pages/ExpensesPage'
import BudgetPage from './pages/BudgetPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<DashboardPage />} />
        <Route path="income" element={<IncomePage />} />
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="budget" element={<BudgetPage />} />
      </Route>
    </Routes>
  )
}

export default App
