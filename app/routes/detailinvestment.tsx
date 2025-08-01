import type { Route } from "./+types/home";
import DetailDashboard from "../layouts/Detailinvestment";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Landify Project" },
    { name: "description", content: "Welcome to LandiFy" },
  ];
}

export default function DetailInvestment() {
  return <DetailDashboard />;
}
