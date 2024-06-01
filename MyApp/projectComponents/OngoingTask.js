import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tasks = [
  { key: 1, name: 'Mobile Application Development' },
  { key: 2, name: 'Web Development' },
  { key: 3, name: 'Run for 20 minutes' },
  { key: 4, name: 'Shopping' },
  { key: 5, name: 'Read a Graphic' },
  { key: 6, name: 'Clean the House' },
  { key: 7, name: 'Cook Breakfast' },
  { key: 8, name: 'Laundry' },
  { key: 9, name: 'Watch Television' },
  { key: 10, name: 'Go for a Walk' },
  { key: 11, name: 'Email Correspondence' },
  { key: 12, name: 'Plan a Date' },
  { key: 13, name: 'Online Studies' },
  { key: 14, name: 'Write Codes' },
  { key: 15, name: 'Forex Trading' },
];

export default function CategoryList() {
    return (
        <View style={styles.container}>
            <Text style={styles.biggerText}>Ongoing Tasks</Text>
            <View style={styles.listContainer}>
                {tasks.map(task => (
                    <View style={styles.itemTaskContainer} key={task.key}>
                        <Text style={styles.bigText}>{task.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    listContainer: {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
    itemTaskContainer: {
        width: "125%", 
        marginBottom: 20,
        padding: 25,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: '#E8D1BA',
        borderRadius: 20,
    },
    bigText: {
        fontWeight: "bold",
        fontSize: 14,
    },
    biggerText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 6,
    },
});
