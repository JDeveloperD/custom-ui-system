import { type PropsWithChildren, type CSSProperties } from 'react';
import spaces from '@ui/theme/spaces';

interface BoxProps {
  space: number;
  border: {
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
    left?: boolean;
    all?: boolean;
  };
}

function Box({
  border,
  space,
  children,
}: PropsWithChildren<BoxProps>): JSX.Element {
  const borderStyle = `${space}px solid rgba(230, 55, 128, 0.35)`;
  let style: CSSProperties = {};

  const appendStyled = (property: keyof CSSProperties): void => {
    style = {
      ...style,
      [property]: borderStyle,
    };
  };

  if (border.top) appendStyled('borderTop');
  if (border.left) appendStyled('borderLeft');
  if (border.right) appendStyled('borderRight');
  if (border.bottom) appendStyled('borderBottom');
  if (border.all) appendStyled('border');

  console.log(style);
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: 200,
        height: 200,
        background: '#F8F8F8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.10)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SpaceItem({
  space,
  index,
}: {
  space: number;
  index: number;
}): JSX.Element {
  return (
    <div style={{ display: 'flex', marginBottom: 12 }}>
      <div style={{ width: 30 }}>{index}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div
          style={{
            display: 'inline-block',
            width: space,
            height: 20,
            background: '#E63780',
            opacity: 0.34,
          }}
        />
        {space}px
      </div>
    </div>
  );
}

function LayoutSystemIntroSection(): JSX.Element {
  return (
    <>
      <section>
        <p>
          El Sistema de Diseño de la Interfaz de Usuario Phoenix responde a las
          necesidades de los diseñadores para crear interfaces de usuario
          consistentes y comunicar mejor la identidad de marca de Phoenix. Las
          siguientes pautas ayudarán a los diseñadores a alinear sus diseños y
          mantener una coherencia en todos los puntos de contacto utilizando los
          mismos ejes y métricas. En Phoenix utilizamos la siguiente
          terminología para describir nuestro sistema de diseño de la interfaz
          de usuario.
        </p>
        <ul>
          <li>
            <h4>Área de contenido</h4>
            <p>
              El área de contenido está definida por el tamaño del margen de la
              página, que lo separa de los lados izquierdo y derecho de la
              página.
            </p>
          </li>
          <li>
            <h4>Sistema de espaciado</h4>
            <p>
              Dentro de una región de diseño, puedes colocar elementos
              utilizando el sistema de espaciado para definir las distancias
              entre ellos.
            </p>
          </li>
          <li>
            <h4>Región de diseño</h4>
            <p>
              La mayoría de los componentes se colocan dentro de una región de
              diseño, que generalmente se extiende hasta el ancho completo del
              área de contenido.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Sistema de espaciado</h2>
        <p>
          El espaciado ayuda a que los componentes de la página respiren. El
          sistema de espaciado de Audi utiliza una serie de espaciadores
          responsivos que se adaptan dinámicamente en diferentes puntos de
          quiebre. Esto permite que la información en la página se adapte a
          cualquier tamaño de pantalla.
        </p>

        <h3>Guía de espaciado</h3>
        <p>
          Son multifuncionales y se pueden utilizar tanto para mediciones
          apiladas (stack) como en línea (inline), o combinarse para crear
          mediciones de inserción (inset).
        </p>
        <div
          style={{
            display: 'grid',
            gap: 24,
            marginBottom: 24,
            gridTemplateColumns: 'repeat(4,1fr)',
          }}
        >
          {spaces.map((space, index) => {
            if (space > 0) {
              return <SpaceItem key={space} space={space} index={index} />;
            }
            return null;
          })}
        </div>

        <h3>Ejemplos de implementación</h3>
        <p></p>
        <div
          style={{
            display: 'grid',
            gap: 24,
            marginBottom: 24,
            gridTemplateColumns: 'repeat(4,1fr)',
          }}
        >
          <Box border={{ all: true }} space={spaces[4]}>
            padding, p={4}
          </Box>
          <Box border={{ top: true, bottom: true }} space={spaces[4]}>
            paddingY, py={4}
          </Box>
          <Box border={{ left: true, right: true }} space={spaces[4]}>
            paddingX, px={4}
          </Box>
          <Box border={{ top: true }} space={spaces[4]}>
            paddingTop, pt={4}
          </Box>
          <Box border={{ bottom: true }} space={spaces[4]}>
            paddingBottom, pb={4}
          </Box>
          <Box border={{ left: true }} space={spaces[4]}>
            paddingLeft, pl={4}
          </Box>
          <Box border={{ right: true }} space={spaces[4]}>
            paddingRight, pr={4}
          </Box>
        </div>
      </section>
    </>
  );
}

export default LayoutSystemIntroSection;
