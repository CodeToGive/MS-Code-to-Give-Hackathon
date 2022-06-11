import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { alert } from './alert';
import url from '../../utils/api';
import setAuthToken from '../../utils/setAuthToken';

// export const loadAdmin = createAsyncThunk('authAdmin/loadAdmin', async () => {
//     if (localStorage.getItem('admin')) {
//         setAuthToken(JSON.parse(localStorage.getItem('admin')));
//     }

//     try {
//     } catch (e) {}
// });

export const register = createAsyncThunk(
    'authAdmin/register',
    async ({ username, email, password }, thunkAPI) => {
        try {
            const response = await axios.post(`${url}/admin/register`, {});
            thunkAPI.dispatch(alert(response.data.message));
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
    'authAdmin/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post(`${url}admins/login`, {
                admin_username: username,
                admin_password: password,
            });
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
        token: localStorage.getItem('adminToken'),
        admin: null,
        isLoggedIn: false,
    },
    reducers: {
        // loginReducer: (state, action) => {},
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.token = action.payload.access_token;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
            localStorage.removeItem('adminToken');
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.access_token;
            localStorage.setItem('adminToken', action.payload.access_token);
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.admin = null;
            localStorage.removeItem('adminToken');
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.admin = null;
        },
    },
});
export const {} = authSlice.actions;

export default authSlice.reducer;
