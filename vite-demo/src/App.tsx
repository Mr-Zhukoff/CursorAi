import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import LoginPage from "@/pages/login"
import RegisterPage from "@/pages/register"
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container flex h-16 items-center px-4">
            <Link to="/" className="font-bold">
              My App
            </Link>
            <div className="ml-auto">
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold">Welcome to My App</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Please login to continue.
              </p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
