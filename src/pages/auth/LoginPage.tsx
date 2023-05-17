import { useState } from "react"
import Login from "../../components/login/Login"

/**
 * The LoginPage component displays a login form and handles user authentication.
 * @param {Object} props - The component props.
 * @param {Function} props.onLoginSuccess - A function to call when the user successfully logs in.
 * @returns {JSX.Element} - The rendered component.
 */
export default function LoginPage(props: { onLoginSuccess: () => void }) {
  // The URL for the logo image.
  const logo =
    "https://assets-global.website-files.com/614638d232367a729da19f74/61468ac2f2b2276d28d052df_logo-500.png"

  // State variable to track whether the user is authenticated.
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Function to call when the user successfully logs in.
  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
    props.onLoginSuccess()
  }

  //render responsive page with picture to left and logo top right
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-center bg-white h-full md:h-screen">
        <img
          src={logo}
          alt="logo"
          className="max-w-xs h-10 absolute top-4 left-4"
        />

        <Login {...props} onLoginSuccess={handleLoginSuccess} />
      </div>
      <div className="relative h-0 md:h-full">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
