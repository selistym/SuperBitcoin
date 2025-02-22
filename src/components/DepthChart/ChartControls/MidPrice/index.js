import React, { memo, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { compose, withProps } from 'recompose';

import { STORE_KEYS } from '@/stores';
import { format2DigitString } from '@/utils';

import { Price, Label } from './styles';

const MidPrice = memo(({ price, quoteSymbol }) => (
    <Fragment>
        <Label>Mid Price</Label>
        <Price>{`${quoteSymbol}${format2DigitString(price, 6)}`}</Price>
    </Fragment>
));

const withStore = compose(
    inject(STORE_KEYS.ORDERBOOKBREAKDOWN),
    observer,
    withProps(({ [STORE_KEYS.ORDERBOOKBREAKDOWN]: { MidPrice } }) => ({
        price: MidPrice,
    }))
);

export default withStore(MidPrice);
