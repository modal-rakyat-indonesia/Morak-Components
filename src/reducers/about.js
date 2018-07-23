import moment from 'moment';

const initialState = {
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
  apiUrl: process.env.API_URL,
  date: moment().format('MMMM Do YYYY, h:mm:ss a')
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
