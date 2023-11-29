import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../PrincipalScreen/Screen.css';
import img from '../../assets/imagenes';

const Screen = () => {

  const [clicked, setClicked] = useState(false);

  const wait = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

  const handleClick = async () => {
    setClicked(true);

    await wait(1000); // Espera la duración de la animación

    setClicked(false);
    alert('Perrito Adoptado!!!');
  };


    const datosMascotas = 
    [
      {
        id: "1",
        img: img.choco,
        name: "Choco",
        edad: " 2 años",
        description: 'Soy un precioso perrito de aproximadamente 4 años de edad, soy gordito, expresivo y adorable, realmente encantador, además mi talla mediana a pequeña me permite vivir dentro de casa o departamento. Fui traído a la fundación ya que había vivido fuera de un centro de diversión por mucho tiempo siendo cuidado por los trabajadores del lugar, pero cuando me enfermé a todos les fue imposible seguir cuidando de mi, pero mis amigos de PAE asumieron mi custodia. ¡Ya me encuentro esterilizado!',
      },
      {
        id: "2",
        img: img.trufa,
        name: "Trufa",
        edad: " 2 años",
        description: 'Trufa de 2 años aproximadamente, tamaño mediano. Es una preciosa y noble perrita, hermanita perdida de nuestra mamita, la perrita ciega que tanto amamos y ya encontró a su familia para siempre, pero ella mira con normalidad, y es igual de hermosa, noble y encantadora. Fue rescatada de la misma forma, parida tratando de cuidar a sus cachorritos, y ahora espera una familia que no la discrimine por su color sino que mire su potencial de ser la mejor amiga y compañera. 💚Dale una oportunidad, ya se encuentra esterilizada.',
      },
      {
        id: "3",
        img: img.chiki,
        name: "Chiki",
        edad: " 2 años",
        description: 'Chiki de aproximadamente 6 añitos de edad, tamaño grande; fue encontrada en una discoteca, aparentemente preñada por lo que se le realizó una ecografía y se descarta preñez. Ella es una perrita muy dulce y cariñosa con vacunitas al día y esterilizada. Si deseas darle una oportunidad sería la perrita más feliz del mundo, ya que ama compartir mucho con nuestro voluntarios. 💚 Dale una oportunidad.',
      },
      {
        id: "4",
        img: img.lola,
        name: "Lola",
        edad: " 2 años",
        description: 'LOLA es una tierna perrita de 3 años de edad aproximadamente, tamaño mediano; rescatada en un parque junto a sus tres bebés con apenas días de nacidos. Sus pequeños ya se fueron en adopción pero nuestra hermosa Lola espera ansiosa una linda familia que la cuide y proteja. Se encuentra esterilizada y con vacunitas al día, si deseas darle una nueva oportunidad, estaría muy contenta de ser un nuevo miembro de tu familia, así como fue una excelente madre, será la compañía perfecta💚 Dale un hogar.',
      },
      {
        id: "5",
        img: img.mar,
        name: "Mar",
        edad: " 2 años",
        description: 'Soy una bella cachorra de 3 meses de edad aproximadamente. Tamaño mediano. Juguetona y traviesa, muy sociable y enérgica. Me gustan los paseos y relacionarme con otros perros, aunque puedo ser un poco brusca al momento de jugar. Muy segura en ambientes que no conoce. Fui rescatada muy chiquita junto con mis hermanitos en la calle 💚¡Dame la oportunidad de estar a tu lado y hacerte feliz!',
      },
      {
        id: "6",
        img: img.serena,
        name: "Serena",
        edad: " 2 años",
        description: 'Soy una hermosa cachorra de 2 meses y medio de edad aproximadamente. Tamaño mediano. Muy dulce y amorosa, como soy muy chiquita, aún estoy desarrollando mi personalidad. Fui rescatada junto a mis hermanitas muy pequeñitas en situación de abandono. Busco una familia que me sepa cuidar y guiar en mis primeros mesecitos con paciencia y mucho cariño. 💚¡Dame la oportunidad de estar a tu lado y compartir nuestra vida!',
      },
      {
        id: "7",
        img: img.Rei,
        name: "Rei",
        edad: " 2 años",
        description: 'Soy una guapa cachorra de 2 meses y medio de edad aproximadamente. Tamaño mediano. Muy amable y un poco tímida, como soy muy chiquita, aún estoy desarrollando mi personalidad. Fui rescatada junto a mis hermanitas muy pequeñitas en situación de abandono. Busco una familia que me sepa cuidar y guiar en mis primeros mesecitos con paciencia y mucho cariño. 💚¡Dame la oportunidad de tener la familia que merezco!',
      },
      {
        id: "8",
        img: img.miko,
        name: "Miko",
        edad: " 2 años",
        description: 'Soy un lindo cachorro de 2 meses y medio de edad aproximadamente. Tamaño mediano. Travieso y cariñoso, como soy muy chiquito, aún estoy desarrollando mi personalidad. Fui rescatado junto a mis hermanitas muy pequeñitas en situación de abandono. Busco una familia que me sepa cuidar y guiar en mis primeros mesecitos con paciencia y mucho cariño. 💚¡Dame la oportunidad de estar a tu lado para darte muchos besos!',
      },
      {
        id: "9",
        img: img.muchiru,
        name: "Michiru",
        edad: " 2 años",
        description: 'Soy una preciosa cachorra de 2 meses y medio de edad aproximadamente. Tamaño mediano. Muy cariñosa y traviesa, como soy muy chiquita, aún estoy desarrollando mi personalidad. Fui rescatada junto a mis hermanitas muy pequeñitas en situación de abandono. Busco una familia que me sepa cuidar y guiar en mis primeros mesecitos con paciencia y mucho cariño. 💚¡Dame la oportunidad de ser parte de tu familia!',
      },
      {
        id: "10",
        img: img.moddy,
        name: "Moddy",
        edad: " 2 años",
        description: 'Soy precioso y vivaz cachorrito de 6 meses de edad aproximadamente, tamaño medianito; rescatado de una situación de maltrato, donde vivía en un hogar con condiciones poco adecuadas, sin alimento ni cuidado. Estoy esterilizado y a pesar de no tener un ojito poseo las mismas capacidades que cualquier perrito, pero soy el doble de especial y encantador. Me llevo muy bien con otros animalitos. Perfecto para vivir dentro de una casita o departamento con actividad física regular y si tengo compañeros perritos/as mucho mejor. 💚¡Dame la oportunidad de ser feliz a tu lado!',
      },
      {
        id: "11",
        img: img.loki,
        name: "Loki",
        edad: " 2 años",
        description: 'Soy un guapo perrito de 1 año de edad aproximadamente, tamaño grande. Muy cariñoso, activo, enérgico y juguetón. Necesito de tiempo y actividad física frecuente, paseos diarios y una casita con jardín que tenga mucho espacio para jugar y divertirme. Soy muy sociable con personas pero no me llevo bien con gatos💚 Ya me encuentro esterilizado porfis ¡Dame una oportunidad!',
      },
      {
        id: "12",
        img: img.canela,
        name: "Canela",
        edad: " 2 años",
        description: 'Soy Canela y necesito un lindo hogar que me ame y cuide para siempre. Tamaño mediano, 1 año y medio de edad aproximadamente. Ya me encuentro esterilizada y con vacunas al día 💚 Dame una oportunidad. Fui rescatada con mis cachorros de un caso de maltrato y mala tenencia, ahora estoy lista para estar a tu lado.',
      },
      {
        id: "13",
        img: img.lucas,
        name: "Lucas",
        edad: " 2 años",
        description: 'Soy un cachorro muy activo, tengo 2 meses y medio de edad aproximadamente, seré tamaño mediano-grande; me gusta mucho correr y jugar con otros perritos, soy muy intrépido y amoroso en extremo, así que prepárate para recibir muchos besitos. Soy un aventurero nato y corredor fabuloso. Anímate a adoptarme y vamos por la vida enfrentando retos. 💚¡Dame la oportunidad de tener la familia que merezco!',
      },
      {
        id: "14",
        img: img.maya,
        name: "Maya",
        edad: " 2 años",
        description: 'Soy una hermosa cachorra de pelaje atigrado, dos meses y medio de edad aproximadamente, seré tamaño mediano-grande; campeona en todos los juegos con mis hermanos, soy muy decidida a enfrentar cualquier situación en especial a conocer nuevos amigos. Me gustan mucho los peluches y jugar. Me encanta que me sostengan en brazos, dar besitos y morder orejitas. Déjame entrar en tu hogar y en tu corazón. 💚¡Dame una oportunidad!',
      },
      {
        id: "15",
        img: img.samuel,
        name: "Samuel",
        edad: " 2 años",
        description: 'De cariño me dicen Sam, soy un cachorrito muy noble y calmado, dos meses y medio de edad aproximadamente, seré tamaño mediano-grande. Tengo unas orejitas muy especiales que son muy expresivas y juguetonas, cambian mucho de acuerdo a como me siento. Soy muy noble y empático con otros perritos y con personas. Me gusta mucho recibir amor y estar en brazos o en los regazos de las personas. Compartamos nuestra vida. 💚¡Dame una oportunidad!',
      },
      {
        id: "16",
        img: img.mermelada,
        name: "Mermelada",
        edad: " 2 años",
        description: 'Soy una adorable cachorra de 3 meses de edad; tamaño mediano-grande. Muy amorosa y activa, necesito buenas rutinas de socialización y actividad física frecuente, necesito una familia comprometida con mi tamaño final, en cuanto a espacio, recursos y actividad física. Sociable con otros animalitos y disfruto el cariño y cercanía con las personas. 💚¡Dame la oportunidad de ser feliz a tu lado!',
      },
      {
        id: "17",
        img: img.simon,
        name: "Simón",
        edad: " 2 años",
        description: 'Soy un bello perrito de un añito y medio de edad aproximadamente; tamaño mediano-pequeño. Muy tierno y tímido, fui rescatado junto a otros dos animalitos vagando en malas condiciones en un sector periférico de la ciudad. Soy muy dulce y cariñoso, me demoro un poquitín en tomar confianza con las personas pero cuando lo hago soy un compañero muy leal. Puedo vivir en casita o departamento, amo salir de paseo y convivir con otros animalitos 💚 Ya me encuentro esterilizado ¡Dame la oportunidad de tener una familia!',
      },
      {
        id: "18",
        img: img.carlina,
        name: "Carlina",
        edad: " 2 años",
        description: 'Soy una guapa perrita de 8 años de edad aproximadamente; tamaño mediano-pequeño. De temperamento noble y llena de cariño. Fui rescatada por la fundación con la intención de ser esterilizada y devolverme a la comunidad en donde era cuidada a medida de las posibilidades de los moradores; sin embargo soy tan hermosa y encantadora que me quedé en la fundación donde soy cuidada de mejor manera 💚 Ya me encuentro esterilizada ¡Dame la oportunidad de poder sentir el amor de una familia!',
      },
      {
        id: "19",
        img: img.ronny,
        name: "Ronny",
        edad: " 2 años",
        description: 'Soy un precioso perrito de 4 añitos de edad aproximadamente, tamaño pequeño. Fui rescatado en Alausí y perdí a mi familia en ese evento. Me costó relacionarme al principio, pero ahora soy un perrito súper amoroso, juguetón y educado. Me encantan los paseos y conocer nuevos perritos; muy sociable y faldero. Esterilizado y vacunado 💚 Dame una oportunidad, necesito una familia que me ame para siempre.',
      },
      {
        id: "20",
        img: img.jessy,
        name: "Jessy",
        edad: " 2 años",
        description: 'Es una cachorrita hermosa de 3 meses de edad aproximadamente, será tamaño grande; muy activa y llena de energía para jugar incansablemente. Fue rescatada porque su familia no tenía los recursos necesarios para mantenerla ni a ella ni a su madre y hermanitas, por eso las entregaron voluntariamente para que su futuro sea mejor💕Necesita una familia con una buena rutina de actividad física y que se comprometa adecuadamente con su educación y socialización, además de una casita con jardín para jugar y disfrutar las tardes soleadas. Sociabiliza bien con otros animalitos y personas 💚 Dale una oportunidad.',
      },
      {
        id: "21",
        img: img.flipper,
        name: "Flipper",
        edad: " 3 años",
        description: 'Es un perrito amoroso y vivaz, de solo año y medio de edad aproximadamente. Ama jugar y hacer caminatas con nuestros voluntarios y es sociable con otros animalitos. Por su talla mediana a pequeña puede vivir dentro de casita o departamento y convivir con más animalitos. Ya se encuentra esterilizado 💚 Dale una oportunidad.',
      },
      {
        id: "22",
        img: img.chuchito,
        name: "Chuchito",
        edad: " 4 años",
        description: 'Este precioso e indefenso cachorrito de 3 meses de edad fue rescatado aún muy pequeñito vagando en un barrio periférico de la ciudad, en donde suele ser tristemente normal ver animalitos en abandono. Afortunadamente pudimos acogerlo para brindarle un lugar seguro y la oportunidad de ser la alegría de un hogar. Será de tamaño medianito. Con la educación y actividad física adecuados puede vivir dentro de casa o departamento con jardín para jugar. Como cualquier cachorro necesitará paciencia, compromiso y disciplina en sus rutinas para que sea el mejor compañero💚 Dale una oportunidad.',
      },
      {
        id: "23",
        img: img.chiara,
        name: "Chiara",
        edad: " 5 años",
        description: 'Es una encantadora perrita de un añito y medio de edad y tamaño pequeñito. Fue rescatada después de sufrir un atropellamiento en el cual lastimosamente perdió su ojito, pero no su ternura y ganas de brindar amor, ni su esperanza de formar parte de una familia que le acompañe y alegre el resto de sus días. Puede tener una rutina muy normal, ya que su otro ojito funciona perfectamente, y es perfecta para vivir dentro de una casita o departamento ya que por su tamaño se podría acoplar a estos espacios. Ama los días soleados y los paseos al parque. Ya se encuentra esterilizada 💚 Dale una oportunidad.',
      },
      {
        id: "24",
        img: img.carlino,
        name: "Carlino",
        edad: " 6 años",
        description: 'Es un mimoso y dulce perrito de aproximadamente 2 añitos de edad y talla pequeña, Perfecto para vivir dentro de casa o departamento y ser parte de todas las rutinas; el compañero ideal de paseos y aventuras. Fue rescatado en un hogar donde carecía de cualquier forma de bienestar, y estaba no solo desnutrido sino triste y sin esperanzas. Ahora es un perrito paseador, feliz y sociable. Ya se encuentra esterilizado 💚 Dale una oportunidad.',
      },
  ];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  // Buscar la mascota correspondiente en tus datos
  const mascotaSeleccionada = datosMascotas.find((mascota) => mascota.id === id);

  if (!mascotaSeleccionada) {
    // Si no se encuentra la mascota, puedes manejarlo según tus necesidades (por ejemplo, redirigir a la página de inicio)
    return (
      <div>
        <p>Mascota no encontrada</p>
      </div>
    );
  }

  const { img: imagen, name: nombre, edad, description } = mascotaSeleccionada;

  return (
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '417px',
        height: '707px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '11px',
        overflow: 'hidden'
      }}>
        <img style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '11px'
        }} src={imagen} alt="Descripción de la imagen" />

      <div style={{
        width: 417,
        height: 439,
        position: 'absolute',
        background: 'white',
        borderRadius: 33
      }} />

<div style={{
  position: 'absolute',
  left: '50%',
  top: '56%',  // Ajustado para centrar verticalmente
  transform: 'translate(-50%, -50%)',
  width: '372.30px',
  minHeight: '50px',  // Establecido como minHeight en lugar de height
  backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Fondo negro con 70% de opacidad
  borderRadius: '10px',  // Bordes redondeados
  padding: '10px',  // Añadir espacio alrededor del texto
  boxSizing: 'border-box',  // Incluir padding en el tamaño total
  overflow: 'hidden',  // Evitar que el fondo se extienda más allá del cuadro
  color: 'rgba(255, 255, 255, 0.9)',  // Color de texto blanco con 90% de opacidad
  fontSize: '20px',
  fontFamily: 'Ropa Sans',
  fontWeight: '400',
  wordWrap: 'break-word',
  textOverflow: 'ellipsis'
}}>
  {description}
</div>



      <div style={{
        width: 63.51,
        height: 60.81,
        left: 500.73,
        top: 35,
        position: 'absolute'
      }}>
        <img
          style={{
            width: '55%',
            height: '55%',
            top: '400',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
          src={img.dog}
          alt="Descripción de la imagen"
        />
      </div>

      <div style={{
  width: '260.61px',
  height: '44.03px',
  left: '91.94px',  // Movido 3 pixeles a la derecha
  top: '112px',
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Fondo negro con 30% de opacidad
  borderRadius: '10px',  // Bordes redondeados
  padding: '0px',  // Añadir espacio alrededor del texto
  boxSizing: 'border-box',  // Incluir padding en el tamaño total
  color: 'rgba(255, 255, 255, 0.9)',  // Color de texto blanco con 90% de opacidad
  fontSize: '36px',
  fontFamily: 'Roboto',
  fontWeight: '700',
  wordWrap: 'break-word'
}}>
  {nombre}{edad}
</div>


      <div style={{
        //comida caja
        width: 82.12,
        height: 78.63,
        left: 27.94,
        top:30 ,
        position: 'absolute',
        background: '#EEEEEE',
        borderRadius: 9999
      }} />
      <div style={{
        width: 82.12,
        height: 78.63,
        left: 125.25,
        top: 30,
        position: 'absolute',
        background: 'white',
        borderRadius: 9999,
        border: '1px #EEEEEE solid'
      }} />
      <div style={{
        width: 82.12,
        height: 78.63,
        left: 221.56,
        top: 30,
        position: 'absolute',
        background: 'white',
        borderRadius: 9999,
        border: '1px #EEEEEE solid'
      }} />
      <div style={{
        //codigo patita
        width: 82.12,
        height: 78.63,
        left: 320.88,
        top: 35,
        position: 'absolute',
        background: 'white',
        borderRadius: 9999,
        border: '1px #EEEEEE solid'
      }} />

      <div style={{
        width: 53.65,
        height: 51.37,
        left: 43.18,
        top: 45,
        position: 'absolute'
      }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
          src={img.comida}
          alt="Descripción de la imagen"
        />
      </div>

      <div style={{
        width: 53.48,
        height: 51.20,
        left: 333.11,
        top: 45,
        position: 'absolute'
      }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '20%',
            objectFit: 'cover'
          }}
          src={img.patita}
          alt="Descripción de la imagen"
        />
      </div>

      <div style={{
      width: 47.08,
      height: 45.08,
      left: 239.08,
      top: 45,
      position: 'absolute'
    }}>
      <img
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '20%', 
          objectFit: 'cover'
        }}
        src={img.home}
        alt="Descripción de la imagen"
      />
    </div>

      <div style={{
      width: 55.47,
      height: 49.28,
      left: 138.58,
      top: 45,
      position: 'absolute'
      }}>
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        src={img.doctor}
        alt="Descripción de la imagen"
      />
    </div>
      <div style={{
        width: 255.13,
        height: 69.20,
        left: 141.26,
        top: 634,
        position: 'absolute',
        background: 'white',
        borderRadius: 32,
        border: '1px black solid'
      }} />
      
      <button
      onClick={handleClick}
      style={{
        width: '246.38px',
        height: '69.20px',
        left: clicked ? '130.47px' : '30.47px',  // Se desplaza a la derecha cuando se hace clic
        top: '634px',
        position: 'absolute',
        background: 'black',
        borderRadius: '32px',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        transition: 'left 0.5s ease'  // Agrega una transición suave al cambio de posición
      }}
    >
      <div style={{
        width: '110.60px',
        height: '25.16px',
        color: 'white',
        fontSize: '22px',
        fontFamily: 'Ropa Sans',
        fontWeight: '400',
        wordWrap: 'break-word',
        textAlign: 'center',
        lineHeight: '25.16px',
        marginLeft: '20px'
      }}>
        Adoptame!!
      </div>
    </button>



      <div style={{
        width: 43.80,
        height: 41.94,
        left: 325.21,
        top: 652.13,
        position: 'absolute'
      }}>
        <div style={{
          width: 31.75,
          height: 25.73,
          left: 7.66,
          top: 8.47,
          position: 'absolute'
        }}>
        </div>
      </div>
    </div>
  );
};

export default Screen;