import stream from '../api/stream';
import history from '../history';

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};


export const createStream = (value) => async (dispatch,getState) => {
  const { userId } = getState().auth;
  const res = await stream.post('/streams',{ ...value,userId });

  dispatch({
     type:'CREATE_STREAM',
     payload:res.data
    });
    history.push('/');
};


export const fetchStreams = () => async (dispatch) => {
  const res = await stream.get('/streams');

  dispatch({
     type:'FETCH_STREAMS',
     payload:res.data
    });
};


export const fetchStream = (value) => async (dispatch) => {
  const res = await stream.get(`/streams/${value}`);

  dispatch({
     type:'FETCH_STREAM',
     payload:res.data
    });
};


export const editStream = (id,value) => async (dispatch) => {
  const res = await stream.patch(`/streams/${id}`,value);

  dispatch({
     type:'EDIT_STREAM',
     payload:res.data
    });
    history.push('/');
};


export const deleteStream = (id) => async (dispatch) => {
  await stream.delete(`/streams/${id}`);

  dispatch({
     type:'DELETE_STREAM',
     payload:id
    });
  history.push('/');
};
