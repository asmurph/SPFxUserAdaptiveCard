import * as React from 'react';
import { initializeIcons } from "@uifabric/icons";
import styles from './SpFxAdaptiveCard.module.scss';
import { ISpFxAdaptiveCardProps } from './ISpFxAdaptiveCardProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { UserAdaptiveCard } from "./UserAdaptiveCard";
import pnp from "@pnp/pnpjs";
import { pnpConfig } from "../Services/pnp.config";


export default class SpFxAdaptiveCard extends React.Component<ISpFxAdaptiveCardProps, {}> {
  constructor(props: ISpFxAdaptiveCardProps) {
    super(props);
    initializeIcons(undefined, { disableWarnings: true });
    pnp.setup(pnpConfig);
  }
  
  public render(): React.ReactElement<ISpFxAdaptiveCardProps> {
    return (
      <div className={`${styles.spFxAdaptiveCard} ms-Grid`}>
      <div className="ms-Grid-row">
        <div
          className={`${ styles.title } ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-font-su`} >
          {this.props.description}
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <div>
            <UserAdaptiveCard />
          </div>
        </div>
      </div>
    </div>
    );
  }
}
