import { User } from "./LoginTypes"

// Function to authenticate user based on email and password
export function authenticateUser(
  users: User[],
  email: string,
  password: string
) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  )

  if (user) {
    return user
  } else {
    return null
  }
}
