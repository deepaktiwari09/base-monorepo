import { ENDPOINTS } from "../../endpoints"
import { api } from "../../service"

export const authService = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILogin>({
      query: (body) => ({
        url: ENDPOINTS.LOGIN,
        method: 'POST',
        body
      })
    })
  })
})

export const { useLoginMutation } = authService