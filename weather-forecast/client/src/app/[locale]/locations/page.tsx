import LocationsPage from "@/components/locations/LocationsPage";
import NavigationLink from "@/constants/navigation/links";
import { authOptions } from "@/lib/next-auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Locations = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(NavigationLink.LOGIN);
  }
  return <LocationsPage />;
};

export default Locations;
