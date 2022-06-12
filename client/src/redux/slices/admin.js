import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { alert } from './alert';
import url from '../../utils/api';

export const getAdmins = createAsyncThunk(
    'admin/getAdmins',
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${url}admins/get_admins`);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(alert(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getUsers = createAsyncThunk('admin/getUsers', async (thunkAPI) => {
    try {
        const response = await axios.get(`${url}users/get_all_users`);
        return response.data;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        thunkAPI.dispatch(alert(message));
        return thunkAPI.rejectWithValue();
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        admins: [],
        users: [],
    },
    reducers: {},
    extraReducers: {
        [getAdmins.fulfilled]: (state, action) => {
            state.admins = action.payload;
        },
        [getAdmins.rejected]: (state, action) => {
            state.admins = [];
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.users = [];
        },
    },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
