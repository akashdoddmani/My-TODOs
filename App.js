import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [todo,setTodo]=useState('');
  const [todos, setTodos] = useState([
    { todo: "Learn HTML", key: 1 },
    { todo: "Learn CSS", key: 2 },
    { todo: "Learn JavaScript", key: 3 },
  ]); 

  const deleteTodo=(key)=>{
    setTodos((prevTodos)=>(
      prevTodos.filter((todo)=>todo.key!=key)
    ));
  }

  const addTodo=()=>{
    if(todo.length>3){
      setTodos((prevTodos)=>(
        [{todo:todo,key:Date.now()},...prevTodos,]
      ))
      setTodo('');
    }else{
      Alert.alert("Oops!","Todo should be of more 3 characters",[{text:'Got it'}])
    }
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My TODO's</Text>
      </View>
      <View style={styles.content}>
        <View>
          <TextInput value={todo} placeholder="Add a new todo..." onChangeText={(e)=>setTodo(e)}  style={styles.textInput}/>
          <Button onPress={addTodo} title='Add Todo' color='#3944bc'/> 
        </View>
        <View style={styles.todoList}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.todoText}>
                  <Text>{item.todo}</Text>
                  <MaterialIcons onPress={()=>{deleteTodo(item.key)}} name="delete" size={24} color="#808080" />
                </View>
              </TouchableOpacity>
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
    flex:1,
    padding: 40,
    
  },
  todoList: {
    flex:1,
    marginTop: 20,
  },
  todoText: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    borderWidth: 0.5,
    borderColor: "#808080",
    marginTop: 10,
    marginBottom:5,
    borderRadius: 10,
  },
  header: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    backgroundColor: "#3944BC",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  textInput:{
    paddingVertical:6,
    paddingHorizontal:8,
    marginBottom:10,
    borderBottomWidth:0.5,
    // height:20,
  },
});
