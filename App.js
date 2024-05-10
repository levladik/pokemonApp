import { Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  const charmanderData = {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };
  const squirtData = {
    name: 'Squirtle',
    image: require('./assets/squirtle.png'),
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Rage'],
    weaknesses: ['Electric', 'Grass'],
  };
  const pikachuData = {
    name: 'Pikachu',
    image: require('./assets/pikachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunder Shock', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground', 'Grass'],
  };
  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('./assets/bulbasaur.png'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Razor Leaf', 'Growl'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Poison'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData}/>
        <PokemonCard {...squirtData}/>
        <PokemonCard {...pikachuData}/>
        <PokemonCard {...bulbasaurData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
