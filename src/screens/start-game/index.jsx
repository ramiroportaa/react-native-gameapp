import { Text, View } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Header title="WELCOME!" />
      <Text>START GAME</Text>
    </View>
  );
};

export default StartGame;
