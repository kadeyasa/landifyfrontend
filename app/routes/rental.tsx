import type { Route } from "./+types/home";
import RentalDashboard from "../layouts/Rentals";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rental Property" },
    { name: "description", content: "Welcome to LandiFy" },
  ];
}


export default function Portfolio() {
  return <RentalDashboard />;
}
