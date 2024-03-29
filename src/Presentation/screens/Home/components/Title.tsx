import React from 'react';
import {TextStyled} from '../../../components/Text.styled';
import {Sizes} from '../../../assets/sizes/sizes';
import {Colors} from '../../../assets/colors/colors';
import {CentralizedContainer} from '../../../components/CentralizedContainer.styled';

type TitleProps = {
  children: string;
  testId: string;
};
export default function Title({children, testId}: TitleProps) {
  return (
    <CentralizedContainer>
      <TextStyled
        testID={testId}
        size={Sizes.extraLarge}
        color={Colors.primary}>
        {children}
      </TextStyled>
    </CentralizedContainer>
  );
}
