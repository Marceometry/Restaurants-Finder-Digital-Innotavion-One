export const Types = {
  SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
  SET_NEARBY_RESTAURANTS: 'restaurants/SET_NEARBY_RESTAURANTS',
  SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
}

const initialState = {
  restaurants: [],
  nearbyRestaurants: [],
  selectedRestaurant: null,
}

export function setRestaurants(restaurants) {
  return {
    type: Types.SET_RESTAURANTS,
    payload: restaurants,
  }
}

export function setNearbyRestaurants(restaurants) {
  return {
    type: Types.SET_NEARBY_RESTAURANTS,
    payload: restaurants,
  }
}

export function setRestaurant(restaurant) {
  return {
    type: Types.SET_RESTAURANT,
    payload: restaurant,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload }
    case Types.SET_NEARBY_RESTAURANTS:
      return { ...state, nearbyRestaurants: action.payload }
    case Types.SET_RESTAURANT:
      return { ...state, selectedRestaurant: action.payload }
    default:
      return state
  }
}
