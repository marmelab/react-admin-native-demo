import { Card, Text } from "react-native-paper";

export const Dashboard = () => {
    return (
      <Card>
        <Text variant="bodyMedium" style={{ padding: 16 }}>
          This is a React-Admin demo app showing how it works with react-native and react-native-paper.
        </Text>
        <Text variant="bodyMedium" style={{ padding: 16 }}>
          Use the top right menu to navigate to the different resources.
        </Text>
      </Card>
    );
};
