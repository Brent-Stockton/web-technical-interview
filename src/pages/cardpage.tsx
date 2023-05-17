import homes from "../../data/homes.json"
import CardList from "../components/cards/CardList"
import { getServerSideProps } from "../pages/cardpage.server"

/**
Define the CardPage component
@returns {JSX.Element} The CardPage component
*/
const CardPage = () => {
  // Render the CardList component, passing in the homes data as a prop
  return (
    <div className="text-center space-y-5 mt-5 text-xl font-bold">
      <CardList homes={homes} />
    </div>
  )
}

// Export the CardPage component and the getServerSideProps function
export default CardPage
export { getServerSideProps }
