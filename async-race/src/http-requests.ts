import { CarParams } from './types';

const urlBase = 'http://127.0.0.1:3000/';
type Path = 'garage' | 'winners' | 'engine';
function url(path: Path) {
  return new URL(path, urlBase);
}
function urlWithId(path: Path, id: number) {
  return new URL(`${path}/${id}`, urlBase);
}
type EngineState = 'started' | 'stopped' | 'drive';
function getEngineUrl(id: number, engineState: EngineState) {
  const resource = url('engine');
  resource.searchParams.set('id', id.toString());
  resource.searchParams.set('status', engineState);
  return resource;
}

export async function getPage({
  resourceType,
  itemsOnPage,
  page,
}: {
  resourceType: 'winners' | 'garage';
  itemsOnPage: number;
  page: number;
}) {
  const resource = url(resourceType);
  resource.searchParams.set('_limit', itemsOnPage.toString());
  resource.searchParams.set('_page', page.toString());
  const response = await fetch(resource);
  return response;
}

export function getCars() {
  const fetchPromise = fetch(url('garage'));
  return catchFetch(fetchPromise).then((jsonResp) => {
    if (!Array.isArray(jsonResp)) {
      throw new Error('getCars response is not an array');
    }
    return jsonResp;
  });
}

export function createCar(carParams: CarParams) {
  const fetchPromise = fetch(url('garage'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carParams),
  });
  return catchFetch(fetchPromise);
}

export function updateCar(id: number, carParams: CarParams) {
  const fetchPromise = fetch(urlWithId('garage', id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carParams),
  });
  return catchFetch(fetchPromise);
}

export function deleteCar(id: number) {
  const fetchPromise = fetch(urlWithId('garage', id), {
    method: 'DELETE',
  });
  return fetchPromise;
}

export function startEngine(id: number) {
  const fetchPromise = fetch(getEngineUrl(id, 'started'), {
    method: 'PATCH',
  });
  return catchFetch(fetchPromise);
}

export async function startDriving(id: number): Promise<Response> {
  return await fetch(getEngineUrl(id, 'drive'), {
    method: 'PATCH',
  });
}

export async function stopEngine(id: number): Promise<Response> {
  const fetchPromise = fetch(getEngineUrl(id, 'stopped'), {
    method: 'PATCH',
  });
  return fetchPromise;
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
