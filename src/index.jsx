import { useState } from 'react';
import { View } from 'react-native';

import { Game, StartGame } from './screens';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const Content = () =>
    userNumber ? <Game userNumber={userNumber} /> : <StartGame onStartGame={onStartGame} />;

  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
}
