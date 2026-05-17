"use client";

import DashboardPage from "@/comonentes/Dashboard";
import { authClient } from "@/lib/auth-client";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  return <DashboardPage user={session?.user} isPending={isPending} />;
};

export default MyProfilePage;
