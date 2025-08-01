import type { Route } from "./+types/home";
import PortfolioDashboard from "../layouts/Portfolio";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Project" },
    { name: "description", content: "Welcome to LandiFy" },
  ];
}


export default function Portfolio() {
  return <PortfolioDashboard />;
}
