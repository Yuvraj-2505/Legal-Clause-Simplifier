import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../src/Component/Navbar";
import "./App.css";
import LandingPage from "./sections/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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

<<<<<<< HEAD
<<<<<<< HEAD
// Layout Wrapper to hide Navbar on login and signup pages
function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";
=======
// Layout Wrapper to conditionally show/hide Navbar
function Layout({ children }) {
  const location = useLocation();
  
  // List of routes where navbar should be hidden
  const hideNavbarRoutes = ["/login", "/signup"];
  
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
>>>>>>> f5da7c48df729c920bd2a59275b0f6f55517a349
=======
// Layout Wrapper to hide Navbar on login page
function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";
>>>>>>> parent of 732611b (fixxing home page and added legal page and fix login/sign)

  return (
    <div className="w-full h-full">
      {!shouldHideNavbar && <Navbar />}
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
          <Route path="/signup" element={<Signup />} />

          {/* Example Protected Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="p-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Dashboard</h1>
                  <p className="text-gray-600">You are successfully logged in!</p>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;