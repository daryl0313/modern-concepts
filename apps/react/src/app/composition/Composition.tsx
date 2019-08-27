import * as React from 'react';
import { SimpleCompositionComponent } from './SimpleComposition';
import { InjectedCompositionComponent } from './InjectedComposition';
import { MultipleCompositionComponent } from './MultipleComposition';

const sectionStyles: React.CSSProperties = {
  border: 'solid 1px grey',
  margin: '5px'
};

export default class Composition extends React.Component {
  public render() {
    return (
      <>
        <div style={sectionStyles}>
          <h1>
            Simple:
          </h1>
          <SimpleCompositionComponent>
            <div>Please render this content!</div>
          </SimpleCompositionComponent>
        </div>

        <div style={sectionStyles}>
          <h1>
            Provided Data:
          </h1>
          <InjectedCompositionComponent>
            {
              (count: number) => {
                return (<div>Please render this content with count {count}!</div>);
              }
            }
          </InjectedCompositionComponent>
        </div>

        <div style={sectionStyles}>
          <h1>
            Multiple:
          </h1>
          <MultipleCompositionComponent
            child1={<div>This is the first child</div>}
            child2={(count: number) => <div>This is the second child: {count}</div>}
          />
        </div>
      </>
    );
  }
}
