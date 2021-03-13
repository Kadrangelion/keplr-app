import React, { useState } from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel, SwitchContainer } from './Switch.style';

type SwitchProps = {
  onClick: Function;
  defaultValue?: boolean;
  leftLabel: React.ReactNode;
  rightLabel: React.ReactNode;
}

/**
 * For this component to be reusable in other cases than Header we decided to set the leftLabel & RightLabel props
 * As React components so we can further pass either icons,text or others when needed ....

 */
const Switch: React.FC<SwitchProps> = ({ onClick, defaultValue = false, leftLabel, rightLabel}) => {
  const [checked, setChecked] = useState(defaultValue);

  const handleClick = () => {
    setChecked(!checked);
    onClick();
  }

  return (
    <SwitchContainer >
      {leftLabel}
      <CheckBoxWrapper >
        <CheckBox id="checkbox" type="checkbox" checked={checked} onChange={()=>handleClick()}/>
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      {rightLabel}
    </SwitchContainer>
  )
}

export default Switch;