import LogoutButton from "@/components/auth/LogoutButton";
import EditLanguage from "@/components/profile/EditLanguage";
import EditLocationNumber from "@/components/profile/EditLocationNumber";
import EditPassword from "@/components/profile/EditPassword";
import EmailSection from "@/components/profile/EmailSection";
import UpdateProfileButton from "@/components/profile/UpdateProfileButton";
import ScrollView from "@/components/ui/view/ScrollView";
import useGetUser from "@/hooks/useGetUser";
import React from "react";
import { StyleSheet } from "react-native";

const Profile = () => {
  const { loading, refetch } = useGetUser();
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      loading={loading}
      refetch={refetch}
    >
      <EmailSection />
      <EditPassword />
      <EditLanguage />
      <EditLocationNumber />
      <UpdateProfileButton />
      <LogoutButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 15,
    padding: 20,
  },
});

export default Profile;
