  import React, { useEffect } from 'react';
  import '../DogsPrincipal/PrincipalStyle.css';
  import img from '../../assets/imagenes.js';
  import { Link, Router } from 'react-router-dom';

  const Principal = () => {
    const datosMascotas = 
    [
      {
        id: "1",
        img: img.choco,
        name: "Choco",
        edad: "2 años",
        description: 'Soy un precioso perrito de aproximadamente 4 años de edad, soy gordito, expresivo y adorable, realmente encantador, además mi talla mediana a pequeña me permite vivir dentro de casa o departamento. Fui traído a la fundación ya que había vivido fuera de un centro de diversión por mucho tiempo siendo cuidado por los trabajadores del lugar, pero cuando me enfermé a todos les fue imposible seguir cuidando de mi, pero mis amigos de PAE asumieron mi custodia. ¡Ya me encuentro esterilizado!',
      },
      {
        id: "2",
        img: img.trufa,
        name: "Trufa",
        edad: "2 años",
        description: 'Trufa de 2 años aproximadamente, tamaño mediano. Es una preciosa y noble perrita, hermanita perdida de nuestra mamita, la perrita ciega que tanto amamos y ya encontró a su familia para siempre, pero ella mira con normalidad, y es igual de hermosa, noble y encantadora. Fue rescatada de la misma forma, parida tratando de cuidar a sus cachorritos, y ahora espera una familia que no la discrimine por su color sino que mire su potencial de ser la mejor amiga y compañera. Puede vivir dentro de casa con jardín y paseitos frecuentes ya que ama el parque y jugar con otros perritos. 💚Dale una oportunidad, ya se encuentra esterilizada.',
      },
      {
        id: "3",
        img: img.chiki,
        name: "Chiki",
        edad: "2 años",
        description: 'Chiki de aproximadamente 6 añitos de edad, tamaño grande; fue encontrada en una discoteca, aparentemente preñada por lo que se le realizó una ecografía y se descarta preñez. Ella es una perrita muy dulce y cariñosa con vacunitas al día y esterilizada. Si deseas darle una oportunidad sería la perrita más feliz del mundo, ya que ama compartir mucho con nuestro voluntarios. 💚 Dale una oportunidad.',
      },
      {
        id: "4",
        img: img.lola,
        name: "Lola",
        edad: "2 años",
        description: 'LOLA es una tierna perrita de 3 años de edad aproximadamente, tamaño mediano; rescatada en un parque junto a sus tres bebés con apenas días de nacidos. Sus pequeños ya se fueron en adopción pero nuestra hermosa Lola espera ansiosa una linda familia que la cuide y proteja. Se encuentra esterilizada y con vacunitas al día, si deseas darle una nueva oportunidad, estaría muy contenta de ser un nuevo miembro de tu familia, así como fue una excelente madre, será la compañía perfecta💚 Dale un hogar.',
      },
      {
        id: "5",
        img: img.mar,
        name: "Mar",
        edad: "2 años",
        description: 'Soy una bella cachorra de 3 meses de edad aproximadamente. Tamaño mediano. Juguetona y traviesa, muy sociable y enérgica. Me gustan los paseos y relacionarme con otros perros, aunque puedo ser un poco brusca al momento de jugar. Muy segura en ambientes que no conoce. Fui rescatada muy chiquita junto con mis hermanitos en la calle 💚¡Dame la oportunidad de estar a tu lado y hacerte feliz!',
      },
      {
        id: "6",
        img: img.serena,
        name: "Serena",
        edad: "2 años",
        description: 'Soy una hermosa cachorra de 2 meses y medio de edad aproximadamente. Tamaño mediano. Muy dulce y amorosa, como soy muy chiquita, aún estoy desarrollando mi personalidad. Fui rescatada junto a mis hermanitas muy pequeñitas en situación de abandono. Busco una familia que me sepa cuidar y guiar en mis primeros mesecitos con paciencia y mucho cariño. 💚¡Dame la oportunidad de estar a tu lado y compartir nuestra vida!',
      },
      {
        id: "7",
        img: img.Rei,
        name: "Rei",
        edad: "2 años",
        description: 'Soy una guapa cachorra de 2 meses y medio de edad aproximadamente. Tamaño mediano. Muy amable y un poco tímida, como soy muy chiquita, aún estoy desarrollando mi personalidad. Fui rescatada junto a mis hermanitas muy pequeñitas en situación de abandono. Busco una familia que me sepa cuidar y guiar en mis primeros mesecitos con paciencia y mucho cariño. 💚¡Dame la oportunidad de tener la familia que merezco!',
      },
      {
        id: "8",
        img: img.miko,
        name: "Miko",
        edad: "2 años",
        description: 'Soy un lindo cachorro de 2 meses y medio de edad aproximadamente. Tamaño mediano. Travieso y cariñoso, como soy muy chiquito, aún estoy desarrollando mi personalidad. Fui rescatado junto a mis hermanitas muy pequeñitas en situación de abandono. Busco una familia que me sepa cuidar y guiar en mis primeros mesecitos con paciencia y mucho cariño. 💚¡Dame la oportunidad de estar a tu lado para darte muchos besos!',
      },
      {
        id: "9",
        img: img.muchiru,
        name: "Michiru",
        edad: "2 años",
        description: 'Soy una preciosa cachorra de 2 meses y medio de edad aproximadamente. Tamaño mediano. Muy cariñosa y traviesa, como soy muy chiquita, aún estoy desarrollando mi personalidad. Fui rescatada junto a mis hermanitas muy pequeñitas en situación de abandono. Busco una familia que me sepa cuidar y guiar en mis primeros mesecitos con paciencia y mucho cariño. 💚¡Dame la oportunidad de ser parte de tu familia!',
      },
      {
        id: "10",
        img: img.moddy,
        name: "Moddy",
        edad: "2 años",
        description: 'Soy precioso y vivaz cachorrito de 6 meses de edad aproximadamente, tamaño medianito; rescatado de una situación de maltrato, donde vivía en un hogar con condiciones poco adecuadas, sin alimento ni cuidado. Estoy esterilizado y a pesar de no tener un ojito poseo las mismas capacidades que cualquier perrito, pero soy el doble de especial y encantador. Me llevo muy bien con otros animalitos. Perfecto para vivir dentro de una casita o departamento con actividad física regular y si tengo compañeros perritos/as mucho mejor. 💚¡Dame la oportunidad de ser feliz a tu lado!',
      },
      {
        id: "11",
        img: img.loki,
        name: "Loki",
        edad: "2 años",
        description: 'Soy un guapo perrito de 1 año de edad aproximadamente, tamaño grande. Muy cariñoso, activo, enérgico y juguetón. Necesito de tiempo y actividad física frecuente, paseos diarios y una casita con jardín que tenga mucho espacio para jugar y divertirme. Soy muy sociable con personas pero no me llevo bien con gatos💚 Ya me encuentro esterilizado porfis ¡Dame una oportunidad!',
      },
      {
        id: "12",
        img: img.canela,
        name: "Canela",
        edad: "2 años",
        description: 'Soy Canela y necesito un lindo hogar que me ame y cuide para siempre. Tamaño mediano, 1 año y medio de edad aproximadamente. Ya me encuentro esterilizada y con vacunas al día 💚 Dame una oportunidad. Fui rescatada con mis cachorros de un caso de maltrato y mala tenencia, ahora estoy lista para estar a tu lado.',
      },
      {
        id: "13",
        img: img.lucas,
        name: "Lucas",
        edad: "2 años",
        description: 'Soy un cachorro muy activo, tengo 2 meses y medio de edad aproximadamente, seré tamaño mediano-grande; me gusta mucho correr y jugar con otros perritos, soy muy intrépido y amoroso en extremo, así que prepárate para recibir muchos besitos. Soy un aventurero nato y corredor fabuloso. Anímate a adoptarme y vamos por la vida enfrentando retos. 💚¡Dame la oportunidad de tener la familia que merezco!',
      },
      {
        id: "14",
        img: img.maya,
        name: "Maya",
        edad: "2 años",
        description: 'Soy una hermosa cachorra de pelaje atigrado, dos meses y medio de edad aproximadamente, seré tamaño mediano-grande; campeona en todos los juegos con mis hermanos, soy muy decidida a enfrentar cualquier situación en especial a conocer nuevos amigos. Me gustan mucho los peluches y jugar. Me encanta que me sostengan en brazos, dar besitos y morder orejitas. Déjame entrar en tu hogar y en tu corazón. 💚¡Dame una oportunidad!',
      },
      {
        id: "15",
        img: img.samuel,
        name: "Samuel",
        edad: "2 años",
        description: 'De cariño me dicen Sam, soy un cachorrito muy noble y calmado, dos meses y medio de edad aproximadamente, seré tamaño mediano-grande. Tengo unas orejitas muy especiales que son muy expresivas y juguetonas, cambian mucho de acuerdo a como me siento. Soy muy noble y empático con otros perritos y con personas. Me gusta mucho recibir amor y estar en brazos o en los regazos de las personas. Compartamos nuestra vida. 💚¡Dame una oportunidad!',
      },
      {
        id: "16",
        img: img.mermelada,
        name: "Mermelada",
        edad: "2 años",
        description: 'Soy una adorable cachorra de 3 meses de edad; tamaño mediano-grande. Muy amorosa y activa, necesito buenas rutinas de socialización y actividad física frecuente, necesito una familia comprometida con mi tamaño final, en cuanto a espacio, recursos y actividad física. Sociable con otros animalitos y disfruto el cariño y cercanía con las personas. 💚¡Dame la oportunidad de ser feliz a tu lado!',
      },
      {
        id: "17",
        img: img.simon,
        name: "Simón",
        edad: "2 años",
        description: 'Soy un bello perrito de un añito y medio de edad aproximadamente; tamaño mediano-pequeño. Muy tierno y tímido, fui rescatado junto a otros dos animalitos vagando en malas condiciones en un sector periférico de la ciudad. Soy muy dulce y cariñoso, me demoro un poquitín en tomar confianza con las personas pero cuando lo hago soy un compañero muy leal. Puedo vivir en casita o departamento, amo salir de paseo y convivir con otros animalitos 💚 Ya me encuentro esterilizado ¡Dame la oportunidad de tener una familia!',
      },
      {
        id: "18",
        img: img.carlina,
        name: "Carlina",
        edad: "2 años",
        description: 'Soy una guapa perrita de 8 años de edad aproximadamente; tamaño mediano-pequeño. De temperamento noble y llena de cariño. Fui rescatada por la fundación con la intención de ser esterilizada y devolverme a la comunidad en donde era cuidada a medida de las posibilidades de los moradores; sin embargo soy tan hermosa y encantadora que me quedé en la fundación donde soy cuidada de mejor manera mientras encuentro a una nueva familia que decida disfrutar de mi compañía. Soy tranquila y buena compañera, sociable con otros perritos. Puedo vivir dentro de casa con paseos regulares ya que disfruto mucho caminar 💚 Ya me encuentro esterilizada ¡Dame la oportunidad de poder sentir el amor de una familia!',
      },
      {
        id: "19",
        img: img.ronny,
        name: "Ronny",
        edad: "2 años",
        description: 'Soy un precioso perrito de 4 añitos de edad aproximadamente, tamaño pequeño. Fui rescatado en Alausí y perdí a mi familia en ese evento. Me costó relacionarme al principio, pero ahora soy un perrito súper amoroso, juguetón y educado. Me encantan los paseos y conocer nuevos perritos; muy sociable y faldero. Esterilizado y vacunado 💚 Dame una oportunidad, necesito una familia que me ame para siempre.',
      },
      {
        id: "20",
        img: img.jessy,
        name: "Jessy",
        edad: "2 años",
        description: 'Es una cachorrita hermosa de 3 meses de edad aproximadamente, será tamaño grande; muy activa y llena de energía para jugar incansablemente. Fue rescatada porque su familia no tenía los recursos necesarios para mantenerla ni a ella ni a su madre y hermanitas, por eso las entregaron voluntariamente para que su futuro sea mejor💕Necesita una familia con una buena rutina de actividad física y que se comprometa adecuadamente con su educación y socialización, además de una casita con jardín para jugar y disfrutar las tardes soleadas. Sociabiliza bien con otros animalitos y personas 💚 Dale una oportunidad.',
      },
      {
        id: "21",
        img: img.flipper,
        name: "Flipper",
        edad: "3 años",
        description: 'Es un perrito amoroso y vivaz, de solo año y medio de edad aproximadamente. Ama jugar y hacer caminatas con nuestros voluntarios y es sociable con otros animalitos. Por su talla mediana a pequeña puede vivir dentro de casita o departamento y convivir con más animalitos. Ya se encuentra esterilizado 💚 Dale una oportunidad.',
      },
      {
        id: "22",
        img: img.chuchito,
        name: "Chuchito",
        edad: "4 años",
        description: 'Este precioso e indefenso cachorrito de 3 meses de edad fue rescatado aún muy pequeñito vagando en un barrio periférico de la ciudad, en donde suele ser tristemente normal ver animalitos en abandono. Afortunadamente pudimos acogerlo para brindarle un lugar seguro y la oportunidad de ser la alegría de un hogar. Será de tamaño medianito. Con la educación y actividad física adecuados puede vivir dentro de casa o departamento con jardín para jugar. Como cualquier cachorro necesitará paciencia, compromiso y disciplina en sus rutinas para que sea el mejor compañero💚 Dale una oportunidad.',
      },
      {
        id: "23",
        img: img.chiara,
        name: "Chiara",
        edad: "5 años",
        description: 'Es una encantadora perrita de un añito y medio de edad y tamaño pequeñito. Fue rescatada después de sufrir un atropellamiento en el cual lastimosamente perdió su ojito, pero no su ternura y ganas de brindar amor, ni su esperanza de formar parte de una familia que le acompañe y alegre el resto de sus días. Puede tener una rutina muy normal, ya que su otro ojito funciona perfectamente, y es perfecta para vivir dentro de una casita o departamento ya que por su tamaño se podría acoplar a estos espacios. Ama los días soleados y los paseos al parque. Ya se encuentra esterilizada 💚 Dale una oportunidad.',
      },
      {
        id: "24",
        img: img.carlino,
        name: "Carlino",
        edad: "6 años",
        description: 'Es un mimoso y dulce perrito de aproximadamente 2 añitos de edad y talla pequeña, Perfecto para vivir dentro de casa o departamento y ser parte de todas las rutinas; el compañero ideal de paseos y aventuras. Fue rescatado en un hogar donde carecía de cualquier forma de bienestar, y estaba no solo desnutrido sino triste y sin esperanzas. Ahora es un perrito paseador, feliz y sociable. Ya se encuentra esterilizado 💚 Dale una oportunidad.',
      },
  ];

  return (
    <div>
      <header className="header">
        <a href="index.html">
          <img className="header__logo" src={img.logo} alt="Logotipo" />
        </a>
      </header>

      <nav className="navegacion">
      <Link to="/Principal" className="navegacion__enlace navegacion__enlace--activo">
        Inicio
      </Link>
      <Link to="/News" className="navegacion__enlace">
        Noticias
      </Link>
    </nav>
      <main className="contenedor">
        <h1>Tu Encuentro de Mascotas</h1>

        <div className="grid">
          {datosMascotas.map((mascota) => (
            <div key={mascota.id} className="producto">
              <Link
                to={{
                  pathname: "/ScreenPrincipal",
                  search: `?id=${mascota.id}`,
                }}
              >
                <img
                  className="producto__imgn"
                  src={mascota.img}
                  alt={`img ${mascota.name}`}
                />
                <div className="producto__informacion">
                  <p className="producto__nombre">{`${mascota.name}, ${mascota.edad}`}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );

};

  export default Principal;
