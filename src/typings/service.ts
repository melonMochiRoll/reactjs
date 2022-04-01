
export interface JoinService {
  onVerifyValue: (
    value: string,
    ) => Promise<boolean>,
  onSubmit: (
    email: string,
    nickname: string,
    password: string
  ) => Promise<boolean>,
}
