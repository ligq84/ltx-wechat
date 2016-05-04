import {IS_BUILDINGS_FETCHING,FETCH_BUILDING,FETCH_BUILDINGS,CLEAR_BUILDINGS,SET_CURRENT_BUILDING,CLEAR_BUILDING,FETCH_BUILDING_IMAGES} from '../constants';
const initialState={
  buildings:[],
  isNull  :false,
  building:{
  },
  images:[],
  isBuildingsFetching:false,
  isMore:true

}

export default function area(state = initialState, action) {
  switch (action.type) {
  case FETCH_BUILDING:
    return Object.assign({}, state, {
      building:{
        ...state.building,
        ...action.building
      }
    });
  case FETCH_BUILDINGS:
    return Object.assign({}, state, {
      buildings:state.buildings.concat(action.buildings),
      isMore:action.isMore,
      isNull:action.isNull
    });
  case CLEAR_BUILDINGS:
    return Object.assign({}, state, {
      buildings:[],
      isMore:action.true,
      isNull:false
    });
  case SET_CURRENT_BUILDING:
    return Object.assign({}, state, {
      building:{
        ...state.building,
        ...action.building
      }
    });
    case CLEAR_BUILDING:
      return Object.assign({}, state, {
        building:{
          id:state.building.id
        }
      });
    case FETCH_BUILDING_IMAGES:
      return Object.assign({}, state, {
        images:action.images
      });
  case IS_BUILDINGS_FETCHING:
    return Object.assign({}, state, {
      isBuildingsFetching:action.isFetching
    });
  default:
    return state;
  }
}
