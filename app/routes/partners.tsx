import type { Route } from "./+types/home";
import PartnersDashboard from "../layouts/Partners";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Project" },
    { name: "description", content: "Welcome to LandiFy" },
  ];
}


export default function Market() {
  return <PartnersDashboard />;
}
