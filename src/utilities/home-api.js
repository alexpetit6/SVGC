import sendRequest from "./send-request";
const BASE_URL = '/api/home';

export async function getHome() {
  return sendRequest(BASE_URL);
}

export async function update(newData) {
  return sendRequest(BASE_URL, 'PUT', newData, true);
}