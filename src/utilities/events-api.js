import sendRequest from "./send-request";
const BASE_URL = '/api/events';

export async function getEvents() {
  return sendRequest(BASE_URL);
}

export async function eventDetail(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function create(formData) {
  return sendRequest(BASE_URL, 'POST', formData, true);
}

export async function deleteEvent(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function update(id, newData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', newData, true);
}
