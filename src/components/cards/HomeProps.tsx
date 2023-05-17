// Defines an interface that describes the properties of a single home
interface HomeData {
  id: number
  address: string
  fullAddress: string
  city: string
  state: string
  zipCode: number
  bedrooms: number
  bathrooms: number
  yearBuilt: number
  sqft: number
}

export default HomeData
