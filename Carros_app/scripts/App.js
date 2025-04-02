import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Importando imagens locais
const fuscaImage = require('./assets/Fusca.jpg');
const civicImage = require('./assets/Civic.jpg');

const carros = [
  {
    modelo: 'Fusca',
    cor: 'Azul',
    ano: 1970,
    imagem: fuscaImage,
  },
  {
    modelo: 'Civic',
    cor: 'Preto',
    ano: 2020,
    imagem: civicImage,
  },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {carros.map((carro, index) => (
        <View key={index} style={styles.card}>
          <Image source={carro.imagem} style={styles.image} />
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