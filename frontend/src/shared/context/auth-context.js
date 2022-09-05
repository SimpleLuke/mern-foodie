import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  toek: null,
  login: () => {},
  logout: () => {},
});
