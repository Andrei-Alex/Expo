import { AppText } from '../../atoms';
import { IErrorMessage, styles } from '.';

const ErrorMessage: React.FC<IErrorMessage> = ({ error }) => {
  if (!error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;
