import React from 'react';

import { Cell } from '../../Cells/commonStyles';

import { Button } from './styles';

const ExchangeHeader = ({ onClick, text, cellWidth }) => (
    <Cell cellWidth={cellWidth}>
        <Button onClick={onClick}>{text}</Button>
    </Cell>
);

export default ExchangeHeader;
