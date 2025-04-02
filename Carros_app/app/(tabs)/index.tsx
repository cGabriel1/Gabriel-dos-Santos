import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const carros = [
  {
    modelo: 'Fusca',
    cor: 'Azul',
    ano: 1970,
    imagem: 'https://i.pinimg.com/736x/13/51/7e/13517ed969871f4748e51ed7bcad64f6.jpg', 
  },
  {
    modelo: 'Civic',
    cor: 'Preto',
    ano: 2020,
    imagem: 'https://www.honda.com.br/automoveis/sites/hab/files/2020-05/CIVIC2020_TOUR_3_4_FRONTAL_A_ALTA_CRYSTAL_BLACK_PEARL.jpg', 
  },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {carros.map((carro, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: carro.imagem }} style={styles.image} />
          <Text style={styles.text}>Modelo: {carro.modelo}</Text>
          <Text style={styles.text}>Cor: {carro.cor}</Text>
          <Text style={styles.text}>Ano: {carro.ano}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});