import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { AntDesign } from "@expo/vector-icons";

import { Text, StyleSheet, View, Pressable } from "react-native";

const Task = ({ task, setTask, deleteTask }) => {
  const { id, taskName } = task;
  const [isChecked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(true);
    setTimeout(() => {
      deleteTask(id);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={handleCheckbox}
        />
      </View>
      <View style={styles.taskContainer}>
        <Text style={!isChecked ? styles.taskText : styles.taskTextThrough}>
          {taskName}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Pressable onPress={() => setTask(task)} style={styles.btnEdit}>
          <AntDesign name="edit" size={20} color="green" />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  checkboxContainer: {
    flex: 1,
  },
  checkbox: {
    borderRadius: 50,
    width: 20,
    height: 20,
  },
  taskContainer: {
    flex: 9,
  },
  taskText: {
    fontSize: 16,
  },
  taskTextThrough: {
    fontSize: 16,
    textDecorationLine: "line-through",
  },
  btnContainer: {},
});
export default Task;
