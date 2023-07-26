export type ViewName = 'garage' | 'winners';
export type FormActionName = 'create' | 'update';
export type CarActionName = 'select' | 'remove' | 'start' | 'stop';
export type PaginationActionName = 'next' | 'previous';

export type CarData = {
  id: number;
  name: string;
  color: HexColor;
};

export type CarParams = Omit<CarData, 'id'>;

export type HexColor = `#${string}`;

export interface HTMLColorInputElement extends HTMLInputElement {
  value: HexColor;
  defaultValue: '#000000';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ElementConstructor<T = { element: HTMLElement; unsetWaiting?: () => void }> = new (...args: any[]) => T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InputElementConstructor<T = { element: HTMLInputElement }> = new (...args: any[]) => T;

export type EngineData = { velocity: number; distance: number };
