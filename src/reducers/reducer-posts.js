import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions/';
import _ from 'lodash';
const toObject = function toObject(posts) {
  var rv = {};
  for (var i = 0; i < posts.length; ++i)
    rv[posts[i]['id']] = posts[i];
  return rv;
};

export default function(state = {}, action) {
    switch(action.type){
        case DELETE_POST:
            return _.omit(state, action.payload);
            
        case FETCH_POST:
 
            console.log(action.payload.data);
            
            return {...state, [action.payload.data.id]: action.payload.data};
        
        case FETCH_POSTS:
            console.log(action.payload.data);
            return toObject(action.payload.data);
        default: return state;
    }
    
}