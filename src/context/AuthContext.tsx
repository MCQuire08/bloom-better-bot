import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import type { AccountInfo } from "@azure/msal-browser";
import { azureConfigured, msal, signIn, signOut } from "@/lib/azure";

type AuthContextValue = {
  account: AccountInfo | null;
  ready: boolean;
  configured: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<AccountInfo | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    msal.initialize().then(async () => {
      const redirect = await msal.handleRedirectPromise();
      const active = redirect?.account || msal.getActiveAccount() || msal.getAllAccounts()[0] || null;
      if (active) msal.setActiveAccount(active);
      setAccount(active);
      setReady(true);
    });
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    account,
    ready,
    configured: azureConfigured,
    login: async () => {
      const result = await signIn();
      msal.setActiveAccount(result.account);
      setAccount(result.account);
    },
    logout: async () => {
      await signOut(account || undefined);
      setAccount(null);
    },
  }), [account, ready]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used within AuthProvider");
  return value;
}

