import sendRequest from "./send-request";
const BASE_URL = 'api/events'

export async function getEvents() {
  return sendRequest(BASE_URL)
}