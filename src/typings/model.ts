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
  author: string,
  contents: string,
  folderName: string,
  userId: number,
}