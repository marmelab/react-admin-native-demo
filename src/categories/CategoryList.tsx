import { List } from "react-native-paper";
import {
  InfiniteListBase,
  RecordContextProvider,
  useGetManyReference,
  useListContext,
  useRecordContext,
} from "ra-core";
import { useNavigate } from "react-router";
import { ScrollView, StyleSheet } from "react-native";
import { LoadMoreButton } from "../ui/LoadMoreButton";

export const CategoryList = () => {
  return (
    <InfiniteListBase>
      <CategoryListView />
    </InfiniteListBase>
  );
};

const CategoryListView = () => {
  const { data } = useListContext();
  if (!data) return null;

  return (
    <ScrollView>
      <List.Section>
        {data.map((item: any) => (
          <RecordContextProvider value={item} key={item.id}>
            <CategoryItem />
          </RecordContextProvider>
        ))}
      </List.Section>
      <LoadMoreButton />
    </ScrollView>
  );
};

const CategoryItem = () => {
  const navigate = useNavigate();
  const record = useRecordContext();
  const { total } = useGetManyReference("products", {
    target: "category_id",
    id: record.id,
    pagination: { page: 1, perPage: 1 },
  });

  return (
    <List.Item
      title={record.name}
      description={`${total} products`}
      left={() => <List.Icon icon="tag" />}
      onPress={() => navigate(`/categories/${record.id}`)}
      style={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 16,
  },
});
