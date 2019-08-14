import { storiesOf } from '@storybook/react';
import Image from './Image';

storiesOf('Image', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Default', () => (
    <Image
      src="https://d1yyfrhejvllsj.cloudfront.net/artworks/artworks/5ffd9993866382db6897c7709c5d32c5b49e3e03.?1561467348"
      width={'100%'}
    />
  ));
