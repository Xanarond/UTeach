import firebase from 'firebase';
import db from '../../../config/firebase';

export const updateEmail = (email) => ({ type: 'UPDATE_EMAIL', payload: email });

export const updatePassword = (password) => ({ type: 'UPDATE_PASSWORD', payload: password });

export const updateUsername = (username) => ({ type: 'UPDATE_USERNAME', payload: username });

export const updateBio = (bio) => ({ type: 'UPDATE_BIO', payload: bio });

export const login = () => async (dispatch, getState) => {
  try {
    const { email, password } = getState().user;
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: 'LOGIN', payload: response.user });
  } catch (e) {
    alert(e);
  }
};


/* export const glogin = () => async (dispatch, getState) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const token = result.credential.accessToken;
    // The signed-in user info.
    const { user } = result.user;
    dispatch({ type: 'LOGIN', payload: user });
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const { email } = error;
    // The firebase.auth.AuthCredential type that was used.
    const { credential } = error;
    console.log(errorCode, errorMessage, email, credential);
    // ...
  });
}; */

export const getUser = (uid) => async (dispatch, getState) => {
  try {
    const user = await db.collection('users').doc(uid).get();
    dispatch({ type: 'LOGIN', payload: user.data() });
  } catch (e) {
    alert(e);
  }
};

export const signup = () => async (dispatch, getState) => {
  try {
    const {
      email, password, username, bio,
    } = getState().user;
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    if (response.user.uid) {
      const user = {
        uid: response.user.uid,
        email,
        username,
        bio,
        photo: '',
        token: null,
      };
      await db.collection('users').doc(response.user.uid).set(user);
      dispatch({ type: 'SIGNUP', payload: user });
    }
  } catch (e) {
    alert(e);
  }
};
