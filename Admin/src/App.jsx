import './App.css'
import Dashboard from './Pages/Dashboard'
import ManageUsers from './Pages/ManageUsers'
import { Route, Routes } from 'react-router-dom'
import ReportedContent from './Pages/ReportedContent'
import AddCollegeData from './Pages/AddCollegeData'
import ReviewPage from './Pages/ReviewPage'
import LoginPage from './Pages/LoginPage'
import Navbar from './Components/CommonComponents/Navbar'

function App() {

  return (
    <>
    <div>
      <Navbar />
    </div>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/manage-users" element={<ManageUsers/>}/>
        <Route path="/reported-content" element={<ReportedContent />}/>
        <Route path="/add-college-data" element={<AddCollegeData />}/>
        <Route path="/review-page" element={<ReviewPage/>}/>
        <Route path="*" element={<div>404 Not Found</div>}/>
      </Routes>
    </>
  )
}

export default App
