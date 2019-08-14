import React from 'react';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';

const Map = ({ lat, lng }: { lat: number; lng: number }) => (
  <YMaps query={{ lang: 'en_US' }}>
    <YMap
      defaultState={{ center: [lat, lng], zoom: 12, controls: [] }}
      width="100%"
    >
      <Placemark
        geometry={[lat, lng]}
        options={{
          iconLayout: 'default#image',
          iconImageHref:
            'https://d1yyfrhejvllsj.cloudfront.net/b2c-web/icons/map-pin-copy@2x.png',
          iconImageSize: [30, 36],
        }}
      />
    </YMap>
  </YMaps>
);

export default Map;
