// Defines an interface that describes the properties of a user
export interface User {
  email: string
  password: string
  firstname: string
  lastname: string
}

// Define types for Props and User objects
export interface LoginProps {
  onLoginSuccess: (user: User) => void
}
