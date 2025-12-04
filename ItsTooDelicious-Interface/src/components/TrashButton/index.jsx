import { TrashIcon } from '@phosphor-icons/react';
import { TrashButtonStyle } from './styles';

export function TrashButton({ ...props }) {
  return (
    <TrashButtonStyle {...props}>
      <TrashIcon size={'22px'} />
    </TrashButtonStyle>
  );
}
