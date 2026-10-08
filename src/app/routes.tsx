import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  redirect,
  Outlet,
  Link,
} from "@tanstack/react-router";
import { useAuth, type User } from "./providers/AuthContext";
import Login from "../pages/Login/login";

// -------------------------------------------------------------
// گام اول: تعریف شکل اطلاعاتی که روتر می‌خواد همیشه همراهش داشته باشه
// -------------------------------------------------------------
export interface MyRouterContext {
  auth: {
    user: User | null;
  };
}

// -------------------------------------------------------------
// گام دوم: ساخت قاب اصلی سایت (Root Route)
// -------------------------------------------------------------
const rootRoute = createRootRouteWithContext<MyRouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  const { user, logout } = useAuth();

  return (
    <div>
      {/* نوار بالای سایت (Navbar) */}
      <nav style={{ display: "flex", gap: "10px", padding: "10px", background: "#eee" }}>
        <Link to="/">صفحه اصلی</Link>
        <Link to="/profile">پروفایل من</Link>
        {!user ? (
          <Link to="/login">ورود</Link>
        ) : (
          <button onClick={logout}>خروج</button>
        )}
      </nav>

      {/* محتوای هر صفحه اینجا رندر می‌شود */}
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// گام سوم: تعریف صفحات مختلف (Routes)
// -------------------------------------------------------------

// ۱. صفحه اصلی (برای همه باز است)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <h1>به سایت کاریابی خوش آمدید!</h1>,
});

// 👈 ۲. متصل کردن کامپوننت Login شما به روت /login
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login, 
});

// ۳. صفحه پروفایل (محافظت شده - Protected) 🔒
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  // ⛔ نگهبان ورودی این صفحه:
  beforeLoad: ({ context }) => {
    // چک کن ببین کاربر لاگین کرده یا نه
    if (!context.auth.user) {
      // اگر لاگین نکرده، ریدایرکتش کن به لاگین
      throw redirect({ to: "/login" });
    }
  },
  component: () => <h1>صفحه پروفایل شخصی شما</h1>,
});

// -------------------------------------------------------------
// گام چهارم: جمع‌آوری تمام مسیرها و ساخت موتور Router
// -------------------------------------------------------------
const routeTree = rootRoute.addChildren([indexRoute, loginRoute, profileRoute]);

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!, // مقدار اولیه خالی است، در App.tsx مقدار واقعی داده می‌شود
  },
});