import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_LevelPrimary } from '../Button_LevelPrimary/Button_LevelPrimary';
import { Button_LevelTertiary } from '../Button_LevelTertiary/Button_LevelTertiary';
import { Ellipse73Icon } from './Ellipse73Icon.js';
import { Facebook41Icon } from './Facebook41Icon.js';
import classes from './Header_PropertyDesktop.module.css';
import { Instagram51Icon } from './Instagram51Icon.js';
import { LinkedinIcon21Icon } from './LinkedinIcon21Icon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle2032?: string;
    beauty_1674868241050_2Removebg?: string;
    root?: string;
  };
  swap?: {
    facebook41?: ReactNode;
    instagram51?: ReactNode;
    linkedinIcon21?: ReactNode;
  };
}
/* @figmaId 416:1473 */
export const Header_PropertyDesktop: FC<Props> = memo(function Header_PropertyDesktop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.header}>
        <div className={classes.headlineSubhead}>
          <div className={classes.headlineSubhead2}>
            <div className={classes.frame55}>
              <div className={classes.welcome}>Welcome</div>
              <div className={classes.ellipse73}>
                <Ellipse73Icon className={classes.icon} />
              </div>
            </div>
            <div className={classes.iHaveCreativeDesignExperience}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>I have </span>
                <span className={classes.label2}>Creative Design</span>
                <span className={classes.label3}> Experience</span>
              </p>
            </div>
          </div>
          <div className={classes.andIMadeItMyselfInFigmaWithAni}>
            I’m Klyn, a creative UI/UX Designer. I’ve been helping businesses to solve their problems with my design for
            2 years.
          </div>
          <div className={classes.frame40}>
            <Button_LevelPrimary
              text={{
                text: <div className={classes.text}>Contact Me</div>,
              }}
            />
            <Button_LevelTertiary
              text={{
                text: <div className={classes.text2}>View Portfolio</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.frame3355}>
          <div className={`${props.classes?.rectangle2032 || ''} ${classes.rectangle2032}`}></div>
          <div className={classes.rectangle2033}></div>
          <div
            className={`${props.classes?.beauty_1674868241050_2Removebg || ''} ${
              classes.beauty_1674868241050_2Removebg
            }`}
          ></div>
        </div>
        <div className={classes.frame58}>
          <div className={classes.followMeOn}>Follow me on:</div>
          <div className={classes.facebook41}>
            {props.swap?.facebook41 || <Facebook41Icon className={classes.icon2} />}
          </div>
          <div className={classes.instagram51}>
            {props.swap?.instagram51 || <Instagram51Icon className={classes.icon3} />}
          </div>
          <div className={classes.linkedinIcon21}>
            {props.swap?.linkedinIcon21 || <LinkedinIcon21Icon className={classes.icon4} />}
          </div>
        </div>
      </div>
    </div>
  );
});
