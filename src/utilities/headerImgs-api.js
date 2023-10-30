import sendRequest from "./send-request";
const BASE_URL = '/api/headerImgs';

export async function getHeaderImg() {
  return sendRequest(BASE_URL);
}

export async function update(newData) {
  return sendRequest(BASE_URL, 'PUT', newData, true);
}