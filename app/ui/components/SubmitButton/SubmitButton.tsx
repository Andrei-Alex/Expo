import { AppButton } from '../../atoms';
import { useFormikContext } from 'formik';
import { ISubmitButton } from '.';

const SubmitButton: React.FC<ISubmitButton> = ({ title, style }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} style={style} />;
};

export default SubmitButton;
