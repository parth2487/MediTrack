import { SET_USER } from './doctorAction.jsx';

const initialState = {
    _id:'',
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    city: '',
    clinicName: '',
    id:'',
    photo: '',
    experience: '',
    specialization: '',
    educationQualification: ''
};

const doctorReducer = (state = initialState, action) => {
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

export default doctorReducer;