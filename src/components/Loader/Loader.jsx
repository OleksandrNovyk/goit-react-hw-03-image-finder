import { Dna } from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <Dna 
        visible={true}
        height="280"
        width="280"
        ariaLabel="dna-loading"
        wrapperStyle={{ position: 'absolute', top: '30%', left: '43%' }}
        wrapperClass="dna-wrapper"
        colors={['#6610f2', '#fd7e14', '#ffc107']}
      />
    </LoaderOverlay>
  );
};
