import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpFxAdaptiveCardWebPartStrings';
import SpFxAdaptiveCard from './components/SpFxAdaptiveCard';
import { ISpFxAdaptiveCardProps } from './components/ISpFxAdaptiveCardProps';
import AdaptiveCard from "react-adaptivecards";
import {
  IUserAdaptiveCardState,
  ICurrentUser
} from ".././spFxAdaptiveCard/models/IUserAdaptiveCardState";


export interface ISpFxAdaptiveCardWebPartProps {
  description: string;
}

export default class SpFxAdaptiveCardWebPart extends BaseClientSideWebPart<ISpFxAdaptiveCardWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpFxAdaptiveCardProps> = React.createElement(
      SpFxAdaptiveCard,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
