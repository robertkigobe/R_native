import {StyleSheet,Button,View,TextInput} from 'react-native';
import { useState } from "react";

function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState("");

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
    );
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
      },
});