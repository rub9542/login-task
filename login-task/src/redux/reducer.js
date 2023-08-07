import { ADD_LIST, ADD_USER_DATA } from "./actions";

const initialState = {
 usersList:[],
 userData:{}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const data1 = action.data;
      return {
        ...state,
        usersList: data1,
      };
    case ADD_USER_DATA:
      const data2 = action.data;
      return {
        ...state,
        userData: data2,
      };
    default:
      return state;
  }
};

export default userReducer;
