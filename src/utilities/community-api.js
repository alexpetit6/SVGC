import sendRequest from "./send-request";
const BASE_URL = '/api/community';

export async function getCommunity() {
  return sendRequest(BASE_URL);
}

export async function update(newData) {
  return sendRequest(BASE_URL, 'PUT', newData, true);
}