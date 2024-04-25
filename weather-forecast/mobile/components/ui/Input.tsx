import Text from "@/components/ui/text/Text";
import useCustomTheme from "@/hooks/useCustomTheme";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";

interface InputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
}

const Input = <T extends FieldValues>({
  control,
  name,
  placeholder,
  secureTextEntry,
  error,
}: InputProps<T>) => {
  const {
    palette: { text, error: errorStyles, primary },
  } = useCustomTheme();
  const errorColor = errorStyles.main;
  const borderColor = error ? errorColor : primary.main;
  const placeholderColor = text.secondary;
  const color = text.primary;

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              ...styles.input,
              borderColor,
              color,
              fontFamily: "Montserrat-Medium",
            }}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
          />
        )}
        name={name}
        defaultValue={"" as PathValue<T, Path<T>>}
      />
      {error && <Text style={{ color: errorColor }}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 7,
    width: "100%",
  },
});

export default Input;
