import { EditBase, useRecordContext } from "ra-core";
import { Form } from "../ui/Form";
import { RaTextInput } from "../ui/RaTextInput";
import { RaReferenceInput } from "../ui/RaReferenceInput";
import { View } from "react-native";

export const ProductEdit = () => {
  return (
    <EditBase mutationMode="pessimistic">
      <ProductView />
    </EditBase>
  );
};

const ProductView = () => {
  const record = useRecordContext();

  if (!record) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Form>
        <RaTextInput source="reference" />
        <RaReferenceInput source="category_id" reference="categories" />
      </Form>
    </View>
  );
};
