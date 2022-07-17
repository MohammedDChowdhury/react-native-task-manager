import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key); // returns the current id chosen that meets the condition.
      // this id technically is a part of the array but we are filtering out and want only the id to not be equal to the key so this element will disappear
    });
  };
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40, // padding in every direction
  },
  list: { marginTop: 20 }, // so the list has a margin away from the form
});
