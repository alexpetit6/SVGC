import sendRequest from "./send-request";
const BASE_URL = '/api/colors';

export async function getColors() {
  return sendRequest(BASE_URL);
}

export async function update(formData) {
  return sendRequest(BASE_URL, 'PUT', formData);
}