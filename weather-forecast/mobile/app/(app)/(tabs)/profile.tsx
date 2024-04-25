import Profile from "@/components/profile/Profile";
import ProfileProvider from "@/components/profile/ProfileProvider";
import Spinner from "@/components/ui/Spinner";
import useGetUser from "@/hooks/useGetUser";

export default function ProfileScreen() {
  const { user, loading } = useGetUser();

  if (!user || loading) {
    return <Spinner />;
  }

  return (
    <ProfileProvider profile={user}>
      <Profile />
    </ProfileProvider>
  );
}
