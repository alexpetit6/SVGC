import sendRequest from "./send-request";
const BASE_URL = '/api/events'

export async function getEvents() {
  return sendRequest(BASE_URL)
}

export async function create(formData) {
  return sendRequest(BASE_URL, 'POST', formData)
}

export async function deleteEvent(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}