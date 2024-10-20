import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
// import logger from "redux-logger";
import { api } from "./service";
import { authManager } from "./managers/authManager";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storageEngine =
  typeof window !== "undefined" ? storage : createNoopStorage();

const persistConfig = {
  key: "root",
  storage: storageEngine,
  whitelist: [],
  blacklist: [api.reducerPath],
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  authManager: authManager,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        "persist/PERSIST",
        "persist/REHYDRATE",
        "persist/REGISTER",
      ],
    },
  });

const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

const persister = persistStore(store);

type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = useDispatch<typeof store.dispatch>;
export const useAppSelector = useSelector<RootState>;

export { store, persister };
