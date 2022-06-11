import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './slices/alert';
// import authReducer from './slices/auth';
import adminAuthReducer from './slices/adminAuth';

export default configureStore({
    reducer: {
        alert: alertReducer,
        // auth: authReducer,
        adminAuth: adminAuthReducer,
    },
});
