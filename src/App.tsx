import React from 'react';
import {Text} from 'react-native';


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


const Cat = () => {
  const name = "Sidney"
  return <Text>Hello, I am {getFullName('Sidney','Loyola','')}!</Text>;
};

export default Cat;