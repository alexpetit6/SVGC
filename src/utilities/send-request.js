// import { getToken } from "./users-service";

export default async function sendRequest  (url, method = 'GET', payload = null, payloadIsFormData = false) {
  const options = {method};
  if (payload) {
    options.headers = payloadIsFormData ? {} : { 'Content-Type': 'application/json' };
    options.body = payloadIsFormData ? payload : JSON.stringify(payload);
  }
  const res = await fetch(url, options)
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}