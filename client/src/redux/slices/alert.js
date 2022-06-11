import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export const alert = createAsyncThunk(
    'alert/alert',
    async ({ msg, alertType, timeout = 5000 }, thunkAPI) => {
        try {
            const id = v4();
            thunkAPI.dispatch(setAlert({ msg, alertType, id }));
            setTimeout(() => {
                thunkAPI.dispatch(removeAlert({ id }));
            }, timeout);
        } catch (error) {
            console.log(error);
        }
    }
);

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        alerts: [],
    },
    reducers: {
        setAlert: (state, action) => {
            const { msg, alertType, id } = action.payload;
            state.alerts = [...state.alerts, { msg, alertType, id }];
        },
        removeAlert: (state, action) => {
            const { id } = action.payload;
            state.alerts = state.alerts.filter((alert) => alert.id !== id);
        },
    },
    extraReducers: {
        // Async Reducers
    },
});

export const { setAlert, removeAlert } = counterSlice.actions;

export default counterSlice.reducer;
