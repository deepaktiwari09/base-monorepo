interface IAuthManager {
  user: IUser | null
  token: string | null
  loading: boolean
  error: string | null
}

interface ILogin {
  email: string
  password: string
}

interface IUser {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
  updatedAt: string
}

interface ILoginResponse {
  user: IUser
  token: string
}

