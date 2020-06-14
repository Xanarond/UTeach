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
    dispatch(getUser(response.user.uid));
  } catch (e) {
    alert(e);
  }
};


/* export const glogin = () => async (dispatch, getState) => {
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
