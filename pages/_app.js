// import App from 'next/app'
import "../styles/css/globals.css";
import AuthProvider from "../context/AuthProvider";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
