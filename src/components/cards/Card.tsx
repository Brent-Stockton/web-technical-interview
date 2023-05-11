import {
  faBed,
  faBuilding,
  faChevronRight,
  faHouse,
  faToilet,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardProps from "./CardProps"

/**
Card component that renders a single card containing home data.
@param id The unique identifier of the home.
@param address The address of the home.
@param city The city where the home is located.
@param state The state where the home is located.
@param zipCode The zip code of the home.
@param bedrooms The number of bedrooms in the home.
@param bathrooms The number of bathrooms in the home.
@param yearBuilt The year the home was built.
@param sqft The square footage of the home.
*/
const Card = ({
  id,
  address,
  city,
  state,
  zipCode,
  bedrooms,
  bathrooms,
  yearBuilt,
  sqft,
}: CardProps) => {
  const backgroundStyles = {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }

  // Defines the styles for the inner card container.
  const innerCardStyles = {
    bottom: "-100px",
  }

  // Renders the card component with its corresponding data and styles.
  return (
    <div className="card-container">
      <div
        className="w-96 h-96 bg-gray-100 rounded-xl p-8 bg-cover bg-center relative shadow-lg"
        style={backgroundStyles}
      >
        <div
          className="w-full h-35 bg-white rounded-xl absolute bottom-0 left-1/2 transform -translate-x-1/2 p-3 shadow-md"
          style={innerCardStyles}
        >
          <div className="flex justify-between items-start text-black px-4 mt-2">
            <div className="flex flex-col items-start">
              <h2 className="text-3xl font-bold mr-4">{address}</h2>
              <p className="text-lg text-gray-400">{`${city} ${state} ${zipCode} `}</p>
            </div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center justify-center">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="flex justify-between items-center px-4 py-2 mt-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-2" />
              <p className="text-sm text-gray-400">{bedrooms}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-gray-600 mr-2"
              />
              <p className="text-sm text-gray-400">{yearBuilt}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faToilet} className="text-gray-600 mr-2" />
              <p className="text-sm text-gray-400">{bathrooms}</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHouse} className="text-gray-600 mr-2" />
              <p className="text-sm text-gray-400">
                {` ${sqft} Sq`}
                <sup>
                  <small>ft </small>
                </sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
