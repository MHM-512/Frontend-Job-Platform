// src/App.tsx
import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider, useAuth } from './providers/AuthContext'
import { router } from "./routes";

function InnerApp() {
  const auth = useAuth(); // دریافت وضعیت کاربر (لاگین / غیر لاگین)

  // پاس دادن وضعیت auth به context روتر جهت بررسی در beforeLoad
  return <RouterProvider router={router} context={{ auth }} />;
}

export default function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}