import Header from "../components/Headers/Header";

import React from "react";

export default function Auth({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
