export interface IButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: object;
  buttonStyle?: object;
  disabled?: boolean;
  iconRight?: any;
  iconLeft?: any;
  textButton?: boolean;
}
