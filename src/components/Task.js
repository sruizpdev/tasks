import React, { useState } from "react";
import Checkbox from "expo-checkbox";

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
        <Text style={styles.taskText}>{taskName}</Text>
      </View>

      <View style={styles.btnContainer}>
        <Pressable onPress={() => setTask(task)} style={styles.btnEdit}>
          <Text style={styles.btnText}>Editar</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
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
  btnContainer: {},
});
export default Task;
