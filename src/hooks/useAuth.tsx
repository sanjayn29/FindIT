import { createContext, useContext, ReactNode } from "react";


interface AuthContextType {
  user: null;
  session: null;
  loading: boolean;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


function AuthProvider({ children }: { children: ReactNode }) {
  const loading = false;
  const signOut = () => {};
  return (
    <AuthContext.Provider value={{ user: null, session: null, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}



function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };