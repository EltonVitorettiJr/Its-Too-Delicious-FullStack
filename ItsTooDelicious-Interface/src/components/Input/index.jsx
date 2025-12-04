import { StylesInput } from './styles';

export function Input({ children, ...props }) {
  return <StylesInput {...props}>{children}</StylesInput>;
}
