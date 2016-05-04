import api from "../api";
import * as types from '../constants';

export function fetchBuildingMiddleware({dispatch, getState }){
    return next => action => {
      if(action.type ===types.FETCH_BUILDING){
        const state =  getState()
        api.fetchBuilding(state.building.building.id).then(data=>{
          action.building=data.data;
          next(action);
        })

      }else{
        next(action);
      }
    }
}

export function fetchRentMiddleware({dispatch, getState }){
    return next => action => {
      if(action.type ===types.FETCH_RENT){
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
          buildingId:state.router.location.query.buildingId,
          curPage:state.rent.curPage
        }


        api.fetchRent(query).then(data=>{
          action.rents=data.data.resultList;
          action.totalCount =data.data.totalCount;
          action.curPage=state.rent.curPage+1;
          action.isMore = (data.data.totalCount>state.rent.curPage*12 )
          next(action);
        })
      }else{
        next(action);
      }
    }
}

export function releaseUnitMiddleware({dispatch, getState }){
    return next => action => {
      if(action.type ===types.RELEASE_UNIT){

        api.entrustAdd(action.query,2).then((data)=>{

          next(action);
        })
      }else{
        next(action);
      }
    }
}





export function fetchBuildingImagesMiddleware({dispatch, getState }){
    return next => action => {

      if(action.type ===types.FETCH_BUILDING_IMAGES){

        const state = getState();

        api.fetchBuildingImages(state.building.building.id).then((data)=>{

          action.images = data.data.map((ele)=>{
            return ele.path
          })
          next(action);
        })
      }else{
        next(action);
      }
    }
}
