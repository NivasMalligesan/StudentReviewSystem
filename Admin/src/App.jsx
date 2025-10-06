import './App.css'
import Dashboard from './Pages/Dashboard'
import ManageUsers from './Pages/ManageUsers'
import { Route, Routes } from 'react-router-dom'
import ReportedContent from './Pages/ReportedContent'
import AddCollegeData from './Pages/AddCollegeData'
import ReviewPage from './Pages/ReviewPage'
import LoginPage from './Pages/LoginPage'
import Navbar from './Components/CommonComponents/Navbar'
import Colleges from './Pages/Colleges'

function App() {

  return (
    <>
    <div clas>
      <Navbar />
    </div>
      <Routes >
        <Route path="/" element={<LoginPage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/manage-users" element={<ManageUsers/>}/>
        <Route path="/reported-content" element={<ReportedContent />}/>
        <Route path="/add-college-data" element={<AddCollegeData />}/>
        <Route path="/college/:collegeId" element={<Colleges />}/>
        <Route path="/review-page" element={<ReviewPage/>}/>
        <Route path="*" element={<div>404 Not Found</div>}/>
      </Routes>
    </>
  )
}

export default App
