import React from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';


const Nosotros = ({navigation, route}) => {
  

    console.log(route);
    
    const regresar = () => {
            navigation.goBack();
            //navigation.push('Inicio')
            //navigation.navigate('Inicio')
    }

    const { clienteId, totalpagar } = route.params;
    

  return (
    <View style={styles.contenedor}>
        <Text>Nosotros</Text>
        <Text>ClienteId : {JSON.stringify(clienteId)}</Text>
        <Text>Total a Pagar : {JSON.stringify(totalpagar)}</Text>
        <Button title="Vovler"
            onPress={ () => regresar() }
        />
    </View>
  );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Nosotros;
