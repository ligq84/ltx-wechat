import * as types from '../constants';
import reqwest from 'reqwest';
import api from "../api";



export function fetchBuilding(){
  return {type:types.FETCH_BUILDING}
}
export function fetchRent(id){
  return {type:types.FETCH_RENT,id}
}
export function releaseUnit(query){
  return {type:types.RELEASE_UNIT,query}

}

export function entrustUnit(){

}


export function setCurrentDistrict(id){
  return function(dispatch){
    dispatch({type:types.SET_CURRENT_DISTRICT,id})
    dispatch(refetchBuildings())
  }
}

export function setCurrentComm(id){
  return function(dispatch){
    dispatch({type:types.SET_CURRENT_COMM,id})
    dispatch(refetchBuildings())
  }
}
export function setArea(min,max){
  return function(dispatch){
    dispatch({type:types.SET_AREA,min,max})
    dispatch(refetchBuildings())

  }
}
export function setPrice(min,max){
  return function(dispatch){
    dispatch({type:types.SET_PRICE,min,max})
    dispatch(refetchBuildings())
  }
}
export function setKeyword(keyword){
  return function(dispatch){
    // dispatch()
    dispatch({type:types.SET_KEYWORD,keyword})
    // dispatch(refetchBuildings())
  }
}
export function resetQuery(){
  return {type:types.RESET_QUERY}
}


export function fetchBuildings(){
  return function(dispatch,getState){
    const state = getState();
    const query ={
      maxPrice:state.query.price.max,
      minPrice:state.query.price.min,
      maxArea :state.query.area.max,
      minArea :state.query.area.min,
      cityId  :state.query.city.id,
      districtId : state.query.city.district.id,
      commId: state.query.city.district.comm.id,
      pageSize:4,
      curPage:state.query.curPage,
      searchName:state.query.keyword
    }

    dispatch(setIsBuidlingsFetching(true))

    api
    .fetchBuildings(query)
    .then(function(data){
      dispatch(setIsBuidlingsFetching(false))
      dispatch({
        type:types.FETCH_BUILDINGS,
        buildings:data.data.resultList,
        curPage:query.curPage+1,
        isMore:query.curPage*4<parseInt(data.data.totalCount),
        isNull:data.data.totalCount==0
      })
    })



  }
}
export function setIsBuidlingsFetching(isFetching){
  return {type:types.IS_BUILDINGS_FETCHING,isFetching}
}

export function clearBuildings(){
  return {type:types.CLEAR_BUILDINGS}
}
export function refetchBuildings(){
  return function(dispatch) {
    dispatch(clearBuildings())
    dispatch(fetchBuildings())
  }
}

export function setCurrentCity(id){
  return function(dispatch){
    dispatch({type:types.SET_CURRENT_CITY,id})
    // dispatch(refetchBuildings())
  }
}

export function clearBuilding(){
  return {type:types.CLEAR_BUILDING}
}

export function setCurrentBuilding(building){
  return {type:types.SET_CURRENT_BUILDING,building}
}
export function clearRent(){
  return {type:types.CLEAR_RENT}
}

export function fetchBuildingImages(){
  return {type:types.FETCH_BUILDING_IMAGES}
}



export function fetchService(id){

  return function(dispatch){
    reqwest({
      url: "/json/"+id+".json",
      method: 'get'
    }).then((data)=>console.log(data))

  }

}

export function fetchDistrictsAndComms(id){
  return function(dispatch){
    reqwest({
      url: "/api/loadDistrictTree/"+id,
      method: 'get'
    })
    .then(data=>[{
      id:null,
      val:"不限",
      comms:[]
    }].concat(data.data.map(district=>({
      id:district.id,
      val:district.name,
      comms:[{
        id:null,
        val:"不限"
      }].concat(district.commList.map(comm=>({id:comm.id,val:comm.name})))
    }))))
    .then(data=>dispatch({type:types.FETCH_DISTRICTS_AND_COMMS,data}));
  }
}
var searchKeywordRequest = null
export function searchKeyword(){
  return function (dispatch,getState){
    const keyword =getState().query.keyword;
    const cityId = getState().query.city.id;
    if(searchKeywordRequest!=null){
        searchKeywordRequest.abort()
    }
    searchKeywordRequest=reqwest({
      url: "/api/building/searchByKeyword",
      method: 'post',
      data:{
        keyword,
        cityId
      }
    })
    .then(data=>data.data.splice(0,30))
    .then(data=>dispatch({type:types.SEARCH_KEYWORD,data}));
  }
}
