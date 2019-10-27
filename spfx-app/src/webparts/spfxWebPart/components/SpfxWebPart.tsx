import * as React from 'react';
import styles from './SpfxWebPart.module.scss';
import { ISpfxWebPartProps } from './ISpfxWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Hello, TestHook1, UserInfo } from '../../../../../spfx-library';
import { MSGraphClientFactory, MSGraphClient } from '@microsoft/sp-http';
import { MyComponent } from '@hasan/my-react-component-library';

export default class SpfxWebPart extends React.Component<ISpfxWebPartProps, {}> {
  private _graphFactory: MSGraphClientFactory;
  private _client: MSGraphClient;
  constructor(props: ISpfxWebPartProps) {
    super(props);
    const { serviceScope } = props.context;
    serviceScope.whenFinished(() => {
      this._graphFactory = serviceScope.consume(MSGraphClientFactory.serviceKey);
    });
  }

  public async componentDidMount(): Promise<void> {
    this._client = await this._graphFactory.getClient();
    this.forceUpdate();
  }

  public render(): React.ReactElement<ISpfxWebPartProps> {
    return (
      <div className={styles.spfxWebPart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <Hello title={'from SPFx Library'} />
              <TestHook1 />
              {this._client && <UserInfo client={this._client} />}
              <br />
              My: <MyComponent text="Hasan" color="red" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
