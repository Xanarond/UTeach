import uuid, { v4 as uuidv4 } from 'uuid';
import db from '../../../config/firebase';

export const updateSFullName = (input) => ({
  type: 'UPDATE_STUDENTFULLNAME',
  payload: input,
});

export const updateSPhone = (input) => ({
  type: 'UPDATE_STUDENTPHONE',
  payload: input,
});

export const updateSAdress = (input) => ({
  type: 'UPDATE_STUDENTADRESS',
  payload: input,
});

export const updateCFullName = (input) => ({
  type: 'UPDATE_CONTACTFULLNAME',
  payload: input,
});

export const updateCPhone = (input) => ({
  type: 'UPDATE_CONTACTPHONE',
  payload: input,
});

export const updateInstrument = (input) => ({
  type: 'UPDATE_INSTRUMENT',
  payload: input,
});

export const updatePayType = (input) => ({
  type: 'UPDATE_PAYTYPE',
  payload: input,
});

export const updateTrialLesson = (input) => ({
  type: 'UPDATE_TRIALLESSON',
  payload: input,
});

export const updateComment = (input) => ({
  type: 'UPDATE_COMMENT',
  payload: input,
});
/* StudentAddress:
      uid: user.uid,
      StudentFullName: student.StudentFullName,
username: user.username,
      student.StudentAddress,
      ContactFullName: student.ContactFullName,
      ContactPhone: student.ContactPhone,
      instrument: student.instrument,
      payType: student.payType,
      trialLesson: student.trialLesson,
      onetimePay: student.onetimePay,
      */

export const addStudent = () => async (dispatch, getState) => {
  try {
    const { student, user } = getState();
    const id = uuidv4();
    console.log('userid: ', user.uid);
    console.log(id);
    console.log('student', student);
    const add = {
      id,
      uid: user.uid,
      StudentFullName: student.sfullname,
      StudentPhone: student.sphone,
      StudentAddress: student.saddress,
      ContactFullName: student.cfullname,
      ContactPhone: student.cphone,
      TrialLesson: student.triallesson,
      Comment: student.comment,
      time: new Date(),
    };
    await db.collection('students').doc(id).set(add);
  } catch (e) {
    alert(e);
  }
};


export const getStudents = () => async (dispatch, getState) => {
  try {
    const { student } = getState();
    const array = [];
    const students = db.collection('students').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        array.push(doc.data());
      });
    });
    console.log(array);
    dispatch({ type: 'GET_STUDENTS', payload: array });
  } catch (e) {
    alert(e);
  }
};
