import { Injectable } from '@angular/core';


@Injectable()
export class PersonajesService {

    private personajes: Personaje[] = [
        {
          nombre: 'Goku',
          nombrejapones: '孫そん悟ご空くう',
          bio: 'Originalmente fue enviado a la Tierra con la misión de conquistarla. Sin embargo, el caer por un barranco recibió un brutal golpe que casi lo mata. Este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freezer. Más tarde, Kacarrot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.',
          img: 'assets/img/goku.png',
          saga: ''
        },
        {
          nombre: 'Vegeta',
          nombrejapones: 'ベジータ四世',
          bio: 'A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, más adelante decide rebelarse ante el Imperio de Freezer y se vuelve un aliado clave para los Guerreros Z, a tal punto que con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar junto a ellos contra las inminentes amenazas. Él, junto a Piccolo, es de los antiguos enemigos de Son Goku que ha evolucionando de ser un villano, a antihéroe, y finalmente a un héroe a lo largo del transcurso de la historia llegando a convertirse en el deuteragonista de la serie.',
          img: 'assets/img/vegeta.png',
          saga: ''
        },
        {
          nombre: 'Son Gohanda',
          nombrejapones: '孫そん悟ご飯はん',
          bio: 'En los principios de Dragon Ball Z, Gohan tenía el pelo largo por atrás, y usaba un sombrero rojo que tenía la esfera del dragón de cuatro estrellas, junto con una túnica amarilla con el Kanji Son (孫) estampada por enfrente, un vestido de una sola pieza de color verde cuyas mangas son de color blanco, y zapatos idénticos a los de su padre. Luego, durante su entrenamiento con Piccolo, Gohan usaba un traje parecido al de Goku, con la diferencia de que tiene el Kanji "Ma" (魔; demonio, insignia de Piccolo) en lugar del símbolo de la tortuga y una espada, hasta que finalmente fue cambiado por un traje similar al de Piccolo.',
          img: 'assets/img/gohan-child1.png',
          saga: '(Saga Saiyans)'
        },
        {
          nombre: 'Son Gohanda',
          nombrejapones: '孫そん悟ご飯はん',
          bio: 'En los principios de Dragon Ball Z, Gohan tenía el pelo largo por atrás, y usaba un sombrero rojo que tenía la esfera del dragón de cuatro estrellas, junto con una túnica amarilla con el Kanji Son (孫) estampada por enfrente, un vestido de una sola pieza de color verde cuyas mangas son de color blanco, y zapatos idénticos a los de su padre. Luego, durante su entrenamiento con Piccolo, Gohan usaba un traje parecido al de Goku, con la diferencia de que tiene el Kanji "Ma" (魔; demonio, insignia de Piccolo) en lugar del símbolo de la tortuga y una espada, hasta que finalmente fue cambiado por un traje similar al de Piccolo.',
          img: 'assets/img/gohan-child2.png',
          saga: '(Saga Freezer)'
        },
        {
          nombre: 'Krillin',
          nombrejapones: 'クリリン',
          bio: 'Es valiente y lleno de recursos, junto con Yamcha, se adaptó a una vida relativamente mas normal que muchos de sus amigos, buscando mujeres en su vida. Está entre los seres humanos más "normales" de sus compañeros, ya que puede ser visto usando ropa casual en los momentos de paz, además de su típico Uniforme de la Escuela Tortuga, además de participar en otras actividades cotidianas y posteriormente conseguirse un trabajo. Como el mejor amigo de Goku, Kurilín fue uno de los pocos en conservar un rol destacado durante la historia, incluso personajes como Yamcha, Tenshinhan, Chaoz, Yajirobe, entre otros, quedaron atrás. En general, Kurilín es un personaje muy valorado en todo Dragon Ball: poderoso, leal y audaz; siendo el segundo personaje con mayor de apariciones en el manga. Asimismo, es el Artista Marcial Terrícola más versátil y experimentando, con un gran arsenal de técnicas tan amplias como los saiyanos, recurriendo a estrategias que pueden llevarlo a vencer a Son Gohan de adulto en forma base durante un entrenamiento.',
          img: 'assets/img/krillin1.png',
          saga: '(Saga Saiyans / Freezer)'
        },
        {
          nombre: 'Krillin',
          nombrejapones: 'クリリン',
          bio: 'En la saga de Boo, a Krillin le crece el pelo negro y lleva varios trajes informales. Cuando se casó con C-18, lleva una camisa naranja de manga corta y botones sueltos, pantalones cortos blancos y sandalias rojas. En el 25º Torneo Mundial de Artes Marciales, aparece por primera vez con un chaleco naranja con una camiseta blanca de manga corta, pantalones cortos de mezclilla verdes con un cinturón marrón en la cintura, calcetines blancos y zapatos marrones.',
          img: 'assets/img/krillin2.png',
          saga: '(Saga Boo)'
        },
        {
          nombre: 'Trunks del futuro',
          nombrejapones: '未来のトランクス',
          bio: 'Este Trunks jamás conoció a su padre, combinado con el hecho de que las desgracias y consecuencias de todo lo que vivió en su futuro apocalíptico, padece de trastorno por estrés postraumático (TEPT), y por tanto suele mostrarse serio, melancólico y reservado. Después de la muerte de su madre, Bulma del Futuro Alternativo, se volvió más sensible, a tal punto que solo personas muy cercanas a él pueden devolverle la ecuanimidad, como es el caso de Mai del Futuro. Cuando logra la calma, es muy comunicativo con cualquiera cerca suyo, y claramente siente un gran orgullo cuando conoce a su padre de la Línea de tiempo del presente, entendiendo por qué su madre se enamoró de él. Cuando finalmente conoce a Vegeta en el pasado, Trunks se ve constantemente tratando de impresionarle, esto a menudo se mezcla con el horror que siente hacia la actitud indiferente de su padre en torno a los que le rodean, especialmente cuando Vegeta se negó a salvar a Bulma y al bebé Trunks cuando el Dr. Gero explotó su nave, forzando a Trunks a salvar a su contraparte actual y a su madre. Trunks también siente un profundo respeto y aprecio por Gohan del Futuro quien fue su mejor amigo y maestro durante el caos desatado por los Androides e incluso siente cierta simpatía por su homólogo del presente, Gohan, quien vive una vida pacífica y pudo formar una familia feliz, algo a lo que Trunks aspira algún día.',
          img: 'assets/img/trunks-futuro.png',
          saga: '(Saga Célula)'
        },
        {
          nombre: 'Piccolo',
          nombrejapones: 'ピッコロ',
          bio: 'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciéndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z. A través del tiempo, también comenzó a tomarle cariño a su discípulo Son Gohan, a quien veía como una especie de "vástago" y formando un lazo de amistad con este.',
          img: 'assets/img/piccolo-z.png',
          saga: ''
        },
        {
          nombre: 'Yamcha',
          nombrejapones: 'ヤムチャ',
          bio: 'Yamcha se caracteriza originalmente como un guerrero empático, algo rudo y astuto pero que teme a nada más que hablar con las mujeres. En cuanto a sus técnicas, por lo general son extraídas de alguien que no tiene las artes marciales en las venas. Sus técnicas son más de un solitario salvaje y más adelante en Dragon Ball Z de su experiencia como jugador retirado de béisbol. No obstante, uno se puede encariñar con él. Es carismático. A ello se debe que sea muy honesto con sus debilidades, y todas sus dificultades y problemas. Es uno de los personajes mejor estructurados en lo que respecta a "Comic relief" en la serie.',
          img: 'assets/img/yamcha.png',
          saga: ''
        },
        {
          nombre: 'Ten Shin Han',
          nombrejapones: '天津飯',
          bio: 'Tenshinhan marcó dos personalidades diferentes, al principio de la historia, era un hombre cruel, presumido y soberbio, que utilizaba el uso de las artes marciales para mal, ideaba planes para robar dinero a las personas. Más tarde se convirtió en un hombre bueno, agradable llegando a usar la fuerza para proteger la Tierra de enemigos más poderosos, en especial protegía mucho a su amigo Chaoz, a quien le tiene un gran aprecio.',
          img: 'assets/img/tenshinhan.png',
          saga: ''
        },
        {
          nombre: 'Chaoz',
          nombrejapones: '餃子 [チャオズ]',
          bio: 'Chaoz es muy tranquilo, pero es muy valiente y se preocupa mucho por su amigo Tenshinhan. Normalmente siempre se lo ve acompañando a Tenshinhan, incluso en ocasiones donde Tenshinhan le dice que es muy peligroso que lo acompañe. También es un poco infantil, como se lo ve en su lucha contra Krilin. Chaoz es un personaje que principalmente se destaca por sus notables habilidades psíquicas y energéticas dado a eso su nivel es superior al resto de los humanos normales. Después del entrenamiento de un año bajo la guía de Kami antes de su batalla con Nappa, su nivel es de 610 unidades de Ki según los rastreadores, y este es su nivel de poder más alto en la franquicia de Dragon Ball. Luego de su muerte entrena junto a Yamcha, Piccolo y Tenshinhan aprendiendo de Kaio donde después de una larga preparación conseguiría derrotar a Gurdo quien poseía un nivel de 13.000 unidades de ki aproximadamente, cabe destacar que esto es un relleno del anime. De acuerdo con la tarjeta de videojuego de Dragon Ball Z Collectible Card Game, el nivel de poder de Chaoz después de ser revivido es de 25.000 unidades, sin embargo, no se específica si se refiere a su poder en el momento en el cual aparecen Mecha Freezer y el Rey Cold o si se trata de su nivel de la Saga de los Androides y Cell En unos niveles que trae la película Super batalla decisiva por el planeta Tierra, el nivel de poder de Chaoz es sólo 130, mientras que el resto de los guerreros Z tienen sus niveles más altos que los que tenían en su pelea con Vegeta y Nappa en la Saga Saiyan. /*Luego de la Saga de Cell, Chaoz entrenó con Tenshinhan durante muchos años eso pudo significar en él un incremento notable en su poder o simplemente un ligero aumento eso aún se desconoce pero se puede especular que sobrepasó a muchos de los Guerreros Z o continuó con un bajo nivel de pelea.',
          img: 'assets/img/chaoz.png',
          saga: ''
        },
        {
          nombre: 'Goten',
          nombrejapones: '孫そん悟ご天てん',
          bio: 'En su infancia, Goten es un niño bondadoso, amante de la diversión y un tanto ingenuo como su padre. También es un poco revoltoso, debido a la influencia de su mejor amigo Trunks y uniéndose a él en muchas de sus travesuras. Entre Trunks y él, es sorprendentemente la voz de la razón, aunque por lo general sigue las ideas del primero. Goten también es muy educado, ya que siempre hace una reverencia antes de enfrentarse a alguien en una pelea. Él admira mucho a su hermano mayor Gohan (además de ser la única persona que en su momento no encontraba vergonzoso el traje de El Gran Saiyaman, pensando que este es "Genial"), aunque tiempo más tarde éste le rechaza a Gohan el traje de El Gran Saiyaman reconociendo que es un traje ridículo.',
          img: 'assets/img/goten.png',
          saga: '(Saga Boo)'
        },
        {
          nombre: 'Trunks niño',
          nombrejapones: 'トランクス',
          bio: 'Cuando niño, Trunks demuestra una personalidad muy parecida a la de Vegeta a quien respeta y ve como modelo a seguir. Está muy orgulloso de su padre y desde temprana edad entrena para ser tan fuerte como él. A pesar de su entrenamiento con Vegeta, aún no domina cosas tan básicas como seguir al enemigo mediante su ki, debido a que prefiere pasar más tiempo con Bulma. Su mejor amigo es Goten y entre ambos disfrutan de entrenamientos, juegos y travesuras, incluso mantienen por algún tiempo el secreto de que pueden convertirse en Super Saiyan. A pesar de tener un año de diferencia, Trunks tiene mayor madurez que Goten y siempre consigue que este le crea y lo siga en sus juegos. En las películas se muestra que le gustaría tener un hermano mayor, asumiendo Tapion el rol por un breve tiempo. Él se niega a respetar a alguien que no le gusta, característica que comparte con su padre, como cuando ve a Goku por primera vez, aunque luego cambia su opinión al verlo transformado en un Super Saiyan. En el Torneo Mundial de las Artes Marciales se le ve igual que su padre, luchando con calma e insultando a su rivales, excepto contra Goten. Muchas veces demuestra su alto conocimiento científico, característica que obtiene de su madre y abuelo. Su comida favorita es carne a la parrilla y disfruta de la las carreras de coches. Debido a que creció en un mundo pacífico y sin preocupaciones, Trunks es muy diferente de su contraparte del futuro. También tienen un poco de diferencias en cuanto a personalidad, mientras que Trunks del presente es presumido y arrogante como su padre, Trunks del Futuro no lo es, siéndolo menos después de la muerte de Bulma del futuro. Otra gran diferencia es que Trunks del Futuro es capaz de ver a través de tácticas enemigas y adaptarse a las estrategias de juego, algo que Trunks del presente no es capaz de hacer en Dragon Ball Z, Dragon Ball Super o Dragon Ball GT.',
          img: 'assets/img/trunks-kid.png',
          saga: '(Saga Boo)'
        },
        {
          nombre: 'Videl',
          nombrejapones: 'ビーデル',
          bio: 'Videl se caracteriza por ser una joven enérgica y tenaz con un enorme sentido de la justicia, reforzado por el hecho de que ayuda a la policía de Ciudad Satán en la lucha contra el crimen con los cuales guarda una estrecha relación. Su relación con su padre es bastante notoria a pesar de que ella vive avergonzada en cierto modo de las locuras de su padre y el hecho de haberle mentido al mundo tras lo ocurrido con Cell. En un principio, a pesar de tener una apariencia inocente y hermosa, presenta una personalidad algo bastante presumida y temperamental, con una actitud arrogante y desafiante, demostrando tener mucha confianza en sí misma, llegando a sentir celos del Gran Saiyaman cuando este comenzó a arrebatarle la resolución de los conflictos en Ciudad Satán. Aunque logró forjar una buena reputación regodeada por la fama, es claramente muy sensible (de hecho llegó a llorar cuando Spopovich estaba dándole una paliza y la tenía al borde de la muerte, hecho que hizo enfurecer bastante a Gohan y también cuando pensó que el propio Gohan había muerto a manos de Majin-Boo). A medida que la trama avanzaba poco a poco ella empieza a cambiar su personalidad, llegando a ser más amable y más educada en más de un sentido. Este gran cambio se debe a que sin darse cuenta comenzó a tomarle cariño a Gohan, quien gracias a su corazón bondadoso y honesto llegó a enamorarse de él. Más tarde se convierte en la esposa de Gohan y madre de Pan. Como esposa de Gohan, ella es mas cariñosa y maternal con todo el mundo. Teniendo un tono más suave en su voz, dejando muy atrás su personalidad caprichosa demostrada al principio de la historia. También demuestra tener una fe extrema en su esposo, como cuando Barry Kahn mostró unas fotos de Gohan siendo besado por Cocoa Amaguri y fingió consolarla, Videl lo insultó, diciendo que era patético, e indicando que Gohan debía haber tenido una razón para hacer lo que hizo. Más tarde, después de que Gohan derrota a Barry Kahn infectado por Watagash, Videl abraza a Gohan y exclama que lo ama.',
          img: 'assets/img/videl.png',
          saga: '(Saga Célula)'
        },
        {
          nombre: 'Mr. Satán',
          nombrejapones: 'ミスター・サタン',
          bio: 'En una primera impresión, se da a conocer como un hombre arrogante, presumido, fanfarrón y manipulador, que tiende a justificar sus debilidades y errores con ocurrencias y pretextos. Muestra cobardía cuando se da cuenta de que su adversario es más fuerte que él. Sin embargo, tiene una gran capacidad de improvisación para salir al paso de situaciones difíciles y en el fondo es un hombre de buen corazón que muestra un gran compromiso para ayudar a los suyos. En una conversación con Videl, Piccolo afirma que pese a no tener poderes, Mr. Satán es reconocido como el campeón mundial por su valentía. Tiene la idea de que las Artes Marciales deben brindar un buen espectáculo al público, por lo cual hace demostraciones de fuerza tales como romper una hilera de ladrillos o arrastrar cuatro autobuses con sus brazos (actos ciertamente increíbles a nivel humano, pero que son ridículos para los Guerreros Z); igualmente, para impresionar a sus fans realiza poses y actitudes propias de la lucha libre profesional. Para los humanos, Mr. Satán es el hombre más poderoso del mundo y prueba de ello es que posee el cinturón que lo proclama como Campeón Mundial de las Artes Marciales. Por tanto, es dueño de un gran carisma y autoridad moral sobre la raza humana y estas virtudes fueron aprovechadas para ayudar a los Guerreros Z en situaciones específicas, y a cambio, recibe todo el crédito de los actos heroicos.',
          img: 'assets/img/mrsatan.png',
          saga: '(Saga Célula)'
        },
        {
          nombre: 'Kaito',
          nombrejapones: '餃子 [チャオズ]',
          bio: 'Son Goku le conoce tras morir por primera vez, en el combate con su hermano Raditz, al encargarle Kami cruzar el camino de la serpiente y entrenarse con Kaiō-sama para prepararse a la llegada de los saiyajin. Tras un largo viaje de más de 100 días, en el que tuvo que recorrer 100.000 kilómetros y hacer una visita al infierno, Son Goku consigue llegar a casa de Kaiō y le pide que le entrene. Pero dado que el joven no especifica en qué disciplina, Kaiō del Norte le hace pasar una prueba en la que tiene que conseguir hacerle reír con un chiste, para demostrar ser merecedor de ello. Una vez superados la prueba y el malentendido, Kaiō del Norte decide entrenar a Son Goku en el tiempo que les queda. Su planeta tiene una fuerza de gravedad, aproximadamente 10 veces superior a la de La Tierra, por lo que su entrenamiento es muy eficaz. Las primeras pruebas que hace pasar a sus discípulos, y por supuesto a Son Goku, son las de conseguir atrapar a Bubbles, y golpear a Gregory con un pesado mazo, para conseguir que se acostumbren a la fuerza de gravedad, y ganen velocidad y resistencia. Cuando Son Goku supera estas pruebas, Kaiō-sama decide entrenarle en técnicas de combate, logrando enseñarle con eficacia el Kaiō Ken y la Genki-dama, dos técnicas de su invención, pero que ni él mismo había conseguido llevar a cabo.',
          img: 'assets/img/kaito.png',
          saga: ''
        }
      ];

    constructor() {

        console.log('Servicio listo para usarse');
    }

    getPersonajes(): Personaje[]{
        return this.personajes;
    }

    getPersonaje( idx: string ){
        return this.personajes[idx];
    }

    buscarPersonajes( termino: string ) {
      const personajesArr: Personaje[] = [];
      termino = termino.toLowerCase();

      for ( let i = 0; i < this.personajes.length; i ++ ){

        const personaje = this.personajes[i];

        const nombre = personaje.nombre.toLowerCase();
        if (nombre.indexOf( termino ) >= 0 ){
          personaje.idx = i;
          personajesArr.push( personaje );
        }
      }

      return personajesArr;
    }

}


export interface Personaje{
    nombre: string;
    nombrejapones: string;
    bio: string;
    img: string;
    saga: string;
    idx?: number;
  }

