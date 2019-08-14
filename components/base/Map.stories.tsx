import { storiesOf } from '@storybook/react';

import Map from './Map';

storiesOf('Map', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => <Map lat={48.866667} lng={2.333333} />);
