import shadows from '@ui/theme/shadows';

function ShadowList(): JSX.Element {
  return (
    <ul
      style={{
        display: 'grid',
        gap: 24,
        gridTemplateColumns: 'repeat(3,1fr)',
        padding: 0,
      }}
    >
      {Object.entries(shadows).map(([name, value], i) => {
        return (
          <li
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              boxShadow: value,
              background: 'white',
              borderRadius: 4,
              aspectRatio: 1,
            }}
          >
            <div style={{ padding: 16, fontSize: 12 }}>
              <div>
                <b>Nombre: </b>
                <span>{name}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ShadowList;
