import { showLoading, hideLoading } from 'react-redux-loading-bar';
import GetJsonPlaceholder from '../api/fake';

export const INCREMENT_REQUESTED = 'home/INCREMENT_REQUESTED';
export const INCREMENT = 'home/INCREMENT';
export const DECREMENT_REQUESTED = 'home/DECREMENT_REQUESTED';
export const DECREMENT = 'home/DECREMENT';
export const GET_JSONPLACEHOLDER = 'home/GET_JSONPLACEHOLDER';
export const NOTIFY_MESSAGE = 'home/NOTIFY_MESSAGE';

export const increment = () => (dispatch) => {
  dispatch({
    type: INCREMENT_REQUESTED
  });

  dispatch({
    type: INCREMENT
  });
};

export const incrementAsync = () => (dispatch) => {
  dispatch(showLoading());

  dispatch({
    type: INCREMENT_REQUESTED
  });

  return setTimeout(() => {
    dispatch({
      type: INCREMENT
    });
    dispatch(hideLoading());
  }, 3000);
};


export const decrement = () => (dispatch) => {
  dispatch({
    type: DECREMENT_REQUESTED
  });

  dispatch({
    type: DECREMENT
  });
};


export const decrementAsync = () => (dispatch) => {
  dispatch(showLoading());
  dispatch({
    type: DECREMENT_REQUESTED
  });

  return setTimeout(() => {
    dispatch({
      type: DECREMENT
    });
    dispatch(hideLoading());
  }, 3000);
};

export const getJsonPlaceholder = () => async (dispatch) => {
  let result = [];

  dispatch(showLoading());
  dispatch({
    type: GET_JSONPLACEHOLDER,
    data: []
  });

  try {
    const { data } = await GetJsonPlaceholder();
    result = data;
  } catch (error) {
    dispatch({
      type: NOTIFY_MESSAGE,
      message: error
    });
  } finally {
    dispatch({
      type: GET_JSONPLACEHOLDER,
      data: result
    });
    dispatch(hideLoading());
  }
};
