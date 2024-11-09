import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cousrseGoals, setCousrseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCousrseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCousrseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler(){
    setModalVisible(true);
  }

  function endAddGoalHandler(){
    setModalVisible(false);
  }

  return (<>
  <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button 
        title='New goal' 
        color='#a065ec' 
        onPress={startAddGoalHandler}/>
     { 
      modalVisible && 
      <GoalInput 
      onAddGoal={addGoalHandler} 
      visible={modalVisible}
      onCancel={endAddGoalHandler}
      />
    }
      <View style={styles.goalsContainer}>
        <FlatList
          data={cousrseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem 
              text={itemData.item.text}
              id ={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
              />
              );
            }}
            keyExtractor={(item, index)=>{
              return item.id;
            }}
            alwaysBounceVertical={false}
            />
      </View>
    </View>
</>
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
