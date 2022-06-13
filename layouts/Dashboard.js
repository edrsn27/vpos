import Header from "../components/Headers/Header";

import React, { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useRouter } from "next/router";
export default function Auth({ children }) {
  const { currentUser, loading } = useAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (!loading && !currentUser) push("/auth/sign-in");
  }, [currentUser,loading]);
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
