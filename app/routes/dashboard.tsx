import type { Route } from "./+types/home";
import Dashobard from "../layouts/Dashboard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Landify Project" },
    { name: "description", content: "Welcome to LandiFy" },
  ];
}


export default function Dashboard() {
  return <Dashobard />;
}
