import React from 'react';
import WYRHeader from '../WYRHeader';
import HeaderWrapper from '../HeaderWrapper';

class DisplayHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <WYRHeader>Would You Rather?</WYRHeader>
      </HeaderWrapper>
    );
  }
}

export default DisplayHeader;
