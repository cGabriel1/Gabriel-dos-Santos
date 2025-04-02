import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const carros = [
  {
    modelo: 'Fusca',
    cor: 'Azul',
    ano: 1970,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRYF-eORPTP6FpnpOj-EwrUdHJ2aSM_Hpng&s', 
    descricao: 'O Fusca é um carro compacto produzido pela Volkswagen, conhecido por seu design icônico e confiabilidade. Lançado na década de 1930, tornou-se um símbolo da cultura automobilística.'
  },
  {
    modelo: 'Civic',
    cor: 'Preto',
    ano: 2020,
    imagem: 'https://example.com/civic.jpghttps://www.honda.com.br/automoveis/sites/hab/files/2020-05/CIVIC2020_TOUR_3_4_FRONTAL_A_ALTA_CRYSTAL_BLACK_PEARL.jpg', 
    descricao: 'O Honda Civic é um sedã que combina estilo, conforto e eficiência. Com um motor potente e tecnologia avançada, é uma escolha popular entre os motoristas que buscam desempenho e economia de combustível.'
  },
  {
    modelo: 'Mustang',
    cor: 'Vermelho',
    ano: 2021,
    imagem: 'https://s3.ecompletocarros.dev/images/lojas/285/veiculos/69213/veiculoInfoVeiculoImagesMobile/vehicle_image_1628000235_d41d8cd98f00b204e9800998ecf8427e.jpeg', 
    descricao: 'O Ford Mustang é um ícone americano, conhecido por seu desempenho esportivo e design agressivo. Desde seu lançamento em 1964, o Mustang tem sido sinônimo de liberdade e aventura nas estradas.'
  },
  {
    modelo: 'Corolla',
    cor: 'Branco',
    ano: 2019,
    imagem: 'https://example.com/corolla.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgglnTaoz1Q7LlnR0WQC8MKbWISjvd8dA5cg&s', 
    descricao: 'O Toyota Corolla é um dos carros mais vendidos do mundo, conhecido por sua confiabilidade e eficiência. Com um interior confortável e tecnologia moderna, é uma excelente opção para quem busca um carro prático.'
  },
  {
    modelo: 'Porsche 911',
    cor: 'Amarelo',
    ano: 2022,
    imagem: 'https://example.com/porsche.jhttps://www.webmotors.com.br/imagens/prod/349063/PORSCHE_911_4.0_24V_H6_GASOLINA_GT3_TOURING_PDK_34906312160598719.webp?s=fill&w=440&h=330&q=80&t=truepg', 
    descricao: 'O Porsche 911 é um carro esportivo de luxo que combina desempenho excepcional com um design atemporal. Com uma engenharia de ponta, o 911 é um verdadeiro prazer de dirigir.'
  },
  {
    modelo: 'Tesla Model S',
    cor: 'Cinza',
    ano: 2023,
    imagem: 'https://example.com/tehttps://autobusiness.com.br/_next/image?url=https%3A%2F%2Fs3.carro57.com.br%2FFC%2F9924%2F6648890_12_W_2e574e3a47.jpeg&w=1200&q=75sla.jpg', 
    descricao: 'O Tesla Model S é um sedã elétrico de alto desempenho, conhecido por sua autonomia impressionante e tecnologia inovadora. Com aceleração rápida e recursos de condução autônoma, é um marco na indústria automobilística.'
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
          <Text style={styles.description}>{carro.descricao}</Text>
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
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
});