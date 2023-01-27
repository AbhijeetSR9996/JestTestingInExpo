import {Image, Text, View} from 'react-native';

export default function Hello({name = 'World'}) {
  return (
    <View>
      <Text>Hello, {name}!</Text>
      <Image source={require('./assets/car.jpg')}
      accessibilityLabel="car waving" 
      />
    </View>
  );
}

// import React from 'react';
// import {Text, View} from 'react-native';

// export default function Hello({name}) {
//   return (
//     <View>
//       <Text>Hello, {name}!</Text>
//     </View>
//   );
// }