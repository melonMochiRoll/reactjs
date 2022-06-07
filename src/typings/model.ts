export interface User {
  id: number,
  email: string,
  nickname: string,
}

export interface Memo {
  id: number,
  createdAt: string,
  updatedAt: string,
  publicMode: boolean,
  contents: string,
  folderName: string,
  userId: number,
  tags: Tag[],
}

export interface Tag {
  id: number,
  tag: string,
  createdAt: string,
}