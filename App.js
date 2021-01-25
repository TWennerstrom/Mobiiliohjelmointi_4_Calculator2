import React from 'react';
import{ StyleSheet,  Text,  View, Button, TextInput, FlatList}  from'react-native';

export default function App  () {

const plus= () => {
  let summa = parseFloat(num1)+parseFloat(num2);
  laske(summa);
  let text = <Text>{num1} + {num2} = {tulos}</Text>;
  tallenna(text);
  setText();
}

const miinus= () => {
  let summa =  parseFloat(num1)-parseFloat(num2);
  laske(summa);
  let text = <Text>{num1} - {num2} = {tulos}</Text>;
  tallenna(text);
  setText();
}

  function setText() {
    lisaa([{teksti: teksti, key: Math.random().toString()},
    ...lista
   ]);
  }

const [teksti, tallenna] = React.useState('');
const [lista, lisaa] = React.useState([]);
const[num1  , setText1] = React.useState('');
const[num2  , setText2] = React.useState('');
const[tulos, laske] = React.useState('');
  
return( 
  <View style={styles.container}>
    <View style={styles.contText}>
      <Text style={styles.tulos} >Tulos: {tulos}</Text></View>
    <View style={styles.contInput}>
    <TextInput
      style={styles.input}
      keyboardType='number-pad'
      placeholder=' Ensimmäinen numero'
      onChangeText={num1 => setText1(num1)}
      value={num1}
    />
    <TextInput
      style={styles.input}
      keyboardType='number-pad'
      placeholder=' Toinen numero'
      onChangeText={num2 => setText2(num2)}
      value={num2}
    /></View>
    <View style={styles.contButton}>
    <Button onPress={plus}title=" + "/>
    <Button onPress={miinus}title=" - "/>
    </View>
    <FlatList 
    data={lista}
    renderItem={({item}) =>
      <Text>{item.teksti}</Text>}
    />
  </View >
);
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  contText:{
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tulos:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  contInput:{
    flex: 0.2,
    alignItems: 'center',
  },
  input:{
    height: 40,
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 8,
    margin: 5,
  },
  contButton:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});