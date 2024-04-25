import MePage from "@/components/profile/MePage";
import NavigationLink from "@/constants/navigation/links";
import { authOptions } from "@/lib/next-auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Me = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(NavigationLink.LOGIN);
  }
  return <MePage />;
};

export default Me;
