import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  return (
    <div>
      <header className="flex items-center justify-between border-b border-neutral-800 p-4">
        <span>Dashboard</span>
        <UserButton />
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}