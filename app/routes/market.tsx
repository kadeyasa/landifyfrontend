import type { Route } from "./+types/home";
import MarketDashboard from "../layouts/Ppmarkets";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Project" },
    { name: "description", content: "Welcome to LandiFy" },
  ];
}


export default function Market() {
  return <MarketDashboard />;
}
