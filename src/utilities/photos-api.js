import sendRequest from './send-request';

const BASE_URL = '/api/photos';

export function getPhotos() {
  return sendRequest(BASE_URL);
}

export function upload(formData) {
  return sendRequest(`${BASE_URL}/upload`, 'POST', formData, true);
}

export async function deletePhoto(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export async function archivePhoto(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT')
}