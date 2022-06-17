import { FC, memo } from 'react';

import classes from './App.module.css';
import { Logee1440 } from './components/Logee1440/Logee1440';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Logee1440 />
    </div>
  );
});
