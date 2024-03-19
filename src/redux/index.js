import {configureStore} from '@reduxjs/toolkit';
import voteReducer from './reducer';

export default configureStore({ reducer: voteReducer });
