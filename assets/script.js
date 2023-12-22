const collection = [
    {
        name: "Minecraft",
        creator: "Mojang",
        releaseYear: 2011,
        img: "assets/minecraft.jpg",
        genre: ["Bac à sable", "Survie"],
        desc: "Minecraft est un jeu de type bac à sable, c'est à dire qu'il intègre des “outils” pour façonner son propre univers de jeu. Ainsi , le joueur peut à peu près bâtir tout ce qu'il veut. Il existe différents modes de jeu dans lesquels la partie aventure et la partie créative sont plus ou moins développées.",
        link: {
            icon:"assets/link.png",
            url: "https://www.minecraft.net/fr-fr"
        }

    },

    {
        name: "Counter Strike 2",
        creator: "Valve",
        releaseYear: "2023",
        img: "assets/cs2.jpg",
        genre: ["FPS", "Arcade", "Compétitif"],
        desc: "Counter-Strike 2 est un jeu vidéo de tir à la première personne multijoueur en ligne développé et édité par Valve, sorti sur Windows et Linux le 27 septembre 2023. Il remplace Counter-Strike: Global Offensive sorti en 2012.",
        link: {
            icon:"assets/link.png",
            url: "https://www.counter-strike.net/cs2"
        }
    },
    {
        name: "Metro2033",
        creator: "A4 Games",
        releaseYear: "2010",
        img: "assets/mertro.jpg",
        genre: ["FPS", "Survie", "Horreur"],
        desc: "Metro 2033 est un jeu vidéo de tir en vue à la première personne post-apocalyptique et un survival horror développé par 4A Games et édité par THQ. Il est sorti sur PC et Xbox 360 le 18 mars 2010, après un développement d'environ quatre ans. Il s'agit du premier jeu de la série.",
        link: {
            icon:"assets/link.png",
            url: "https://www.metrothegame.com/fr/lhistoire-de-metro/"
        }
    },
    {
        name: "Terraria",
        creator: "Re-Logic",
        releaseYear: "2011",
        img: "assets/Terraria.jpg",
        genre: ["Action", "Aventure", "Bac à sable"],
        desc: "Terraria est un jeu vidéo indépendant de type action-aventure et bac à sable développé par Re-Logic. Le jeu propose d'explorer, de fabriquer des objets, de construire des habitations et de combattre des créatures variées dans un monde en 2D généré aléatoirement.",
        link: {
            icon:"assets/link.png",
            url: "https://terraria.org/"
        }
    },
    {
        name: "Star Citizen",
        creator: "Cloud Imperium Games",
        releaseYear: "En développement",
        img: "assets/star-citizen.jpg",
        genre: ["Science Fiction", "Massivement Multijoueur"],
        desc: "Star Citizen est un jeu vidéo massivement multijoueur de simulation spatiale du type science-fiction, en cours de développement, édité et développé par Cloud Imperium Games (CIG).",
        link: {
            icon:"assets/link.png",
            url: "https://robertsspaceindustries.com/"
        }
    },
    {
        name: "DayZ",
        creator: "Bohemia Interactive",
        releaseYear: "2013",
        img: "assets/dayz.jpg",
        genre: ["Survie"],
        desc: "DayZ est un mod de jeu vidéo publié durant l'été 2013 basé sur le jeu ARMA II, une simulation militaire développée par Bohemia Interactive. Il s'agit d'un simulateur de survie dans un monde « post-apocalyptique-zombie » conçu par le game designer néo-zélandais Dean « Rocket » Hall.",
        link: {
            icon:"assets/link.png",
            url: "https://dayz.com/"
        }
    },
    {
        name: "ArmaIII",
        creator: "Bohemia Interactive",
        releaseYear: "2013",
        img: "assets/arma.jpg",
        genre: ["Simulation", "Jeu de tir tactique"],
        desc: "La campagne Vent d'Est se déroule sur deux îles, la principale étant Altis2, la seconde Stratis3. Les îles sont fortement inspirées de deux îles grecques du nom de Lemnos2 et Ágios3 Efstrátios.",
        link: {
            icon:"assets/link.png",
            url: "https://arma3.com/"
        }
    },
    {
        name: "World of Warcraft",
        creator: "Blizzard",
        releaseYear: "2004",
        img: "assets/wow.jpg",
        genre: ["MMORPG", "Massivement Multijoueur"],
        desc: "Le jeu reprend place dans le monde imaginaire d’Azeroth, et dont le cadre historique se situe quatre ans après les évènements concluant Warcraft III. Le joueur choisit son personnage parmi huit, dix ou douzeNote 1 races disponibles divisées en deux factions : l’Alliance et la Horde.",
        link: {
            icon:"assets/link.png",
            url: "https://worldofwarcraft.blizzard.com/fr-fr/"
        }
    },
    {
        name: "Red Dead Redemption II",
        creator: "Rockstar Games",
        releaseYear: "2018",
        img: "assets/rdr2.jpg",
        genre: ["Monde ouvert", "Aventure", "Action", "Western"],
        desc: "En 1899 (soit douze ans avant les principaux événements de Red Dead Redemption), à la suite d'un braquage qui a mal tourné dans la ville de Blackwater, la bande de Dutch van der Linde est traquée par les agents fédéraux et les chasseurs de primes.",
        link: {
            icon:"assets/link.png",
            url: "https://www.rockstargames.com/reddeadredemption2"
        }
    },
    {
        name: "Garry's Mod",
        creator: "FacePunch Studios",
        releaseYear: "2006",
        img: "assets/garrysmod.jpg",
        genre: ["Bac à sable"],
        desc: "Garry’s Mod est dans un premier temps un mod de construction Half-Life 2, créé par Garry Newman en décembre 2004. Il s'agit d'un jeu de type « sandbox », où le joueur est libre de créer et de manipuler n'importe quel objet, et de faire de nombreuses expériences, exploitant entièrement le moteur Source.",
        link: {
            icon:"assets/link.png",
            url: "https://gmod.facepunch.com/"
        }
    }
]

var section1 = document.querySelector('.box1');
var section2 = document.querySelector('.box2');

function createCard (parent, elementType, className, textContent, src, alt){
    let element = document.createElement(elementType);

    if (className){
        element.classList.add(className)
    }
    if (textContent){
        element.textContent = textContent
    }
    if (src){
        element.setAttribute('src', src)
    }
    if (alt){
        element.setAttribute('alt', alt)
    }
    parent.appendChild(element)
    
}

collection.forEach(function(object, index) {

   let section = document.createElement('section');

   section.classList.add('card')
    
    createCard(section, 'img', 'card__img', null, object.img, 'Image du jeu')

    createCard(section, 'div', 'card__genre', object.genre.join(', '))

    createCard(section, 'div', 'card__name', object.name)

    createCard(section, 'div', 'card__creator', object.creator)

    createCard(section, 'div', 'card__releaseyear', object.releaseYear)

    createCard(section, 'div', 'card__desc', object.desc)
    
    createCard(section, 'div', 'card__linkdiv')

    if (object.link) {

        let linkLink = document.createElement('a');
        linkLink.classList.add('cardlink-link');
        linkLink.setAttribute('href', object.link.url);
        linkLink.setAttribute('target', '_blank');
    
        let linkIcon = document.createElement('img');
        linkIcon.classList.add('cardlink-icon');
        linkIcon.setAttribute('src', object.link.icon);
        linkIcon.setAttribute('alt', 'Icone vidéo');
    
        linkLink.appendChild(linkIcon);
        section.appendChild(linkLink);
    }

    if (index % 2 === 0){
        section1.appendChild(section);
    }
    else {
        section2.appendChild(section);
    }
});


