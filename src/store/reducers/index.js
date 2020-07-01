import { combineReducers } from 'redux';

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'SIGNUP':
      return action.payload;
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    case 'UPDATE_USERNAME':
      return { ...state, username: action.payload };
    case 'UPDATE_BIO':
      return { ...state, bio: action.payload };
    default:
      return state;
  }
};

const student = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_STUDENTFULLNAME':
      return { ...state, sfullname: action.payload };
    case 'UPDATE_STUDENTPHONE':
      return { ...state, sphone: action.payload };
    case 'UPDATE_STUDENTADRESS':
      return { ...state, saddress: action.payload };
    case 'UPDATE_CONTACTFULLNAME':
      return { ...state, cfullname: action.payload };
    case 'UPDATE_CONTACTPHONE':
      return { ...state, cphone: action.payload };
    case 'UPDATE_COMMENT':
      return { ...state, comment: action.payload };
    case 'UPDATE_INSTRUMENT':
      return { ...state, instrument: action.payload };
    case 'UPDATE_PAYTYPE':
      return { ...state, paytype: action.payload };
    case 'UPDATE_TRIALLESSON':
      return { ...state, triallesson: action.payload };
    case 'UPDATE_ABONEMENT':
      return { ...state, subscription: action.payload };
    case 'GET_STUDENTS':
      return { ...state, feed: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  student,
});

export default rootReducer;
