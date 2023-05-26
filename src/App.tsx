import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _1440px } from './components/_1440px/_1440px';
import resets from './components/_resets.module.css';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <_1440px />
    </div>
  );
});
