import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

const ROOT_URL = 'https://api.github.com/users';


export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}`);

  // vanilla redux expects us to return an action
  return {
    type: FETCH_USERS,
    payload: request,
  };
}

// 

export function fetchTweets() {
  return function (dispatch) {
    axios.get('http://rest.learncode.academy/api/test123/tweets')
      .then((response) => {
        dispatch({ type: 'FETCH_TWEETS_FULFILLED', payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_TWEETS_REJECTED', payload: err })
      });
  };
}


// export function fetchImages() {
// 	return {
// 		type: FETCH_IMAGES,
// 		payload: [
// 			"http://lorempixel.com/image",
// 			"http://lorempixel.com/image",
// 			"http://lorempixel.com/image",
// 		]
// 	};
// }

