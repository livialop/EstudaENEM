import { createContext, useCallback, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "estudaenem_auth";

function readStoredAuth() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredAuth()?.user ?? null);
  const [token, setToken] = useState(() => readStoredAuth()?.token ?? null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = readStoredAuth();
    if (stored?.token) {
      setUser(stored.user);
      setToken(stored.token);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback((userData, authToken) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ user: userData, token: authToken }),
    );
    setUser(userData);
    setToken(authToken);
  }, []);

  const updateUser = useCallback((partialUser) => {
    setUser((previousUser) => {
      const nextUser = { ...previousUser, ...partialUser };
      const stored = readStoredAuth();
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...stored, user: nextUser }),
      );
      return nextUser;
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.clear();
    setUser(null);
    setToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(token),
        isLoading,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth precisa estar dentro de <AuthProvider>");
  }
  return context;
}
