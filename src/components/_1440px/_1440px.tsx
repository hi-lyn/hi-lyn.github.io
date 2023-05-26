import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './_1440px.module.css';
import { Button_LevelSecondary } from './Button_LevelSecondary/Button_LevelSecondary';
import { Facebook41Icon } from './Facebook41Icon.js';
import { Footer_PropertyDesktop } from './Footer_PropertyDesktop/Footer_PropertyDesktop';
import { Header_PropertyDesktop } from './Header_PropertyDesktop/Header_PropertyDesktop';
import { Instagram51Icon } from './Instagram51Icon.js';
import { LatestWorkSection_PropertyDesk } from './LatestWorkSection_PropertyDesk/LatestWorkSection_PropertyDesk';
import { LinkedinIcon21Icon } from './LinkedinIcon21Icon.js';
import { LogosSection_PropertyDesktop } from './LogosSection_PropertyDesktop/LogosSection_PropertyDesktop';
import { Navigation_DiviceDesktop } from './Navigation_DiviceDesktop/Navigation_DiviceDesktop';
import { SkillsSection_PropertyDesktop } from './SkillsSection_PropertyDesktop/SkillsSection_PropertyDesktop';

interface Props {
  className?: string;
}
/* @figmaId 428:4430 */
export const _1440px: FC<Props> = memo(function _1440px(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Navigation_DiviceDesktop className={classes.navigation} />
      <Header_PropertyDesktop
        className={classes.header}
        classes={{
          rectangle2032: classes.rectangle2032,
          beauty_1674868241050_2Removebg: classes.beauty_1674868241050_2Removebg,
        }}
        swap={{
          facebook41: <Facebook41Icon className={classes.icon} />,
          instagram51: <Instagram51Icon className={classes.icon2} />,
          linkedinIcon21: <LinkedinIcon21Icon className={classes.icon3} />,
        }}
      />
      <LogosSection_PropertyDesktop
        className={classes.logosSection}
        classes={{
          image210: classes.image210,
          image212: classes.image212,
          image2102: classes.image2102,
          image214: classes.image214,
          image211: classes.image211,
          image213: classes.image213,
        }}
      />
      <SkillsSection_PropertyDesktop
        className={classes.skillsSection}
        swap={{
          button: (
            <Button_LevelSecondary
              text={{
                text: <div className={classes.text}>Hire Me</div>,
              }}
            />
          ),
        }}
      />
      <LatestWorkSection_PropertyDesk
        className={classes.latestWorkSection}
        classes={{ image: classes.image, image2: classes.image2, image3: classes.image3, image4: classes.image4 }}
        swap={{
          button: (
            <Button_LevelSecondary
              text={{
                text: <div className={classes.text2}>Show More</div>,
              }}
            />
          ),
        }}
      />
      <Footer_PropertyDesktop
        className={classes.footer}
        text={{
          letSDiscussYourProject: (
            <div className={classes.letSDiscussYourProject}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Let’s work </span>
                <span className={classes.label2}>together</span>
              </p>
            </div>
          ),
        }}
      />
    </div>
  );
});
