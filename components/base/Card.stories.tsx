import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Card', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => <Card>This is the default card</Card>)
  .add('Touchable', () => (
    <Card onClick={() => alert('Card touched')}>This is a touchable card</Card>
  ))
  .add('Disabled', () => (
    <Card onClick={() => alert('Card touched')} disabled>
      This is a disabled card
    </Card>
  ));
