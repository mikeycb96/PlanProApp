import { StyleSheet, View, Text } from "react-native";



const YourComponent = ({style, item, dayIndex, daysTotal}) => {
    return(
        <View style={[styles.container, style]}>
            <Text>
                {item.title}
            </Text>
            <Text>
                {dayIndex}of{daysTotal}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderRadius: 10,
        elevation: 5
    }
})

export default YourComponent;