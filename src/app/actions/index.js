import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

const ROOT_URL = 'https://api.github.com/users';


export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_USERS,
    payload: request,
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

// react-thunk + lodash
// export function fetchUsers() {
// 	const request = axios.get(`${ROOT_URL}`);

// 	return dispatch => {
// 		request.then(response => {
// 			dispatch({
// 			type: FETCH_IMAGES,
// 			payload: _map(response.data, "thumbnailurl")
// 		});
// 		});
// 	};
// }
