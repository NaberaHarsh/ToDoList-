import { SET_DATA, EDIT_DATA, DELETE_DATA } from "./todoType";

const initialState = {
  data: [],
};

const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DATA: {
      const {
        name,
        gender,
        hobbies,
        age,
        selectedDate,
        taskName,
        status,
        userId,
      } = action.payload;
      return {
        ...state,
        data: [
          ...state.data,
          {
            name,
            gender,
            hobbies,
            age,
            selectedDate,
            taskName,
            status,
            userId,
          },
        ],
      };
    }
    case EDIT_DATA: {
      const originalData = state.data;
      const newData = originalData.map((r: any) =>
        r.userId === action.payload.userId
          ? {
              name: action.payload.name,
              gender: action.payload.gender,
              hobbies: action.payload.hobbies,
              age: action.payload.age,
              selectedDate: action.payload.selectedDate,
              taskName: action.payload.taskName,
              status: action.payload.status,
              userId: action.payload.userId,
            }
          : { ...r }
      );
      return {
        ...state,
        data: newData,
      };
    }
    case DELETE_DATA: {
      const gotData = state.data;
      gotData.splice(action.payload, 1);
      return {
        ...state,
        data: gotData,
      };
    }
    default:
      return state;
  }
};

export default TodoReducer;
