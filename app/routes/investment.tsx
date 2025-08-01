import type { Route } from "./+types/home";
import InvesmentDashboard from "../layouts/Investments";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Project" },
    { name: "description", content: "Welcome to LandiFy" },
  ];
}


export default function Portfolio() {
  return <InvesmentDashboard/>;
}
