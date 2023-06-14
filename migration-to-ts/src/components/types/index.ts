interface Article {
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

interface Source {
  id: string;
  name: string;
}

export type ArticleCollection = readonly Article[];
export type SourceCollection = readonly Source[];

export interface ArticlesResponse {
  articles: ArticleCollection;
}

export interface SourcesResponse {
  sources: readonly Source[];
}

type GeneralCallback<Data> = (data: Data) => void;

export type SourcesCallback = GeneralCallback<SourcesResponse>;
export type ArticlesCallback = GeneralCallback<ArticlesResponse>;

export type RenderingCallback = SourcesCallback | ArticlesCallback;
