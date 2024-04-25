import ThemeView from "@/components/ui/view/ThemeView";
import useCustomTheme from "@/hooks/useCustomTheme";
import React, { PropsWithChildren } from "react";
import {
  ScrollView as DefaultScrollView,
  RefreshControl,
  ViewStyle,
} from "react-native";

export type ScrollViewProps = Omit<
  DefaultScrollView["props"],
  "contentContainerStyle"
> &
  PropsWithChildren & {
    contentContainerStyle?: ViewStyle;
    loading?: boolean;
    refetch?: () => Promise<unknown>;
  };

const ScrollView = (props: ScrollViewProps) => {
  const { contentContainerStyle, children, loading, refetch, ...otherProps } =
    props;

  const { palette } = useCustomTheme();

  const backgroundColor = palette!.background?.default;

  const { backgroundColor: customBackgroundColor, ...restStyles } =
    contentContainerStyle || {};

  return (
    <ThemeView
      style={[
        {
          backgroundColor: customBackgroundColor || backgroundColor,
          flex: 1,
        },
      ]}
    >
      <DefaultScrollView
        contentContainerStyle={restStyles}
        refreshControl={
          <RefreshControl refreshing={loading || false} onRefresh={refetch} />
        }
        {...otherProps}
      >
        {children}
      </DefaultScrollView>
    </ThemeView>
  );
};

export default ScrollView;
