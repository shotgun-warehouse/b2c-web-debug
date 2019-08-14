import React, { useState } from 'react';
import { OrderQuery_order } from '__genTypes__/OrderQuery';
// @ts-ignore missing types
import branch from 'branch-sdk';
import { CTAButton } from 'components/base/Button';
import { orderDeepLinkParams } from './OrderSMSConfirmation';

const createOrderDeepLink = (
  order: OrderQuery_order,
  callback: (link: string) => void,
) => {
  branch.init(process.env.BRANCH_API_KEY);

  branch.link(orderDeepLinkParams(order), function(err: any, link: string) {
    if (err) {
      console.log('Error creating deep link');
    } else {
      console.log(link);
      callback(link);
    }
  });
};

const OrderDeepLinkButton = ({ order }: { order: OrderQuery_order }) => {
  const [loading, setLoading] = useState(false);
  return (
    <CTAButton
      gradient={['blues.purply', 'pinks.barbie']}
      fontWeight={1}
      fontSize={1}
      mt={3}
      loading={loading}
      onClick={async () => {
        setLoading(true);
        createOrderDeepLink(order, (link: string) => {
          setLoading(false);
          window.open(link, '_blank');
        });
      }}
    >
      OUVRIR MES BILLETS DANS L'APP
    </CTAButton>
  );
};

export default OrderDeepLinkButton;
