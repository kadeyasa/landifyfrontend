import type { Route } from "./+types/home";
import Welcome from "../welcome/welcome";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Landify Project" },
    { name: "description", content: "Welcome to LandiFy" },
  ];
}


export default function Home() {
  return <Welcome />;
}
