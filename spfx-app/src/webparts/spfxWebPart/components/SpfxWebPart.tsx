import * as React from 'react';
import styles from './SpfxWebPart.module.scss';
import { ISpfxWebPartProps } from './ISpfxWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Hello } from 'spfx-library';

export default class SpfxWebPart extends React.Component<ISpfxWebPartProps, {}> {
  public render(): React.ReactElement<ISpfxWebPartProps> {
    return (
      <div className={styles.spfxWebPart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <Hello name={'from SPFx Library'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
