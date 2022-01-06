const productos =[
    {   id: 1,
        name : 'rell',
        img : '../static/rell.jpg', 
        year : '2020',
        price : 6300,
        description: 'producto de brutales experimentos realizados por la Rosa Negra, Rell es un arma viviente rebelde con la firme determinación de acabar con Noxus. Su infancia estuvo llena de miseria y horror. Tuvo que soportar procedimientos atroces para perfeccionar y convertir en un arma mortal su control mágico del metal… hasta que huyó violentamente, matando a muchos de sus captores en el proceso. Considerada ahora una criminal, Rell ataca a cualquier soldado noxiano que se cruce en su camino, mientras busca sobrevivientes de su antigua academia, defiende a los débiles y da una muerte despiadada a sus antiguos instructores.',
        

    } ,

    {   id: 2,
        name : 'leona',
        img : '../static/leona.jpg',
        year: '2011',
        price: 4800,
        description: 'imbuida del fuego del sol, Leona es una guerrera sagrada de los Solari que defiende el Monte Targon con su Hoja del cénit y su Escudo del amanecer. Su piel brilla como las estrellas y sus ojos resplandecen con el poder del aspecto celestial de su interior. Con su armadura de oro y con el peso de una terrible carga de conocimiento ancestral, Leona otorga la iluminación a unos y la muerte a otros.',
        
    } ,

    {   id: 3,
        name : 'nami ',
        img : '../static/nami.jpg',
        year : 2012,
        price : 4800, 
        description: 'nami, una joven y testaruda vastaya marina, fue la primera de la tribu marai en abandonar las olas y aventurarse en tierra firme cuando se rompió el ancestral acuerdo de su tribu con los targonianos. A falta de otra opción, Nami se encargó de completar el ritual sagrado que garantizaría el bienestar de su pueblo. En medio del caos de esta nueva era, Nami se enfrenta a un futuro incierto con agallas y determinación, utilizando su bastón de invocadora de mareas para canalizar la fuerza de los mismos océanos.',
        
    } ,
    
    {   id: 4,
        name : 'lulu',
        img : '../staic/lulu.jpg',
        year: 2012,
        price : 4800,
        description: 'lulu, la yordle maga, es conocida por invocar ilusiones oníricas y criaturas imaginarias en sus viajes por Runaterra con su hada compañera, Pix. Lulu le da forma a la realidad a su antojo, transforma el tejido del mundo y de lo que ve como los límites de este reino físico y mundano. Aunque otros consideran su magia poco natural, como mucho, y peligrosa, como poco, ella cree que a todo el mundo le vendría bien un toque de encanto.Es el período Taisho en Japón. Tanjiro, un niño de buen corazón que se gana la vida vendiendo carbón vegetal, encuentra a su familia asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente, se ha transformado ella misma en un demonio. Aunque devastado por esta triste realidad, Tanjiro decide convertirse en un "asesino de demonios" para poder convertir a su hermana en un humano y matar al demonio que masacró a su familia.',
    },

    {   id: 5,
        name: 'senna',
        img : '../static/senna.jpg',
        year: 2019,
        price: 6300,
        description: 'maldita desde que era apenas una niña y perseguida por la Niebla Negra, Senna se unió a una orden sagrada conocida como los Centinelas de la Luz y pasó años luchando sin descanso hasta que fue asesinada y encerrada en el interior de la linterna del cruel espectro conocido como Thresh. Se negó a perder la esperanza y, en el interior de su prisión, aprendió a servirse de la Niebla para regresar al mundo de los vivos, cambiada para siempre. Ahora, armada con luz y oscuridad, Senna busca la forma de poner fin a la Niebla Negra y hacer que se vuelva contra sí misma. Con cada disparo de su arma reliquia, le otorga el descanso eterno a las almas que agonizan en su interior.'
    },

    {   id: 6,
        name : 'soraka',
        img: '../static/soraka.jpg',
        year: 2009,
        price: 450,
        description: 'soraka, una nómada proveniente del reino celestial, dejó a un lado su forma inmortal para proteger a las razas mortales de su propia ignorancia e instintos asesinos. Su cometido es difundir las virtudes de la compasión y la misericordia entre todos los seres con los que se cruza, guiar a los perdidos y sanar a los heridos. Pese a los problemas que ha presenciado Soraka hasta la fecha, sigue creyendo firmemente que los pueblos de Runaterra no han alcanzado todo su potencial.',
    },
]



    export const getFetch = new Promise ((resolve,reject)=>{
         let condition = true;
         if(condition){
             setTimeout(()=>{
                 resolve(productos)
             }, 3000)
         } else {
             reject('error')
         }
    })