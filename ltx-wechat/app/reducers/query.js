import {SEARCH_KEYWORD,RESET_QUERY,SET_KEYWORD,FETCH_DISTRICTS_AND_COMMS,FETCH_DISTRICTS,SET_CURRENT_CITY,SET_CURRENT_DISTRICT,FETCH_COMMS,SET_CURRENT_COMM,SET_AREA,SET_PRICE,CLEAR_BUILDINGS,FETCH_BUILDINGS} from '../constants';
const initialState={
  city:{
    id:null,
    districts:[],
    name:null,
    district:{
      comms:[],
      id:null,
      comm:{
        id:null
      }
    }
  },
  area:{
    min:0,
    max:null,
  },
  price:{
    min:0,
    max:null,
  },
  curPage:1,
  options:[],
  keyword:""


}

export default function area(state = initialState, action) {
  switch (action.type) {
    case RESET_QUERY:
      return Object.assign({}, state, {
        area:{
          min:0,
          max:null,
        },
        price:{
          min:0,
          max:null,
        },
        city:{
          ...state.city,
          district:{
            comms:[],
            id:null,
            comm:{
              id:null
            }
          }
        },
        options:[]
      });
  case FETCH_DISTRICTS_AND_COMMS:
    return Object.assign({}, state, {
      city:{
        ...state.city,
        districts:action.data
      }
    });
    case SET_CURRENT_DISTRICT:
      return Object.assign({}, state, {
        city:{
          ...state.city,
          district:{
            ...state.city.district,
            id:action.id
          }
        }
      });
    case SET_CURRENT_COMM:
        return Object.assign({},state,{
          city:{
            ...state.city,
            district:{
              ...state.city.district,
              comm:{
                ...state.city.district.comm,
                id:action.id
              }
            }
          }
        })
    case SET_AREA:
        return Object.assign({},state,{
          area:{
            min:action.min,
            max:action.max
          }
        })
    case SET_PRICE:
          return Object.assign({},state,{
            price:{
              min:action.min,
              max:action.max
            }
          })
    case CLEAR_BUILDINGS:
      return Object.assign({},state,{
        curPage:1
      })

    case FETCH_BUILDINGS:
        return Object.assign({},state,{
          curPage:action.curPage
        })
    case SET_CURRENT_CITY:
      return Object.assign({},state,{
        city:{
          ...state.city,
          id:action.id
        }
      })
    case SEARCH_KEYWORD:
    return Object.assign({},state,{
      options:action.data
    })
    case SET_KEYWORD:
      return Object.assign({},state,{
        keyword:action.keyword
      })
  default:
    return state;
  }
}
