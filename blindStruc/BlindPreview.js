import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

class Table extends React.Component {
  render() {
    const { blindsStructure } = this.props;

    return (
      <SafeAreaView style={styles.bodybg}>
        <View style={styles.bg}>
          {/* Render the first row outside of ScrollView */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, paddingLeft: 10, paddingRight: 10, backgroundColor: '#E5E3E2' }}>
            <Text style={{ flex: 1, color: "#86ADF8", fontWeight: 'bold', fontSize: 18 }}>Level</Text>
            <Text style={{ flex: 1, color: "black", fontWeight: 'bold', fontSize: 18 }}>Time</Text>
            <Text style={{ flex: 1, color: "black", fontWeight: 'bold', fontSize: 18 }}>Blinds</Text>
          </View>
        </View>
        <ScrollView>
          {/* Render the scrollable content */}
          {blindsStructure.map((row, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#E8E5E3' }}>
              <Text style={{ flex: 1, padding: 2, left: 7, color: "#86ADF8", fontSize: 15 }}>{row.level}</Text>
              <Text style={{ flex: 1, padding: 2, color: "black", fontSize: 15 }}>{row.time}</Text>
              <Text style={{ flex: 1, padding: 2, color: "black", fontSize: 15 }}>{row.blinds}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  bodybg: {
    color: "#fff",
  },
});
export default Table;
