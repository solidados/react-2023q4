import { Oval } from 'react-loader-spinner';

function Loader() {
  return (
    <Oval
      wrapperClass=""
      visible
      ariaLabel="oval-loading"
      wrapperStyle={{
        position: 'relative',
        top: '30%',
        left: '50%',
      }}
      height={60}
      width={60}
      color="#08428CD1"
      secondaryColor="#CCE0FFFF"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}

export default Loader;
