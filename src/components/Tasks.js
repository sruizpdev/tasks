import React from "react";
import { StyleSheet, View } from "react-native";
import Task from "./Task";
import { FlashList } from "@shopify/flash-list";

const Tasks = ({ setTask, tasks, deleteTask }) => {
  return (
    <FlashList
      data={tasks}
      renderItem={({ item }) => (
        <Task
          key={item.id}
          task={item}
          setTask={setTask}
          deleteTask={deleteTask}
        />
      )}
      estimatedItemSize={50}
    />
  );
};
const styles = StyleSheet.create({});
export default Tasks;
