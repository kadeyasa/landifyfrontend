import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // untuk /
  route("dashboard", "routes/dashboard.tsx"), // untuk /dashboard
] satisfies RouteConfig;
