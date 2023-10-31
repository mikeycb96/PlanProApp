import {
    Modal,
    View,
    Button,
    StyleSheet,
    Text,
    FlatList,
    StatusBar,
    Dimensions,
    ScrollView
  } from "react-native";
  import Item from "../components/Item";
  import { useState, useContext, useEffect } from "react";
  import AddTask from "../modals/AddTask";
  import { TaskModalContext } from "../contexts/TaskModalContext";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import "react-native-get-random-values";
  import { v4 as uuidv4 } from "uuid";
  import _values from "lodash";
  import { AppLoading } from "expo";
  import moment from "moment";
  import Timetable from "react-native-calendar-timetable";
  import YourComponent from "../components/YourComponent";

const TimetableContainer = () => {

    const { addTaskModalOpen, setAddTaskModalOpen } =
    useContext(TaskModalContext);

    const [date, setDate] = useState(new Date())
    const [from, setFrom] = useState(moment().subtract(3, 'days').toDate())
    const [till, setTill] = useState(moment().add(3, 'days').toISOString())

    const range = {from, till}

    const [todos, setTodos] = useState([{id: "one", title: "firstTodo", startDate: moment("2023-10-31 08:00", "YYYY-MM-DD HH:mm"), endDate: moment("2023-10-31 11:00", "YYYY-MM-DD HH:mm")}])

    return(
        <ScrollView>
            <Timetable items={todos} renderItem={props => <YourComponent {...props}/>} date={date}/>
        </ScrollView>
    )
}

export default TimetableContainer;