import { storiesOf } from '@storybook/react';
import { Camera } from 'react-feather';

import Icon from './Icon';

storiesOf('Icon', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => <Icon icon={Camera} />)
  .add('Styled', () => (
    <Icon icon={Camera} mx="3" color="blues.deepSky" size={5} />
  ));
