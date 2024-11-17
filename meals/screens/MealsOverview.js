import { View, StyleSheet,Text } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverview() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview</Text>
    </View>
  );
}
export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
