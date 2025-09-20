import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../src/Component/Navbar";
import "./App.css";
import LandingPage from "./sections/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import LawSection from "./Pages/LawSection";
import About from "./Pages/About";
import Chatbot from "./Pages/Chatbot";

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

// Layout Wrapper to hide Navbar on login, signup, and chatbot pages
function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/chatbot";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/law-section" element={<LawSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/chatbot" element={<Chatbot />} />

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