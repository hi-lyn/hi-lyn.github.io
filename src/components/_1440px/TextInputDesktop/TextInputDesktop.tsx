import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TextInputDesktop.module.css';

interface Props {
  className?: string;
  text?: {
    writeSomething?: ReactNode;
  };
}
/* @figmaId 416:1243 */
export const TextInputDesktop: FC<Props> = memo(function TextInputDesktop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.writeSomething != null ? (
        props.text?.writeSomething
      ) : (
        <div className={classes.writeSomething}>Write something</div>
      )}
    </div>
  );
});
