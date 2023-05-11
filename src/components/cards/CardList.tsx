import Card from "./Card"
import CardListProps from "./CardListProps"

/**
 * CardList component that renders a list of Card components based on the homes data.
 * @param homes An array of home data objects to be rendered as Card components.
 */
const CardList = ({ homes }: CardListProps) => {
  return (
    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center px-4 lg:px-0 my-2">
      {homes.map((homeData, index) => (
        <Card key={index} {...homeData} />
      ))}
      <style jsx>{`
        .card-container {
          gap: 7rem 1rem;
        }

        @media (max-width: 767px) {
          .card-container {
            gap: 10rem;
          }
        }
      `}</style>
    </div>
  )
}

export default CardList
