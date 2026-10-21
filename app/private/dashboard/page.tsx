import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div>
      <h1 className="mb-4 text-xl">
        Olá, {user?.firstName ?? user?.username ?? "usuário"}
      </h1>
      <p>E-mail: {user?.primaryEmailAddress?.emailAddress ?? "—"}</p>
      <p>ID: {user?.id}</p>
    </div>
  );
}