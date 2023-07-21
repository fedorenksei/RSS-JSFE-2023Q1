import { CarParams } from './types';

const urlBase = 'http://127.0.0.1:3000/';
const urls = {
  garage: new URL('garage', urlBase),
}

export function getCars() {
  const fetchPromise = fetch(urls.garage);
  return catchFetch(fetchPromise).then((jsonResp) => {
    if (!Array.isArray(jsonResp)) {
      throw new Error('getCars response is not an array');
    }
    return jsonResp;
  });
}

export function createCar(carParams: CarParams) {
  const fetchPromise = fetch(urls.garage, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carParams),
  });
  return catchFetch(fetchPromise);
}


function catchFetch(fetchPromise: Promise<Response>) {
  return fetchPromise
    .then((resp: Response) => {
      if (!resp.ok) {
        throw new Error('Response is not 2xx');
      }
      return resp.json();
    })
    .catch((err) => {
      console.error(err);
    });
}
