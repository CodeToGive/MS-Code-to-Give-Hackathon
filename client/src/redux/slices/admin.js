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

export const createAdmin = createAsyncThunk(
    'admin/createAdmin',
    async ({ admin_username, admin_name, admin_email }, thunkAPI) => {
        try {
            const response = await axios.post(`${url}admins/create_admin`, {
                admin_username,
                admin_name,
                admin_email,
            });
            console.log(response.data);
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

export const createUser = createAsyncThunk(
    'admin/createUser',
    async ({ uid, name, email }, thunkAPI) => {
        try {
            const response = await axios.post(`${url}admins/create_user`, {
                uid,
                email,
                phone_number: Math.floor(Math.random() * 100000000000),
                address: '',
                paypal_acc: '',
            });
            console.log(response.data);
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

export const getAllAid = createAsyncThunk(
    'admin/getAllAid',
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${url}requests/all`);
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

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        admins: [],
        users: [],
        aids: [],
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
        [getAllAid.fulfilled]: (state, action) => {
            state.aids = action.payload;
        },
        [getAllAid.rejected]: (state, action) => {
            state.aids = [];
        },
    },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
