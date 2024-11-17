import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";

const Stack = createNativeStackNavigator();
Stack
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Mealscategory" component={CategoriesScreen}></Stack.Screen>
          <Stack.Screen name="MealsOverview" component={MealsOverview}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
