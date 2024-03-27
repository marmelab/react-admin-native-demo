import { InputProps, useInput } from "ra-core";
import { TextInput } from "react-native-paper";

export const RaTextInput = (props: InputProps) => {
  const { field } = useInput(props);

  return (
    <TextInput
      mode="outlined"
      label={props.label?.toString()}
      value={field.value}
      onChangeText={field.onChange}
    />
  );
};
