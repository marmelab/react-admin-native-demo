import { EditBase, useGetManyReference, useRecordContext } from "ra-core";
import { Form } from "../ui/Form";
import { RaTextInput } from "../ui/RaTextInput";
import { View } from "react-native";

export const CategoryEdit = () => {
  return (
    <EditBase mutationMode="pessimistic">
      <CategoryView />
    </EditBase>
  );
};

const CategoryView = () => {
  const record = useRecordContext();
  const { total } = useGetManyReference(
    "products",
    {
      target: "category_id",
      id: record?.id,
      pagination: { page: 1, perPage: 1 },
    },
    {
      enabled: !!record,
    }
  );

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
        <RaTextInput source="name" />
      </Form>
    </View>
  );
};
