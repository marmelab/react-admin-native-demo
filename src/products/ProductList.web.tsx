import { Chip, DataTable } from "react-native-paper";
import {
  InfiniteListBase,
  RaRecord,
  useListContext,
  useReference,
} from "ra-core";
import { ReactNode } from "react";
import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { useNavigate } from "react-router-native";

export const ProductList = () => {
  return (
    <InfiniteListBase sort={{ field: "reference", order: "ASC" }}>
      <ProductListView />
    </InfiniteListBase>
  );
};

const numberOfItemsPerPageList = [10, 25, 50];

const ProductListView = () => {
  const { data, total, page, perPage, setPage, setPerPage, sort, setSort } =
    useListContext();
  if (!data) return null;

  const from = (page - 1) * perPage;
  const to = Math.min(page * perPage, total);

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTableHeaderCell source="reference" style={{ flexGrow: 1 }}>
            Reference
          </DataTableHeaderCell>
          <DataTableHeaderCell
            source="category_id"
            style={{ flexGrow: 0, flexBasis: "25%" }}
          >
            Category
          </DataTableHeaderCell>
          <DataTableHeaderCell
            source="price"
            style={{ flexGrow: 0, flexBasis: "25%" }}
            numeric
          >
            Price
          </DataTableHeaderCell>
        </DataTable.Header>

        {data.map((record) => (
          <ProductItem key={record.id} record={record} />
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(total / perPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${total}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={perPage}
          onItemsPerPageChange={setPerPage}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
    </ScrollView>
  );
};

const DataTableHeaderCell = ({
  children,
  source,
  style,
  numeric,
}: {
  source: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  numeric?: boolean;
}) => {
  const { sort, setSort } = useListContext();
  return (
    <DataTable.Title
      sortDirection={
        sort.field === source
          ? sort.order === "ASC"
            ? "ascending"
            : "descending"
          : undefined
      }
      onPress={() =>
        setSort({
          field: source,
          order: sort.field === source && sort.order === "ASC" ? "DESC" : "ASC",
        })
      }
      style={style}
      numeric={numeric}
    >
      {children}
    </DataTable.Title>
  );
};

const ProductItem = ({ record }: { record: RaRecord }) => {
  const { referenceRecord: category } = useReference({
    reference: "categories",
    id: record.category_id,
  });
  const navigate = useNavigate();

  return (
    <DataTable.Row
      key={record.key}
      onPress={() => navigate(`/products/${record.id}`)}
    >
      <DataTable.Cell style={{ flexGrow: 1 }}>
        {record.reference}
      </DataTable.Cell>
      <DataTable.Cell style={{ flexGrow: 0, flexBasis: "25%" }}>
        <Chip>{category?.name}</Chip>
      </DataTable.Cell>
      <DataTable.Cell numeric style={{ flexGrow: 0, flexBasis: "25%" }}>
        {record.price}
      </DataTable.Cell>
    </DataTable.Row>
  );
};
