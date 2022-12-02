export interface Post {
  title: string;
  body: string;
}

export interface FirePostResponse {
  data: () => Post;
}

export interface FireCollectionResponse<T> {
  docs: T[];
}
