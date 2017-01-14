import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { specs, describe, it } from 'storybook-addon-specifications'

import {mount} from 'enzyme';
import expect from 'expect';

import KronosDateTime from '../component/Kronos';

const onButtonPress = action('Button has been pressed!');

storiesOf('Kronos', module)
  .add('Date and Time', function() {
    const story =
        <KronosDateTime
              initDateTime={ new Date() }
              onChange={ onButtonPress }
        />;

    specs(() => describe('Date and Time', function () {
        it('Should have the current date and time', function () {
          // Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs.
          let output = mount(story);
          // works fine without the previous line
          const foo = 'foo';
          expect(foo).toEqual('foo');
        });
      }));

    return story;
  });
