import LocationItem from "@/components/locations/LocationItem";
import TopLocations from "@/components/locations/TopLocations";
import Spinner from "@/components/ui/Spinner";
import ScrollView from "@/components/ui/view/ScrollView";
import useGetUser from "@/hooks/useGetUser";
import { StyleSheet } from "react-native";

export default function Main() {
  const { user, loading, refetch } = useGetUser();

  if (!user) {
    return <Spinner />;
  }

  const { locations } = user;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      loading={loading}
      refetch={refetch}
    >
      {!locations.length && <TopLocations />}
      {locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
});
