import { type ThemeColors } from '@ui/theme';
import { useMemo } from 'react';

interface BoxColorProps {
  nameColor: string;
  hexadecimal: string;
}

function BoxColor({ nameColor, hexadecimal }: BoxColorProps): JSX.Element {
  return (
    <li
      style={{
        listStyle: 'none',
        width: '100%',
        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.10)',
        background: 'white',
        borderRadius: 4,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 160,
          background: hexadecimal,
          borderRadius: '4px 4px 0 0',
        }}
      />
      <div style={{ padding: 16, fontSize: 12 }}>
        <div>
          <b>Nombre: </b>
          <span>{nameColor}</span>
        </div>
        <div>
          <b>Valor: </b>
          <span>{hexadecimal}</span>
        </div>
      </div>
    </li>
  );
}

interface ColorListProps {
  id: string;
  colors: Partial<ThemeColors>;
  title: string;
}

function ColorList({ id, colors, title }: ColorListProps): JSX.Element {
  function groupColorsByPrefix(list: Partial<ThemeColors>): string[][][] {
    let prefixHelper = '';
    let indexHelper = -1;

    return Object.entries(list).reduce(
      (acc: any[], color: [string, unknown]): any[] => {
        const [name] = color;
        const x = name.split('-');

        if (x.length > 1) {
          x.pop();
        }

        const prefix = x.join('-');

        if (prefixHelper !== prefix) {
          prefixHelper = prefix;
          indexHelper = indexHelper + 1;
          acc[indexHelper] = [color];
        } else {
          acc[indexHelper].push(color);
        }

        return acc;
      },
      [],
    );
  }

  const groups = useMemo(() => groupColorsByPrefix(colors), [colors]);

  return (
    <section id={id}>
      <h3>{title}</h3>
      {groups.map(group => (
        <ul
          key={`${id}`}
          style={{
            paddingLeft: 0,
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(3,1fr)',
          }}
        >
          {group.map(color => {
            const [nameColor, hexadecimal] = color;
            return (
              <BoxColor
                key={nameColor}
                nameColor={nameColor}
                hexadecimal={hexadecimal}
              />
            );
          })}
        </ul>
      ))}
    </section>
  );
}

export default ColorList;
