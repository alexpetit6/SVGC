import sendRequest from "./send-request";
const BASE_URL = '/api/join';

export async function getJoin() {
  return sendRequest(BASE_URL);
}

export async function update(newData) {
  return sendRequest(BASE_URL, 'PUT', newData);
}