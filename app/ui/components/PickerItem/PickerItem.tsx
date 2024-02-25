import { TouchableOpacity } from 'react-native';
import { AppText } from '../../atoms';
import { IPickerItem, styles } from '.';

const PickerItem: React.FC<IPickerItem> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
