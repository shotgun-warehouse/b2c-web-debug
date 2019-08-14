import { storiesOf } from '@storybook/react';

import Heading from './Heading';

storiesOf('Heading', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => <Heading>Heading</Heading>);
