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

export interface ArticlesResponse {
  articles: Article[];
}

export interface SourcesResponse {
  sources: Source[];
}

type GeneralCallback<Data> = (data: Data) => void;

export type SourcesCallback = GeneralCallback<SourcesResponse>;
export type ArticlesCallback = GeneralCallback<ArticlesResponse>;

export type RenderingCallback = SourcesCallback | ArticlesCallback;
