export type ViewName = 'garage' | 'winners';
export type FormActionName = 'create' | 'update';

export type CarData = {
  id: number;
  name: string;
  color: HexColor;
}

export type CarParams = Omit<CarData, 'id'>

export type HexColor = `#${string}`;

export interface HTMLColorInputElement extends HTMLInputElement {
  value: HexColor;
  defaultValue: '#000000';
}
