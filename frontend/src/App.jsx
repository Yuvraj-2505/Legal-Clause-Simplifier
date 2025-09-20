import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../src/Component/Navbar";
import "./App.css";
import LandingPage from "./sections/LandingPage";
import Login from "./Pages/Login";

// Example auth check (replace with your real logic)
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

// Protected Route Wrapper
function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Layout Wrapper to hide Navbar on login page
function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <div className="w-full h-full">
      {!hideNavbar && <Navbar />}
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          {/* Example Protected Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h1 className="p-8 text-xl">Welcome to Dashboard</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
