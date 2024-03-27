import { useInfinitePaginationContext } from "ra-core";
import { Button } from "react-native-paper";

export const LoadMoreButton = () => {
  const { hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfinitePaginationContext();
  return hasNextPage ? (
    <Button disabled={isFetchingNextPage} onPress={() => fetchNextPage()}>
      Load more
    </Button>
  ) : null;
};
