import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { generateId } from "../helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Form = ({ task, setTask, tasks, setTasks }) => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(task).length > 0) {
      setTaskName(task.taskName);
    }
  }, [task]);

  const handleTask = () => {
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        console.log("Justo antes de almacenar", jsonValue);
        await AsyncStorage.setItem("tasks", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };
    if (taskName === "") {
      setError(true);
      return;
    }
    setError(false);
    const taskObject = {
      taskName,
    };

    if (task.id) {
      taskObject.id = task.id;
      const tasksUpdated = tasks.map((taskState) =>
        taskState.id === task.id ? taskObject : taskState
      );

      setTasks(tasksUpdated);
      setTask({});
    } else {
      taskObject.id = generateId();

      setTasks([...tasks, taskObject]);

      storeData(tasks);
    }
    setTaskName("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Introduce una nueva tarea"
        value={taskName}
        onChangeText={setTaskName}
      />
      <Pressable onPress={handleTask} style={styles.btnNewTask}>
        <Text style={styles.btnNewTaskText}>{task.id ? "e" : "+"}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    marginBottom: 20,
  },

  input: {
    flex: 11,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 5,
    fontSize: 15,
  },
  btnNewTask: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems:"center",
    justifyContent:'center'
  },
  btnNewTaskText: { fontSize: 20 },
});
export default Form;
