import { Oval } from 'react-loader-spinner';

function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Oval
          visible
          ariaLabel="oval-loading"
          height={60}
          width={60}
          strokeWidth={2}
          strokeWidthSecondary={2}
          color="#08428CD1"
          secondaryColor="#CCE0FFFF"
        />
      </div>
    </div>
  );
}

export default Loader;
