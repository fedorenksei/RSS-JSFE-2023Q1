export type ViewName = 'garage' | 'winners';

export type CarData = {
  id: number;
  name: string;
  color: HexColor;
}

export type HexColor = `#${string}`;
