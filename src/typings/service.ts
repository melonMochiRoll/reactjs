
export interface JoinService {
  onVerifyValue: (
    type: string,
    value: string,
    ) => Promise<boolean>,
  onSubmit: (
    email: string,
    nickname: string,
    password: string
  ) => Promise<boolean>,
}
