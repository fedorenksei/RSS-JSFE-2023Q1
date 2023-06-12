export type CallbackFromView = (data?: JSON) => void;

export interface Article {
  source: {
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface Source {
  id: string;
  name: string;
}
