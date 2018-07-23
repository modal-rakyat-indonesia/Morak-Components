import {
  INCREMENT_REQUESTED, INCREMENT, DECREMENT_REQUESTED,
  DECREMENT, GET_JSONPLACEHOLDER, NOTIFY_MESSAGE, NAVBAR_TOGGLE
} from '../actions/home';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  data: [],
  message: '',
  isNavbarOpen: false,
  options: [
    {
      id: 1,
      text: 'Option 1'
    },
    {
      id: 2,
      text: 'Option 2'
    },
    {
      id: 3,
      text: 'Option 3'
    }
  ],
  url: process.env.BASE_URL,
  apiUrl: process.env.API_URL
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    case GET_JSONPLACEHOLDER:
      return {
        ...state,
        data: action.data
      };

    case NOTIFY_MESSAGE:
      return {
        ...state,
        message: action.message
      };

    case NAVBAR_TOGGLE:
      return {
        ...state,
        isNavbarOpen: !state.isNavbarOpen
      };

    default:
      return state;
  }
};
