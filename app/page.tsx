import { redirect } from "next/navigation";

// A raiz só encaminha: o proxy decide entre /dashboard e /login
export default function Home() {
  redirect("/dashboard");
}