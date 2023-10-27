import { Button, View, TextInput, Form, Input } from "react-native"
import { useState } from "react"
import Item from "../components/Item"

const AddTask = ({addTodo}) => {

    const [text, setText] = useState("")

    const onAddTask = task => {
        addTodo(task)
        setText("")
        alert('Task added')
    }

    return(
        <View>
            <View>
                 <TextInput
                    value={text}
                    placeholder="Enter new task..."
                    onChangeText={setText}
                />
            </View>
            <View>
                <Button title="Add Task" onPress={() => onAddTask(text)}></Button>
            </View>
        </View>
    )
}

export default AddTask