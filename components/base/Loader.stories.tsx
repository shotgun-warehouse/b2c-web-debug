import { storiesOf } from '@storybook/react';

import Loader from './Loader';

storiesOf('Loader', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => <Loader />)
  .add('With Style', () => <Loader color="blues.deepSky" size={5} />);
