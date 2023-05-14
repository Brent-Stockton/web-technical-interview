import homes from "../../data/homes.json"
import CardList from "../components/cards/CardList"
import { getServerSideProps } from "../pages/cardpage.server"

const CardPage = () => {
  return (
    <div className="text-center space-y-5 mt-5 text-xl font-bold">
      <CardList homes={homes} />
    </div>
  )
}

export default CardPage

export { getServerSideProps }
