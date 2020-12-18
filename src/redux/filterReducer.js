import { colorFIlterChanged, statusFilterChanged } from "./actionTypes"

export const statusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
}

export const availableColors = ["green", "blue", "orange", "purple", "red"];
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const initialState = {
  status: statusFilters.All,
  colors: [],
}

 const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case statusFilterChanged: {
      return {
        ...state,
        status: action.payload
      }
    }

    case colorFIlterChanged: {
      let { color, changedType } = action.payload;
      const { colors } = state

      switch(changedType) {
        case 'added': {
          if(colors.includes(color)) {
            return state
          }
          return {
            ...state,
            colors: state.colors.concat(color)
          }
        }
        case 'removed': {
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          }
        }
        default:
          return state
      }
    }

    default:
      return state
  }
}

export default filterReducer