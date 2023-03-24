import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Task from "./Task";



const Tasks = ({ setTask, tasks, deleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <Task
          key={item.id}
          task={item}
          setTask={setTask}
          deleteTask={deleteTask}
        />
      )}
      keyExtractor={item => item.id} 
    />
  );
};
const styles = StyleSheet.create({});
export default Tasks;
