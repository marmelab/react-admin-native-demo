import { useState } from "react";
import { InputProps, useInput, useReferenceInputController } from "ra-core";
import { Divider, Menu, Text, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export const RaReferenceInput = (props: InputProps & { reference: string }) => {
  const { allChoices, selectedChoices } = useReferenceInputController(props);
  const { field } = useInput(props);
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={
        <Text
          style={{
            color: theme.colors.onSurface,
            backgroundColor: theme.colors.surfaceVariant,
            borderBottomColor: "rgb(73, 69, 79)",
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingTop: 24,
            paddingBottom: 4,
            paddingHorizontal: 16,
            textAlignVertical: "center",
            textAlign: "left",
            height: 56,
            letterSpacing: 0.15,
            lineHeight: 19.2,
            fontSize: 16,
          }}
          onPress={() => setVisible(true)}
        >
          {selectedChoices ? selectedChoices[0]?.name : "Select a value"}
        </Text>
      }
    >
      <Divider />
      {allChoices.map((choice) => (
        <Menu.Item
          key={choice.id}
          onPress={() => {
            setVisible(false);
            field.onChange(choice.id);
          }}
          title={choice.name}
        />
      ))}
    </Menu>
  );
};
