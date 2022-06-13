import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { alert } from './alert';
import url from '../../utils/api';

export const loadUser = createAsyncThunk(
    'auth/loadUser',
    async (thunkAPI) => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            if (token) {
                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${token}`;
            } else {
                delete axios.defaults.headers.common['Authorization'];
            }
        }
        try {
            const response = await axios.get(`${url}users/get_current_user`);
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

export const login = createAsyncThunk(
    'auth/login',
    async ({ uid, password }, thunkAPI) => {
        try {
            const response = await axios.post(`${url}users/login`, {
                uid: uid,
                password: password,
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

export const logout = createAsyncThunk('auth/logout', async () => {
    // await AuthService.logout();
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        user: null,
        isLoggedIn: false,
    },
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.admin_access_token;
            localStorage.setItem(
                'token',
                action.payload.user_access_token
            );
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            // localStorage.removeItem('token');
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [loadUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        [loadUser.rejected]: (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
});
export const {} = authSlice.actions;

export default authSlice.reducer;
