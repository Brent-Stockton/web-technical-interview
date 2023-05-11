import homes from "../../data/homes.json"
import CardList from "../components/cards/CardList"

/**
 * @returns // This component renders the CardPage, which displays a welcome message to the user and a list of homes. The list of homes is obtained from a JSON file located in the data folder. If the user is not logged in, their name will not be displayed in the welcome message.
 */
const CardPage = () => {
  const userString = localStorage.getItem("user") || ""
  const user = userString ? JSON.parse(userString) : null
  const { firstname, lastname } = user || {}

  return (
    <div className="text-center space-y-5 mt-5 text-xl font-bold">
      <h1>
        Welcome {firstname} {lastname}
      </h1>
      <CardList homes={homes} />
    </div>
  )
}

export default CardPage
