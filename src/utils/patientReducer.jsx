import { SET_USER } from './patientAction.jsx';

const initialState = {
    _id:'',
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    city: '',
   doctorId:'',
    clinicName:'',
    diseasesName:'',
    patientAge:'',
  
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default patientReducer;