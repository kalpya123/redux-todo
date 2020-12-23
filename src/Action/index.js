const ADD_TODO ="ADD_TODO";
export const addToDo= (message,user) =>({//message that we type
    type:ADD_TODO,
    message,
    user,
    id:Math.random(),
});

const DELETE_TODO ="DELETE_TODO";
export const DELETEToDo= (id) =>({//message that we type
    type:DELETE_TODO,
    id,
});