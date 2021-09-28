import React, { FC } from 'react';
import styled from 'styled-components';

import Card from '@components/utils/Card';
import { FilteredDataType } from '@root/@types/contentfulTypes';

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const CertificatesList: FC<{ data: FilteredDataType[] }> = ({ data }) => {
  return (
    <ListWrapper>
      {data.map((item) => (
        <Card key={item.id} name={item.name} image={item.image} url={item.url} />
      ))}
    </ListWrapper>
  );
};

export default CertificatesList;
