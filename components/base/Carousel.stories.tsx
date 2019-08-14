import { storiesOf } from '@storybook/react';
import { Row } from 'components/base/Layout';

import Carousel from './Carousel';
import { EventDetailsQuery_event_artworks } from '__genTypes__/EventDetailsQuery';

export const artworks: EventDetailsQuery_event_artworks[] = [
  {
    __typename: 'Artwork',
    id: '1',
    originalUrl:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    __typename: 'Artwork',
    id: '2',
    originalUrl:
      'https://images.unsplash.com/photo-1454908027598-28c44b1716c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    __typename: 'Artwork',
    id: '3',
    originalUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    __typename: 'Artwork',
    id: '4',
    originalUrl:
      'https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    __typename: 'Artwork',
    id: '5',
    originalUrl:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    __typename: 'Artwork',
    id: '6',
    originalUrl:
      'https://images.unsplash.com/photo-1454908027598-28c44b1716c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    __typename: 'Artwork',
    id: '7',
    originalUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    __typename: 'Artwork',
    id: '8',
    originalUrl:
      'https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];

storiesOf('Carousel', module)
  .addDecorator(story => <Row style={{ padding: '3rem' }}>{story()}</Row>)
  .add('Default', () => <Carousel artworks={artworks} />);
