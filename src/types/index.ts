interface IUser {
  id: string;
  name: string;
}

interface IComment {
  id: string;
  user: IUser;
  content: string;
}

interface IPost {
  id: string;
  user: IUser;
  content: string;
  likeCount: number;
  imageUrls: string[];
  comments: IComment[];
}

interface IVideoPost {
  id: string;
  user: IUser;
  title: string;
  content: string;
  uri: string;
}

export type {IUser, IComment, IPost, IVideoPost};
