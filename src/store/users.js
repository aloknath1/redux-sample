import { createSlice } from "@reduxjs/toolkit"; 

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addNewUser(state, action){
            let u = [];
            console.log(action);
            u.push(action.payload);
            return [...state, ...u];
        },
        removeOldUser(state, action){
            console.log(action);
            state.splice(action.payload,1);
            return state;
        },
        deleteOldUser(state, action){
            console.log("id..",action.payload);
            state.splice(action.payload,1);
            return state;
        }

    }
});

console.log(userSlice.actions);
export const {addNewUser, removeOldUser, deleteOldUser} = userSlice.actions;
export default userSlice.reducer;