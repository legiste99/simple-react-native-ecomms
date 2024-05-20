import {Text, View} from 'react-native';
import {styles} from './styles';

const Separator = ({text}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>{text}</Text>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default Separator;
