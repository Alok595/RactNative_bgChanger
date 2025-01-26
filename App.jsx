import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [color, setColor] = useState('#ffffff');

  const handlecolor = () => {
    const hexRange = '0123456789abcdef';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += hexRange[Math.floor(Math.random() * 16)];
    }
    setColor(hex);
  };
  return (
    <>
      <StatusBar backgroundColor={color} />
      <View style={[styles.container, {backgroundColor: color}]}>
        <TouchableOpacity onPress={handlecolor}>
          <View style={[styles.actionbtn]}>
            <Text style={styles.actionbtntxt}>Press-Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionbtn: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: 'lightcoral',
    borderRadius: 20,
  },
  actionbtntxt: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
