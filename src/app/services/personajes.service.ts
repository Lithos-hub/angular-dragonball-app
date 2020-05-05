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
          nombrejapones:'孫そん悟ご飯はん',
          bio: 'En los principios de Dragon Ball Z, Gohan tenía el pelo largo por atrás, y usaba un sombrero rojo que tenía la esfera del dragón de cuatro estrellas, junto con una túnica amarilla con el Kanji Son (孫) estampada por enfrente, un vestido de una sola pieza de color verde cuyas mangas son de color blanco, y zapatos idénticos a los de su padre. Luego, durante su entrenamiento con Piccolo, Gohan usaba un traje parecido al de Goku, con la diferencia de que tiene el Kanji "Ma" (魔; demonio, insignia de Piccolo) en lugar del símbolo de la tortuga y una espada, hasta que finalmente fue cambiado por un traje similar al de Piccolo.',
          img: 'assets/img/gohan-child2.png',
          saga: '(Saga Freezer)'
        },
        {
          nombre: 'Krillin',
          nombrejapones: 'クリリン',
          bio: 'Es valiente y lleno de recursos, junto con Yamcha, se adaptó a una vida relativamente mas normal que muchos de sus amigos, buscando mujeres en su vida. Está entre los seres humanos más "normales" de sus compañeros, ya que puede ser visto usando ropa casual en los momentos de paz, además de su típico Uniforme de la Escuela Tortuga, además de participar en otras actividades cotidianas y posteriormente conseguirse un trabajo. Como el mejor amigo de Goku, Kurilín fue uno de los pocos en conservar un rol destacado durante la historia, incluso personajes como Yamcha, Tenshinhan, Chaoz, Yajirobe, entre otros, quedaron atrás. En general, Kurilín es un personaje muy valorado en todo Dragon Ball: poderoso, leal y audaz; siendo el segundo personaje con mayor de apariciones en el manga. Asimismo, es el Artista Marcial Terrícola más versátil y experimentando, con un gran arsenal de técnicas tan amplias como los saiyanos, recurriendo a estrategias que pueden llevarlo a vencer a Son Gohan de adulto en forma base durante un entrenamiento.',
          img: 'assets/img/krillin1.png',
          saga: ''
        },
        {
          nombre: 'Krillin',
          nombrejapones: 'クリリン',
          bio: 'Es valiente y lleno de recursos, junto con Yamcha, se adaptó a una vida relativamente mas normal que muchos de sus amigos, buscando mujeres en su vida. Está entre los seres humanos más "normales" de sus compañeros, ya que puede ser visto usando ropa casual en los momentos de paz, además de su típico Uniforme de la Escuela Tortuga, además de participar en otras actividades cotidianas y posteriormente conseguirse un trabajo. Como el mejor amigo de Goku, Kurilín fue uno de los pocos en conservar un rol destacado durante la historia, incluso personajes como Yamcha, Tenshinhan, Chaoz, Yajirobe, entre otros, quedaron atrás. En general, Kurilín es un personaje muy valorado en todo Dragon Ball: poderoso, leal y audaz; siendo el segundo personaje con mayor de apariciones en el manga. Asimismo, es el Artista Marcial Terrícola más versátil y experimentando, con un gran arsenal de técnicas tan amplias como los saiyanos, recurriendo a estrategias que pueden llevarlo a vencer a Son Gohan de adulto en forma base durante un entrenamiento.',
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
          bio: 'Chaoz es muy tranquilo, pero es muy valiente y se preocupa mucho por su amigo Tenshinhan. Normalmente siempre se lo ve acompañando a Tenshinhan, incluso en ocasiones donde Tenshinhan le dice que es muy peligroso que lo acompañe. También es un poco infantil, como se lo ve en su lucha contra Krilin.',
          img: 'assets/img/chaoz.png',
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

        let personaje = this.personajes[i];

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

