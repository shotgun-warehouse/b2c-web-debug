import React, { useEffect } from 'react';
import { OrderQuery_order } from '__genTypes__/OrderQuery';
// @ts-ignore missing types
import branch from 'branch-sdk';

export const orderDeepLinkParams = (order: OrderQuery_order) => {
  const user = order.user!;

  const connectedWith = user.facebookId ? 'facebook' : 'email';
  const connectId = user.facebookId || user.email;

  return {
    channel: 'shotgun-tickets-sms',
    feature: 'Download Ticket',
    data: {
      mlfn: user.firstName,
      mlcn: connectedWith,
      mlid: connectId,
      link_with_shotgun: order.id,
      order_uuid: order.uuid,
      channel: 'shotgun-tickets-sms',
      sg_source: 'web_ticket',
      sg_campaign: order.event.id,
      custom_message: `Commande ${order.id} confirmée pour ${
        order.event.name
      } 🚀\nClique sur ce lien pour récupérer tes billets sur Shotgun`,
      $og_image_url: order.event.cover,
      $og_title: order.event.name,
    },
  };
};

const sendSMSConfirmation = (order: OrderQuery_order) => {
  branch.init(process.env.BRANCH_API_KEY);

  branch.sendSMS(
    order.phone,
    orderDeepLinkParams(order),
    { make_new_link: true }, // Default: false. If set to true, sendSMS will generate a new link even if one already exists.
    function(err: any) {
      if (err) {
        console.log(`Sorry, something went wrong: ${err}`);
      } else {
        console.log('SMS sent!');
      }
    },
  );
};

const OrderSMSConfirmation = ({ order }: { order: OrderQuery_order }) => {
  useEffect(() => {
    if (order) {
      sendSMSConfirmation(order);
    }
  });

  return <div />;
};

export default OrderSMSConfirmation;
