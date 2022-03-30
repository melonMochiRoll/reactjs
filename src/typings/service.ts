
export interface JoinService {
  onVerifyEmail: (
    email: string
    ) => Promise<boolean>,
  onVerifyNickname: (
    nickname: string
    ) => Promise<boolean>,
  onSubmit: (
    email: string,
    nickname: string,
    password: string
  ) => Promise<boolean>,
}
