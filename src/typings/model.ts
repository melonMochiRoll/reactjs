enum UserRoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export interface User {
  id: number,
  email: string,
  nickname: string,
  password: string,
  role: UserRoleEnum,
}