const urlBase = 'http://127.0.0.1:3000/';

export function getCars() {
  return fetch(new URL('garage', urlBase))
}
