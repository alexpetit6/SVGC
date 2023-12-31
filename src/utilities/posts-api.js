import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getPosts() {
  return sendRequest(BASE_URL);
}

export async function postDetail(id) {
  console.log('detail')
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function create(formData) {
  return sendRequest(BASE_URL, 'POST', formData, true);
}

export async function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function update(id, newData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', newData, true);
}