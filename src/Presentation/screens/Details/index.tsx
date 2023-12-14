import React from 'react';
import {useSelector} from 'react-redux';
import {CharactersRootState} from '../../store/slices/characters.slice';
import {ScreenStyled} from '../../components/Screen.styled';
import {FlexCentralizedContainer} from '../../components/FlexCentralizedContainer.styled';
import {BoxStyled} from '../../components/Box.styled';
import {ImageStyled} from '../../components/Image.styled';
import {TextStyled} from '../../components/Text.styled';
import {RowContainer} from '../../components/RowContainer.styled';
import {Sizes} from '../../assets/sizes/sizes';
import {Weights} from '../../assets/weights/weights';
import {Colors} from '../../assets/colors/colors';
import {ScrollBoxStyled} from '../../components/ScrollBox.styled';

export function Details() {
  const {image, name, type, gender, species, status, location} = useSelector(
    (state: CharactersRootState) =>
      state.charactersReducer.characterDetails.character,
  );
  return (
    <ScreenStyled>
      <FlexCentralizedContainer>
        <ScrollBoxStyled width={400} height={500}>
          <ImageStyled
            height={250}
            width={300}
            source={{uri: image}}
            style={{alignSelf: 'center'}}
          />
          <DetailsLabelDisplay label={'Name'} value={name} />
          <DetailsLabelDisplay label={'Type'} value={type || '-'} />
          <DetailsLabelDisplay label={'Gender'} value={gender || '-'} />
          <DetailsLabelDisplay label={'Species'} value={species} />
          <DetailsLabelDisplay label={'Status'} value={status} />
          <DetailsLabelDisplay label={'Location'} value={location.name} />
        </ScrollBoxStyled>
      </FlexCentralizedContainer>
    </ScreenStyled>
  );
}

type DetailsLabelDisplay = {
  label: string;
  value: string;
};

function DetailsLabelDisplay({label, value}: DetailsLabelDisplay) {
  return (
    <RowContainer style={{marginVertical: 2}}>
      <TextStyled
        size={Sizes.medium}
        weight={Weights.normal}
        color={Colors.text}
        style={{flex: 1}}>
        {label}:
      </TextStyled>
      <TextStyled
        size={Sizes.medium}
        weight={Weights.normal}
        color={Colors.text}
        style={{flex: 1}}>
        {value}
      </TextStyled>
    </RowContainer>
  );
}
