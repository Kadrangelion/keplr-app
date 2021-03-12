import React from 'react';

type SwitchProps = {
  toggleTheme: Function;
  leftLabel: string;
  rightLabel: string;
}

const Switch: React.FC<SwitchProps> = ({ toggleTheme, leftLabel, rightLabel}) => {

  return (
    <div onClick={()=>toggleTheme()}>
      Switch
    </div>
  )
}

export default Switch;