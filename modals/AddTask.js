import { Button, View, TextInput } from "react-native"
import { useState } from "react";

const AddTask = () => {

    const [text, setText] = useState("")

    const onChangeText = task => setText(task)

    const submitTask = (task) => {
        // add(task)
        setText("")
        alert('Task added')
    }

    return(
        <View>
            <TextInput
                value={text}
                placeholder='Enter your task'
                onChangeText={onChangeText}
            />
            <Button title={"add task"} onPress={() => submitTask(text)}/>
        </View>
    )
}

export default AddTask