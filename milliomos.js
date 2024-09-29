let aktualisKerdes = 0;
let helyesValaszok = 0;
let hibasValaszok = 0;
let felezesHasznalva = false;
let telefonHasznalva = false;
let eletVisszaHasznalva = false;
const eletekElemek = [document.getElementById("elet1"), document.getElementById("elet2"), document.getElementById("elet3")];

const kerdesek = [
    // 1.
        {
            kerdes: "Melyik bolygó a legnagyobb a Naprendszerben ?",
            valaszok: [
                { valasz: "Föld", helyes: false },
                { valasz: "Mars", helyes: false },
                { valasz: "Jupiter", helyes: true },
                { valasz: "Vénusz", helyes: false }
            ]
        },
    // 2.
        {
            kerdes: "Melyik elem vegyjele az 'Fe' ?",
            valaszok: [
                { valasz: "Vas", helyes: true },
                { valasz: "Cink", helyes: false },
                { valasz: "Arany", helyes: false },
                { valasz: "Foszfor ", helyes: false }
            ]
        },
    // 3.
        {
            kerdes: "Mikor jelent meg a Fallout 2 ?",
            valaszok: [
                { valasz: "1994", helyes: false },
                { valasz: "2007", helyes: false },
                { valasz: "2002", helyes: false },
                { valasz: "1998", helyes: true }
            ]
        },
    // 4.
        {
            kerdes: "Mi a fővárosa Kanadának ?",
            valaszok: [
                { valasz: "Ottawa", helyes: true },
                { valasz: "Toronto", helyes: false },
                { valasz: "Vancouver", helyes: false },
                { valasz: "Montreal", helyes: false }
            ]
        },
    // 5.                                                                                                       
        {
            kerdes: "Ki fedezte fel Amerikát ?",
            valaszok: [
                { valasz: "Marco Polo", helyes: false },
                { valasz: "Vasco da Gama", helyes: false },
                { valasz: "Kolumbusz Kristóf", helyes: true },
                { valasz: "Ferdinánd Magellán", helyes: false }
            ]
        },
    // 6.
        {
            kerdes: "Melyik ország remdelkezik a legnagyobb területtel a világon ?",
            valaszok: [
                { valasz: "Egyesült Államok", helyes: false },
                { valasz: "Kína", helyes: false },
                { valasz: "Kanada", helyes: false },
                { valasz: "Oroszország", helyes: true }
            ]
        },
    // 7.
        {
            kerdes: "Melyik karakter mondja azt hogy: 'Demacia!' ?",
            valaszok: [
                { valasz: "Garen", helyes: false },
                { valasz: "Fiora", helyes: false },
                { valasz: "Jarvan IV", helyes: false },
                { valasz: "Mindhárom", helyes: true }
            ]
        },
    // 8.
        {
            kerdes: "Melyik pozícióban játszik leggyakrabban Jhin ?",
            valaszok: [
                { valasz: "Jungle", helyes: false },
                { valasz: "Top Lane", helyes: false },
                { valasz: "ADC (Bot Lane)", helyes: true },
                { valasz: "Mid Lane", helyes: false }
            ]
        },
    // 9.
        {
            kerdes: "Hogy nevezzük a derékszögű háromszög oldalait ?",
            valaszok: [
                { valasz: "Befogók és átfogó", helyes: true },
                { valasz: "befogók és közre zárt oldala", helyes: false },
                { valasz: "Alfa/Beta/Gamma", helyes: false },
                { valasz: "Alap és szárak", helyes: false }
            ]
        },
    // 10.
        {
            kerdes: "Melyik játékban található a Dust II pálya ?",
            valaszok: [
                { valasz: "Rainbow 6 Siege", helyes: false },
                { valasz: "CSGO2", helyes: true },
                { valasz: "Battlefield 1", helyes: false },
                { valasz: "Valorant", helyes: false }
            ]
        },
    // 11.
        {
            kerdes: "Mi a kémiai vegyjele a víznek ?",
            valaszok: [
                { valasz: "O", helyes: false },
                { valasz: "CO₂", helyes: false },
                { valasz: "O₂", helyes: false },
                { valasz: "H₂O", helyes: true }
            ]
        },
       
    // 12.
    
        {
            kerdes: "Melyik tudományág tanulmányozza a fosszíliákat ?",
            valaszok: [
                { valasz: "Geológia", helyes: false },
                { valasz: "Archeológia", helyes: false },
                { valasz: "Biológia", helyes: false },
                { valasz: "Paleontológia", helyes: true }
            ]
        },
    
    // 13.
    
        {
            kerdes: "Hány csillag található az Európai Unió zászlaján ?",
            valaszok: [
                { valasz: "11", helyes: false },
                { valasz: "12", helyes: true },
                { valasz: "13", helyes: false },
                { valasz: "14", helyes: false }
            ]
        },
    // 14.
        {
            kerdes: "Hány százalék vizet tartalmaz az emberi test átlagosan ?",
            valaszok: [
         
                { valasz: "50%", helyes: false },
                { valasz: "60%", helyes: false },
                { valasz: "70%", helyes: true },
                { valasz: "80%", helyes: false }
            ]
        },
    // 15.
        {
            kerdes: "Ki volt az utolsó római császár ?",
            valaszok: [
                { valasz: "Augustus", helyes: false },
                { valasz: "Nero", helyes: false },
                { valasz: "Hadrianus", helyes: false },
                { valasz: "Romulus Augustulus", helyes: true }
            ]
        },
    // 16.
        {
            kerdes: "Milyen alakú grafikon ábrázolja a másodfokú egyenletet ?",
            valaszok: [
                { valasz: "Parabola", helyes: true },
                { valasz: "Kör", helyes: false },
                { valasz: "Egyenes", helyes: false },
                { valasz: "Trapéz", helyes: false }
            ]
        },
    // 17.
        {
            kerdes: "Mi a Pitagorasz-tétel képlete ?",
            valaszok: [
                { valasz: "a² + c² = b²", helyes: false },
                { valasz: "ab = c", helyes: false },
                { valasz: "a + b = c", helyes: false },
                { valasz: "a² + b² = c²", helyes: true }
            ]
        },
    // 18.
        {
            kerdes: "Ki írta a 'Tüskevár' című ifjúsági regényt ?",
            valaszok: [
                { valasz: "Móra Ferenc", helyes: false },
                { valasz: "Tüskevár Dezső", helyes: false },
                { valasz: "Molnár Ferenc", helyes: false },
                { valasz: "Fekete István", helyes: true }
            ]
        },
    // 19.
        {
            kerdes: "Mi a gravitációs gyorsulás értéke a Földön ?",
            valaszok: [
                { valasz: "9,8 m/s²", helyes: true },
                { valasz: "6,8 m/s²", helyes: false },
                { valasz: "10,2 m/s²", helyes: false },
                { valasz: "9,5 m/s²", helyes: false }
            ]
        },
    // 20.
        {
            kerdes: "Mi okozza az évszakok változását a Földön ?",
            valaszok: [
                { valasz: "A Hold", helyes: false },
                { valasz: "A Föld tengelyének dőlésszöge", helyes: true },
                { valasz: "A Nap sugárzása", helyes: false },
                { valasz: "Az óceánok áramlása", helyes: false }
            ]
        },
    // 21.
        {
            kerdes: "Melyik programozási nyelvet fejlesztette ki James Gosling ?",
            valaszok: [
                { valasz: "Python", helyes: false },
                { valasz: "Ruby", helyes: false },
                { valasz: "C++", helyes: false },
                { valasz: "Java", helyes: true }
            ]
        },

     // 22.
            {
                kerdes: "Mi az alapértelmezett portszám a HTTPS számára ?",
                valaszok: [
                    { valasz: "443", helyes: true },
                    { valasz: "21", helyes: false },
                    { valasz: "22", helyes: false },
                    { valasz: "80", helyes: false }
                ]
            },
           
     // 23.
        
            {
                kerdes: "Mi a legnagyobb lehetséges egész szám egy 32 bites aláírás nélküli változóban ?",
                valaszok: [
                    { valasz: "2^64-1", helyes: false },
                    { valasz: "2^31-1", helyes: false },
                    { valasz: "2^32-1", helyes: true },
                    { valasz: "2^15-1", helyes: false }
                ]
            },
        
     // 24.
        
            {
                kerdes: "Milyen hosszú a kínai nagyfal ?",
                valaszok: [
                    { valasz: "Kb 11.000Km", helyes: false },
                    { valasz: "Kb 22.000Km", helyes: true },
                    { valasz: "Kb 33.000Km", helyes: false },
                    { valasz: "Kb 1000Km", helyes: false }
                ]
            },
     // 25.
            {
                kerdes: "Melyik ország alkotta meg a világ első írott törvénykönyvét ?",
                valaszok: [
                    { valasz: "Kína", helyes: false },
                    { valasz: "Róma", helyes: false },
                    { valasz: "Egyiptom", helyes: false },
                    { valasz: "Babilon", helyes: true }
                ]
            },
     // 26.
            {
                kerdes: "Mi volt az első programozható számítógép neve ?",
                valaszok: [
                    { valasz: "ENIAC", helyes: false },
                    { valasz: "Z3", helyes: true },
                    { valasz: "UNIVAC", helyes: false },
                    { valasz: "Colossus", helyes: false }
                ]
            },
     // 27.
            {
                kerdes: "Mi a 'szuverenitás' ?",
                valaszok: [
                    { valasz: "felségjog", helyes: true },
                    { valasz: "szabad költözés joga", helyes: false },
                    { valasz: "Ha valakinek gyakran adsz szuvenírt", helyes: false },
                    { valasz: "Ha valaki megtántorodik", helyes: false }
                ]
            },
     // 28.
            {
                kerdes: "Kit tartott Kossuth a legnagyobb magyarnak ?",
                valaszok: [
                    { valasz: "Orbán Viktort", helyes: false },
                    { valasz: "Kazincy Ferencet", helyes: false },
                    { valasz: "Petőfi Sándort", helyes: false },
                    { valasz: "Széchenyi Istvánt", helyes: true }
                ]
            },
     // 29.
            {
                kerdes: "Az alábbi fővárosok közül melyik van legtávolabb légvonalban Budapesttől ?",
                valaszok: [
                    { valasz: "Bécs", helyes: false },
                    { valasz: "Pozsony Varsó", helyes: false },
                    { valasz: "Varsó", helyes: true },
                    { valasz: "Ljubljana", helyes: false }
                ]
            },
     // 30.
            {
                kerdes: "Mi a csalogány másik neve ?",
                valaszok: [
                    { valasz: "Fülemüle", helyes: true },
                    { valasz: "Pacsirta", helyes: false },
                    { valasz: "Énekes rigó", helyes: false },
                    { valasz: "Lappanytú", helyes: false }
                ]
            },
       // 31.
            {
                kerdes: "Melyik volt a legelső videójáték-adaptáció ?",
                valaszok: [
                    { valasz: "Mortal Kombat", helyes: false },
                    { valasz: "Street Fighters", helyes: false },
                    { valasz: "Lara Croft: Tomb Raider ", helyes: false },
                    { valasz: "Super Mario Brothers ", helyes: true }
                ]
            },
      // 32.
            {
                kerdes: "Hogy hívják Sonic társát ?",
                valaszok: [
                    { valasz: "Knuckles", helyes: false },
                    { valasz: "Tails", helyes: true },
                    { valasz: "Foxy", helyes: false },
                    { valasz: "Ray", helyes: false }
                ]
            },

        // 33.
        {
            kerdes: "Hány éves kortól járhat rokkant nyugdíj ?",
            valaszok: [
                { valasz: "Akár 18", helyes: true },
                { valasz: "Akár 25", helyes: false },
                { valasz: "Csak 80", helyes: false },
                { valasz: "Csak 65", helyes: false }
            ]
        },


        // 34.
        {
            kerdes: "Melyik település rendelkezik a legnagyobb területtel az alábbiak közül ?",
            valaszok: [
                { valasz: "Nagyecsed", helyes: true },
                { valasz: "Mátészalka", helyes: false },
                { valasz: "Tunyogmatolcs", helyes: false },
                { valasz: "Fábiánháza", helyes: false }
            ]
        },
        // 35.
        {
            kerdes: "Minek a rövidítése a BIOS ?",
            valaszok: [
                { valasz: "Board Integrated Output System", helyes: false },
                { valasz: "Board Intrusion Offense System", helyes: false },
                { valasz: "Basic Input Output System", helyes: true },
                { valasz: "A BIOS nem rövitítés", helyes: false }
            ]
        },

        // 36.
        {
            kerdes: "Melyik építészeti stílus követte a román stílust ?",
            valaszok: [
                { valasz: "reneszánsz", helyes: false },
                { valasz: "gótika", helyes: true },
                { valasz: "barokk", helyes: false },
                { valasz: "klasszicizmus", helyes: false }
            ]
        },

        // 37.
        {
            kerdes: "Milyen részecskék alkotják az atom magját ?",
            valaszok: [
                { valasz: "Elektronok és protonok", helyes: false },
                { valasz: "Elektronok és neutronok", helyes: false },
                { valasz: "Protonok és mezonok", helyes: false },
                { valasz: "Protonok és neutronok", helyes: true }
            ]
        },

        // 38.
        {
            kerdes: "Hány bolygó van a Naprendszerben ?",
            valaszok: [
                { valasz: "6", helyes: false },
                { valasz: "7", helyes: false },
                { valasz: "8", helyes: true },
                { valasz: "9", helyes: false }
            ]
        },

        // 39.
        {
            kerdes: "mely színek színkombinációja a barna ?",
            valaszok: [
                { valasz: "Vörös/Citromsárga", helyes: false },
                { valasz: "Sötétkék/Vörös", helyes: false },
                { valasz: "Narancs/Fekete", helyes: true },
                { valasz: "Fekete/Citromsárga", helyes: false }
            ]
        },

        // 40.
        {
            kerdes: "Melyik évben jelent meg az első iPhone ?",
            valaszok: [
                { valasz: "2007", helyes: true },
                { valasz: "2005", helyes: false },
                { valasz: "2011", helyes: false },
                { valasz: "2003", helyes: false }
            ]
        },

        // 41.
        {
            kerdes: "Hány csillag található a 'SUBARU' autógyártócég logóján?",
            valaszok: [
                { valasz: "7", helyes: false },
                { valasz: "8", helyes: false },
                { valasz: "5", helyes: false },
                { valasz: "6", helyes: true }
            ]
        },

        // 42.
        {
            kerdes: "Melyik híres magyar zenében hallható ez a sor: 'A számlát meg sem kérdezem, két koktél  47 ezer'?",
            valaszok: [
                { valasz: "Azahriah - Habibi feat Desh", helyes: false },
                { valasz: "Wellhello - Apuveddmeg", helyes: true },
                { valasz: "Majka Curtis - Belehalok", helyes: false },
                { valasz: "Bagossy Brother Company - Olyan Ő", helyes: false }
            ]
        },

        // 43.
        {
            kerdes: "Melyik folyó Európa leghosszabb folyója ?",
            valaszok: [
                { valasz: "Duna", helyes: false },
                { valasz: "Volga", helyes: true },
                { valasz: "Rajna", helyes: false },
                { valasz: "Szajna", helyes: false }
            ]
        },


        // 43.
        {
            kerdes: "Melyik filmben mondja Al Pacino a híres mondatot: „Mondd neki, hogy én küldtem!” ?",
            valaszok: [
                { valasz: "A Keresztapa", helyes: false },
                { valasz: "Szemtől szemben", helyes: false },
                { valasz: "A sebhelyesarcú", helyes: true },
                { valasz: "Az ördög ügyvédje", helyes: false }
            ]
        },


        // 44.
        {
            kerdes: "Mi az infláció definíciója ?",
            valaszok: [
                { valasz: "A munkanélküliség növekedése", helyes: false },
                { valasz: "Az államadósság csökkenése", helyes: false },
                { valasz: "Az áruk és szolgáltatások árának csökkenése", helyes: false },
                { valasz: "Az áruk és szolgáltatások árának emelkedése", helyes: true }
            ]
        },


        // 45.
        {
            kerdes: "Mikor volt a Dózsa György-féle parasztháború ?",
            valaszok: [
                { valasz: "1514", helyes: true },
                { valasz: "1526", helyes: false },
                { valasz: "1490", helyes: false },
                { valasz: "476", helyes: false }
            ]
        },



        // 46.
        {
            kerdes: "Melyik országban alapították a Volvo autómárkát ?",
            valaszok: [
                { valasz: "Svédország", helyes: true },
                { valasz: "Franciaország", helyes: false },
                { valasz: "Olaszország", helyes: false },
                { valasz: "Németország", helyes: false }
            ]
        },


        // 47.
        {
            kerdes: "A legelső magyar sportautómárka a Kincsem Hyper GT lesz, hány darabot gyártanak ebből az autóból?",
            valaszok: [
                { valasz: "100", helyes: false },
                { valasz: "54", helyes: true },
                { valasz: "1", helyes: false },
                { valasz: "Nincs megszabva", helyes: false }
            ]
        },



        // 48.
        {
            kerdes: "Melyik híres és egyben prémium márka billentyűzetét használom ?",
            valaszok: [
                { valasz: "HyperX", helyes: false },
                { valasz: "Razer", helyes: false },
                { valasz: "Ducky", helyes: true },
                { valasz: "Logitech", helyes: false }
            ]
        },



        // 49.
        {
            kerdes: "Melyik legnagyobb illetve legerősebb HORDOZHATÓ JBL termék jelenleg a piacon ?",
            valaszok: [
                { valasz: "JBL Charge 5", helyes: false },
                { valasz: "JBL Xtreme 4", helyes: false },
                { valasz: "JBL BOOMBOX 3", helyes: true },
                { valasz: "JBL PartyBox 710", helyes: false }
            ]
        },

        // 50.
        {
            kerdes: "Milyen szerkezetnek nevezzük azt amikor egy irodalmi műben az első és utolsó sorok egyeznek grammatikailag és filozófiailag ?",
            valaszok: [
                { valasz: "Keretes", helyes: true },
                { valasz: "Körkörös ", helyes: false },
                { valasz: "Refrén", helyes: false },
                { valasz: "Paralelizmus", helyes: false }
            ]
        },

        // 51.
        {
            kerdes: "Mi a Démonkirály harmadik részének teljes neve ?",
            valaszok: [
                { valasz: "- Fekete lélek", helyes: true },
                { valasz: "- Necromanta", helyes: false },
                { valasz: "- Ördögi kör", helyes: false },
                { valasz: "- nincs külön megnevezése ennek a résznek", helyes: false }
            ]
        },

        // 52.
        {
            kerdes: "Hány része volt az Útvesztőnek (Mazerunners) ?",
            valaszok: [
                { valasz: "3", helyes: false },
                { valasz: "2", helyes: false },
                { valasz: "4", helyes: true },
                { valasz: "1", helyes: false }
            ]
        },

        // 53.
        {
            kerdes: "Hány film van jelenleg összesen a Marvel Végtelen Saga (Univerzumban)?",
            valaszok: [
                { valasz: "18", helyes: false },
                { valasz: "51", helyes: false },
                { valasz: "5", helyes: false },
                { valasz: "23", helyes: true }
            ]
        },

        // 54.
        {
            kerdes: "Mi a gravitációs állandó jele a fizikában ?",
            valaszok: [
                { valasz: "G", helyes: true },
                { valasz: "F", helyes: false },
                { valasz: "c", helyes: false },
                { valasz: "h", helyes: false }
            ]
        },

        // 55.
        {
            kerdes: "Ma volt már-e éjfél ? :)",
            valaszok: [
                { valasz: "Nem még nem volt", helyes: false },
                { valasz: "Igen már volt", helyes: true },
                { valasz: "Nem és nem is lesz", helyes: false },
                { valasz: "Tessék?", helyes: false }
            ]
        },

        // 56.
        {
            kerdes: "Hogy írják helyesen az Egyesült államok fővárosát ?",
            valaszok: [
                { valasz: "New-York", helyes: false },
                { valasz: "Newyork", helyes: false },
                { valasz: "New York", helyes: false },
                { valasz: "TESSÉK????", helyes: true }
            ]
        },

        // 57.
        {
            kerdes: "Hány Chromája van a Heartseeker Jinx skinnek ?",
            valaszok: [
                { valasz: "7", helyes: true },
                { valasz: "4", helyes: false },
                { valasz: "9", helyes: false },
                { valasz: "2", helyes: false }
            ]
        },

        // 58.
        {
            kerdes: "Hány játékos van egy kosárlabda csapatban a pályán ?",
            valaszok: [
                { valasz: "11", helyes: false },
                { valasz: "6", helyes: false },
                { valasz: "5", helyes: true },
                { valasz: "7", helyes: false }
            ]
        },

        // 59.
        {
            kerdes: "Melyik a Föld leghosszabb hegyvonulata ?",
            valaszok: [
                { valasz: "Himalája", helyes: false },
                { valasz: "Andok ", helyes: true },
                { valasz: "Sziklás-hegység", helyes: false },
                { valasz: "Alpok", helyes: false }
            ]
        },

        // 60.
        {
            kerdes: "Ki írta a „Gyűrűk Ura” trilógiát ?",
            valaszok: [
                { valasz: "J.K. Rowling", helyes: false },
                { valasz: "C.S. Lewis", helyes: false },
                { valasz: "George R.R. Martin", helyes: false },
                { valasz: "J.R.R. Tolkien", helyes: true }
            ]
        },

        // 61.
        {
            kerdes: "Ki mondta: „Cogito, ergo sum” (Gondolkodom, tehát vagyok) ?",
            valaszok: [
                { valasz: "Platón", helyes: false },
                { valasz: "René Descartes", helyes: true },
                { valasz: "Immanuel Kant", helyes: false },
                { valasz: "Arisztotelész", helyes: false }
            ]
        },

        // 62.
        {
            kerdes: "Ki alapította az Amazon vállalatot ?",
            valaszok: [
                { valasz: "Larry Page", helyes: false },
                { valasz: "Jeff Bezos", helyes: true },
                { valasz: "Elon Musk", helyes: false },
                { valasz: "Bill Gates", helyes: false }
            ]
        },

        // 63.
        {
            kerdes: "Melyik híres játék alap mechanikája az AIR ROLL?",
            valaszok: [
                { valasz: "Rocket Leage", helyes: true },
                { valasz: "Fortnite", helyes: false },
                { valasz: "Forza Horizon", helyes: false },
                { valasz: "Valorant", helyes: false }
            ]
        },

        // 64.
        {
            kerdes: "Ki nyerte az utolsó E-SPORT mérkőzést LOL-ban?",
            valaszok: [
                { valasz: "Rainbow7", helyes: false },
                { valasz: "MAD Lions", helyes: false },
                { valasz: "PSG Talon", helyes: false },
                { valasz: "GAM Esports", helyes: true }
            ]
        },

        // 65.
        {
            kerdes: "Hogy tetszett az oldalam ?",
            valaszok: [
                { valasz: "Nagyon rossz szerintem", helyes: true },
                { valasz: "Elmegy", helyes: true },
                { valasz: "Jó", helyes: true },
                { valasz: "Nagyon tetszett", helyes: true }
            ]
        },


    ];


const kerdesElem = document.querySelector(".kerdes");
const valaszokElem = document.querySelector(".valaszok");
const eredmenyElem = document.querySelector(".eredmeny");
const szamlaloElem = document.querySelector(".szamlalo");
const nehezsegElem = document.querySelector(".nehezseg");

function ujKerdes() {
    if (aktualisKerdes < kerdesek.length) {
        // Hányadik kérdés jelenik meg
        szamlaloElem.textContent = `${aktualisKerdes + 1}. kérdés`;
        
        // Minden 10. kérdés után nehezebb kérdések üzenet megjelenítése
        if ((aktualisKerdes + 1) % 10 === 1 && aktualisKerdes !== 0) {
            nehezsegElem.textContent = "Nehezebb kérdések következnek!";
        } else {
            nehezsegElem.textContent = "";  // Ha nem nehezebb kérdés jön, üzenet eltüntetése
        }

        // Kérdés és válaszok betöltése
        const kerdes = kerdesek[aktualisKerdes];
        kerdesElem.textContent = kerdes.kerdes;
        valaszokElem.innerHTML = "";
        kerdes.valaszok.forEach((valasz, index) => {
            const div = document.createElement("div");
            div.textContent = valasz.valasz;
            div.classList.add("valasz");
            div.dataset.correct = valasz.helyes;
            div.addEventListener("click", ellenorizValasz);
            valaszokElem.appendChild(div);
        });
    } else {
        vegJatek();
    }
}



function ellenorizValasz(event) {
    const valaszElem = event.target;
    const helyes = valaszElem.dataset.correct === "true";

    if (helyes) {
        eredmenyElem.textContent = "Helyes válasz!";
        helyesValaszok++;
    } else {
        hibasValaszok++;
        eletekElemek[hibasValaszok - 1].style.display = "none";  // Egy élet eltávolítása
        eredmenyElem.textContent = "Helytelen válasz!";
        
        if (hibasValaszok >= 3) {
            vegJatek();
            return;
        }
    }

    eredmenyElem.style.display = "block";
    setTimeout(() => {
        aktualisKerdes++;
        ujKerdes();
        eredmenyElem.style.display = "none";
    }, 2000);
}

function vegJatek() {
    kerdesElem.textContent = "A játék véget ért!";
    valaszokElem.innerHTML = "";
    eredmenyElem.textContent = `Összesen ${helyesValaszok} kérdésre válaszoltál helyesen!`;
    eredmenyElem.style.display = "block";
}

// Felezés gomb
document.getElementById("felezes").addEventListener("click", () => {
    if (felezesHasznalva) return;  // Ha már használták, ne működjön újra
    felezesHasznalva = true;  // Beállítjuk, hogy a felezés már használatban van

    const valaszok = document.querySelectorAll(".valasz");
    let hibasValaszok = [];

    // Végigmegyünk az összes válaszon, és összegyűjtjük a helyteleneket
    valaszok.forEach(valasz => {
        if (valasz.dataset.correct === "false") {
            hibasValaszok.push(valasz);
        }
    });

    // Ellenőrizzük, hogy van-e legalább két hibás válasz
    if (hibasValaszok.length >= 2) {
        // Véletlenszerűen kiválasztunk két hibás választ és eltüntetjük őket
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * hibasValaszok.length);
            const hibasValasz = hibasValaszok[randomIndex];
            hibasValasz.style.display = "none";  // Eltüntetjük a hibás választ

            // Eltávolítjuk a kiválasztott elemet a hibás válaszok listájából, hogy ne válasszuk ki újra
            hibasValaszok.splice(randomIndex, 1);
        }
    }

    // A gomb letiltása
    document.getElementById("felezes").classList.add("disabled");
});

// Telefonos segítség gomb
document.getElementById("telefon").addEventListener("click", () => {
    if (telefonHasznalva) return;  // Ha már használták, nem csinál semmit
    telefonHasznalva = true;  // Megjelöli, hogy a telefonos segítséget használták

    const valaszok = document.querySelectorAll(".valasz");
    let helyesValasz = null;
    valaszok.forEach(valasz => {
        if (valasz.dataset.correct === "true") {
            helyesValasz = valasz;
        }
    });

    // A telefonos segítség megmutatja a helyes választ
    alert(` A helyes válasz: ${helyesValasz.textContent}`);

    // A gomb letiltása
    document.getElementById("telefon").classList.add("disabled");
});





// Életvisszaállítás gomb
document.getElementById("eletVissza").addEventListener("click", () => {
    if (eletVisszaHasznalva || hibasValaszok === 0) return;  // Ha már használták vagy nincs élet elveszítve, nem csinál semmit
    eletVisszaHasznalva = true;  // Megjelöli, hogy az életvisszaállítást használták

    // Visszaállítja az utoljára elvesztett életet
    hibasValaszok--;
    eletekElemek[hibasValaszok].style.display = "inline-block";  // Az elveszett élet újra látható lesz

    // A gomb letiltása
    document.getElementById("eletVissza").classList.add("disabled");
});

ujKerdes();  // Kezdő kérdés betöltése

document.getElementById("felezes").addEventListener("click", () => {
    if (felezesHasznalva) return;  // Ha már használták, nem csinál semmit
    felezesHasznalva = true;  // Megjelöli, hogy a felezést használták

    const valaszok = document.querySelectorAll(".valasz");
    let helyesValasz = null;
    let hibasValaszok = [];

    // Megkeressük a helyes választ és a helytelen válaszokat egy tömbbe tesszük
    valaszok.forEach(valasz => {
        if (valasz.dataset.correct === "true") {
            helyesValasz = valasz;
        } else {
            hibasValaszok.push(valasz);
        }
    });

    // Véletlenszerűen kiválasztunk két hibás választ és eltüntetjük
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * hibasValaszok.length);
        const hibasValasz = hibasValaszok[randomIndex];
        hibasValasz.style.display = "none";

        // A kiválasztott elemet eltávolítjuk a tömbből, hogy ne válasszuk ki újra
        hibasValaszok.splice(randomIndex, 1);
    }

    // A gomb letiltása, hogy ne lehessen többször használni
    document.getElementById("felezes").classList.add("disabled");
});

ujKerdes();  // Első kérdés betöltése