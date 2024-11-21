import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";

const Stack = createNativeStackNavigator();
Stack;
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            conntentStye: { backgroundColor: "3f2f25" },
          }}
        >
          <Stack.Screen
            name="Mealscategory"
            component={CategoriesScreen}
            options={{
              title: "Meals Categories",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            // options={(route,navigation)=>{
            //   const catId = route.arams.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          ></Stack.Screen>
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
