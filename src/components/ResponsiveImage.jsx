import React from 'react';
import styled from 'styled-components';

const Responsiveimage = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
`;

const Image = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ResponsiveImage = ({ src, alt, width, height }) => {
  return (
    <Responsiveimage style={{ width }}>
      <div style={{ paddingBottom: (height / width) * 100 + '%' }}>
        <Image src={src} alt={alt} />
      </div>
    </Responsiveimage>
  );
};

export default ResponsiveImage;
