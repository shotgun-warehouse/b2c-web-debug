import { storiesOf } from '@storybook/react';

import Text, { Alert } from './Text';

storiesOf('Text', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      placerat, libero at mollis luctus, nibh turpis tristique turpis, vitae
      iaculis massa ipsum accumsan eros.{' '}
    </Text>
  ))
  .add('Warning', () => (
    <Alert role="warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      placerat, libero at mollis luctus, nibh turpis tristique turpis, vitae
      iaculis massa ipsum accumsan eros.
    </Alert>
  ));
