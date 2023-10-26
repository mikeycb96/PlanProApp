import { Modal, View, Button, StyleSheet, Text } from "react-native"
import { useState, useContext } from "react"
import AddTask from "../modals/AddTask";
import { TaskModalContext } from "../contexts/TaskModalContext";

const HomepageContainer = () => {

    const {addTaskModalOpen, setAddTaskModalOpen} = useContext(TaskModalContext)

    return(
        <View>
            <Modal visible={addTaskModalOpen} animationType="slide">
                <View style={styles.container}>
                    <AddTask/>
                    <Button style={styles.button} onPress={() => setAddTaskModalOpen(false)} title="close"/> 
                </View> 
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        
    },
  });

export default HomepageContainer;