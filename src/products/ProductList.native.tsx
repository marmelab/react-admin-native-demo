import { Chip, List, Text } from "react-native-paper";
import {
  InfiniteListBase,
  RecordContextProvider,
  useGetOne,
  useListContext,
  useRecordContext,
} from "ra-core";
import { useNavigate } from "react-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { LoadMoreButton } from "../ui/LoadMoreButton";

export const ProductList = () => {
  return (
    <InfiniteListBase>
      <ProductListView />
    </InfiniteListBase>
  );
};

const ProductListView = () => {
  const { data } = useListContext();
  if (!data) return null;

  return (
    <ScrollView>
      <List.Section>
        {data.map((item: any) => (
          <RecordContextProvider value={item} key={item.id}>
            <ProductItem />
          </RecordContextProvider>
        ))}
      </List.Section>
      <LoadMoreButton />
    </ScrollView>
  );
};

const ProductItem = () => {
  const navigate = useNavigate();
  const record = useRecordContext();
  const { data: category } = useGetOne("categories", {
    id: record.category_id,
  });

  return (
    <List.Item
      title={
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Chip onPress={() => navigate(`/categories/${category?.id}/show`)}>
            {category?.name}
          </Chip>
          <Text>{record.reference}</Text>
        </View>
      }
      description={record.description}
      left={() => <List.Icon icon="image" />}
      onPress={() => navigate(`/products/${record.id}`)}
      style={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 16,
  },
});
