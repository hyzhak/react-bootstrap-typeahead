import {expect} from 'chai';
import React from 'react';
import renderer from 'react-test-renderer';

import {Typeahead} from '../src';

describe('Typeahead snapshot', () => {
  it('shows that render works for other components', () => {
    const SomeTestComponent = () => (
      <div>
        <h1>Hello</h1>
        <div>World!</div>
      </div>
    );
    const tree = renderer.create(<SomeTestComponent></SomeTestComponent>);
    expect(tree).to.be.ok;
  });

  it('should be rendered', () => {
    const handler = () => {
    };
    const options = [
      'John',
      'Miles',
      'Charles',
      'Herbie',
    ];
    // ... but it fails on renderer
    const tree = renderer.create(<Typeahead autoFocus={true} options={options} onChange={handler}/>);
    // TODO:
    // once <Typeahead/> will be added we could use chai-jest-snapshot to check snapshots
    // expect(tree.toJSON()).toMatchSnapshot();
  });
});
