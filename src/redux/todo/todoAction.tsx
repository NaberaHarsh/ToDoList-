import { SET_DATA, EDIT_DATA, DELETE_DATA } from "./todoType";

export const setData = (data: { [k: string]: any }) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const editData = (data: { [k: string]: any }) => {
  return {
    type: EDIT_DATA,
    payload: data,
  };
};

export const deleteData = (id: number) => {
  return {
    type: DELETE_DATA,
    payload: id,
  };
};
