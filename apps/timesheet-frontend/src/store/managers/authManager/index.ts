import { createSlice } from "@reduxjs/toolkit"
import { authService } from "./service"

const initialState: IAuthManager = {
  user: null,
  token: null,
  loading: false,
  error: null,
}

export const authManager = createSlice({
  name: 'authManager',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addMatcher(authService.endpoints.login.matchPending, (state) => {
      state.loading = true
    })
  }
})

export default authManager.reducer