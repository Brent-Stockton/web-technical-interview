import { useState } from "react"
import users from "../../../data/users.json"
import { authenticateUser } from "./Auth"
import { LoginProps } from "./LoginTypes"

/**
Login component that allows a user to enter their email and password to authenticate.
@param onLoginSuccess Callback function to be called when the user successfully logs in.
*/
const Login = ({ onLoginSuccess }: LoginProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Handles form submission by authenticating user credentials and passing the user object to the onLoginSuccess callback function. If authentication fails, sets an error message.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const user = authenticateUser(users, email, password)

    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
      setError("")
      onLoginSuccess(user) // pass the user object to the callback function
      alert("You have been authenticated!")
    } else {
      setError("Invalid email or password")
    }
  }

  // Return JSX to render the Login form with email and password input fields, submit button, error message (if any), and a link to reset password
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <form className="flex flex-col w-80" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-8 mr-auto">Sign In</h1>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-md border mb-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-md border mb-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          autoComplete="password"
        />
        <button
          type="submit"
          className="bg-gray-300 text-white rounded-md py-2 px-4 hover:bg-gray-300 focus:outline-none"
        >
          Login
        </button>
        {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
        <p className="text-gray-600 text-sm mt-4 ml-auto">
          <a href="#" className="underline hover:text-gray-400">
            Forgot password?
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login
