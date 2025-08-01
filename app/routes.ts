import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // untuk /
  route("dashboard", "routes/dashboard.tsx"),
  route("portfolio", "routes/portfolio.tsx"),
  route("construction", "routes/investment.tsx"),
  route("detail-invesment/:id", "routes/detailinvestment.tsx"),
  route("rental", "routes/rental.tsx"),
  route("market", "routes/market.tsx"),
  route("partners", "routes/partners.tsx"),
] satisfies RouteConfig;
