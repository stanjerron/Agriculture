import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import LoginPage from "./components/Loginpage";
import Signuppage from "./components/Signuppage";
import Layout from "./layout/Layout";
import Dashboard from "./ddesign/Dashboard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/Signup" element={<Signuppage/>} />
        {/* Dashboard page wrapped inside Layout */}
        <Route path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

      
      </Routes>
    </Router>
  )
}
export default App;
