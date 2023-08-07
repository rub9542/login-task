export const ADD_LIST = "ADD_LIST";
export const ADD_USER_DATA = "ADD_USER_DATA";


export const addList = (data) => {
  return {
    type: ADD_LIST,
    data,
  };
};

export const addUserData = (data) => {
  return {
    type: ADD_USER_DATA,
    data,
  };
};