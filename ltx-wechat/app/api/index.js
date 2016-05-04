import reqwest from 'reqwest';
const host = "/api";
import equal from 'deep-equal'
export default {

  fetchBuildingsRequest:null,


  fetchBuilding:function(id){
    return reqwest({
      url: host+"/building/info/"+id,
      method: 'get'
    })
  },
  fetchBuildingImages:function(id){
    return reqwest({
      url: host+"/building/info/image/"+id,
      method: 'get'
    })
  },

  fetchRent:function(query){
    return reqwest({
      url: host+"/unit/findRentByBuildingId",
      method: 'get',
      data:query
    })
  },
  //entrust 1 release 2
  entrustAdd:function(query,type){
    query.type=type;
    return reqwest({
      url: host+"/entrust/add",
      method: 'get',
      data:query
    })
  },
  fetchDistricts: function(query) {
  return reqwest({
    url: host+"/map/findDistrictStat",
    method: 'get',
    data: query
    })
  },
  fetchComms: function(query) {
  return reqwest({
    url: host+"/map/findCommStat",
    method: 'get',
    data: query
    })
  },
  fetchBuildings: function(query) {

    if(this.fetchBuildingsRequest){
      this.fetchBuildingsRequest.abort()
    }
    this.fetchBuildingsRequest=reqwest({
      url: host+'/building/list',
      method: 'get',
      data: query,
    })
    return  this.fetchBuildingsRequest

  }

}
