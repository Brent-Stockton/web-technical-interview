import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useState } from "react"

// Dynamically import the CardPage component
const DynamicCardPage = dynamic(() => import("../pages/cardpage"))

import LoginPage from "../pages/auth/LoginPage"

// Top-level App component
function App() {
  // Use state to keep track of whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Use the router hook from Next.js to programmatically navigate to a new page
  const router = useRouter()

  // Function that runs when the user logs in successfully
  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    router.push("/cardpage") // Navigate to the card page after login
  }

  return (
    <div>
      {isLoggedIn ? (
        // Render the CardPage component if the user is logged in
        <DynamicCardPage />
      ) : (
        // Render the LoginPage component if the user is not logged in
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  )
}

export default App
