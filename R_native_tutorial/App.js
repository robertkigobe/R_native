import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";
export default function App() {
  
  const [cousrseGoals, setCousrseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCousrseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={cousrseGoals}
          renderItem={(itemData) => {
            return (
             <GoalItem text={itemData.item.text}/>
            );
          }}
          keyExtractor={(item, index)=>{
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
