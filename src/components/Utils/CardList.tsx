import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Card from '@components/Utils/Card';
import { FilteredDataType } from '@root/@types/contentfulTypes';

const ListWrapper = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const listAnimationVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const CertificatesList: FC<{ data: FilteredDataType[] }> = ({ data }) => {
  return (
    <ListWrapper variants={listAnimationVariant} initial="hidden" animate="show">
      {data.map((item) => (
        <Card key={item.id} name={item.name} image={item.image} url={item.url} />
      ))}
    </ListWrapper>
  );
};

export default CertificatesList;
