import React from 'react';

import {
    StyleSheet,
    Text,
    Button,
    View,
  } from 'react-native';


const Inicio = ({navigation}) => {
  

    const informacion = {
        clienteId: 5000,
        totalpagar: 1500
    }

    const visitarNosotros = () => {
        navigation.navigate('Nosotros',informacion);
    }

  return (
    <View style={styles.contenedor}>
    <Text>Inicio</Text>
    <Button title="Ir a nosotros"
            onPress={ () => visitarNosotros() }
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


export default Inicio;
