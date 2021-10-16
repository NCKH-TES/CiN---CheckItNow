import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import task from '../../services/apis/task';

export const getListTask = createAsyncThunk('task/GET_LIST_TASK', async (data, {rejectWithValue}) => {
    try {
        const response = await task.getListTaskApi(data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.data);
    }
});

const initialState = {
    listTask: [],
    loading: false,
    error: {},
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers:{},
    extraReducers:{

        [getListTask.pending]: (state) =>{
            state.loading = true;
        },

        [getListTask.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.error;
        },

        [getListTask.fulfilled] : (state, action) => {
            state.loading = false;
            state.error = {};
            state.listTask = action.payload.data;
        }
    },
});

export default taskSlice.reducer;