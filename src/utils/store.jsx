import { createStore, combineReducers } from 'redux';
import doctorReducer from './doctorReducer.jsx';
import patientReducer from './patientReducer.jsx';
const rootReducer = combineReducers({
  user: doctorReducer,
  patient:patientReducer,
});

const store = createStore(rootReducer);

export default store;
