import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ImagePlaceholder_NameVisualDes } from '../ImagePlaceholder_NameVisualDes/ImagePlaceholder_NameVisualDes';
import classes from './Skill.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    imagePlaceholder?: ReactNode;
  };
  text?: {
    visualDesign?: ReactNode;
    createUserInterfaceDesignWithU?: ReactNode;
  };
}
/* @figmaId 416:1496 */
export const Skill: FC<Props> = memo(function Skill(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.imagePlaceholder || <ImagePlaceholder_NameVisualDes />}
      <div className={classes.headlineSubhead}>
        {props.text?.visualDesign != null ? (
          props.text?.visualDesign
        ) : (
          <div className={classes.visualDesign}>Visual Design</div>
        )}
        {props.text?.createUserInterfaceDesignWithU != null ? (
          props.text?.createUserInterfaceDesignWithU
        ) : (
          <div className={classes.createUserInterfaceDesignWithU}>
            Create user interface design with unique &amp; modern ideas
          </div>
        )}
      </div>
    </div>
  );
});
