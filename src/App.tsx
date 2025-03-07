import React from 'react';
import {Text, TextInput, View} from 'react-native';


const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
) => {

  if (thirdName == '') {
    return firstName + ' ' + secondName + ' ' + thirdName;
  }
  else{
    return firstName;
  }
  
};


const Cat = (props: { name: string; }) => {
  const name = "Sidney"
  const surname = "Loyola"
  const pergunta = " Qual o seu nome?"

  return (
    <View>
      <Text>{props.name + pergunta}</Text>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginLeft: 8,
          marginRight: 8,
        }}></TextInput>
    </View>
  );
  
};

//export default Cat;

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat name="Fulano1" />
      <Cat name="Fulano2"/>
      <Cat name="Fulano3"/>
    </View>
  );
};

export default Cafe;