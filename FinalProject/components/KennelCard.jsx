import './KennelCard.css'

function KennelCard(){
    const kennels = [
        { id: 1, name: 'Ability' },
    { id: 2, name: 'Absidian' },
    { id: 3, name: "Afrodita's True Tiger" },
    { id: 4, name: 'Ak Mil Vista' },
    { id: 5, name: 'Akane-Hinata' },
    { id: 6, name: 'Alfalex' },
    { id: 7, name: 'Al Khabara' },
    { id: 8, name: 'Allegro Con Brio' },
    { id: 9, name: 'Allsaare' },
    { id: 10, name: 'Alphadirato' },
    { id: 11, name: 'Altõn' },
    { id: 12, name: 'Amadeline' },
    { id: 13, name: 'Angelstone' },
    { id: 14, name: "Annillat'Zi" },
    { id: 15, name: 'Antebellum' },
    { id: 16, name: "Faerie's" },
    { id: 17, name: 'Falaris' },
    { id: 18, name: 'Farlanders' },
    { id: 19, name: 'Felice Orchidea' },
    { id: 20, name: 'Final Desire' },
    { id: 21, name: 'Field Of Dreams' },
    { id: 22, name: 'Flibelle' },
    { id: 23, name: 'Flintstyle' },
    { id: 24, name: 'Flying Snowflake' },
    { id: 25, name: 'Flutwelle' },
    { id: 26, name: 'Fortuna Numa' },
    { id: 27, name: 'Fortuneia' },
    { id: 28, name: 'Free Choice' },
    { id: 29, name: 'Frizzy Heads' },
    { id: 30, name: 'Ganbarimasu' },
    { id: 31, name: 'Girls Best Friends' },
    { id: 32, name: 'Golden Carelia' },
    { id: 33, name: "Goldylock's Loves" },
    { id: 34, name: 'Greenvillhouse' },
    { id: 35, name: 'Greivik' },
    { id: 36, name: 'Grisran' },
    { id: 37, name: 'Guniver' },
    { id: 38, name: 'Halli-Elli' },
    { id: 39, name: "Heidelind's" },
    { id: 40, name: 'Willsteff`s' },
    { id: 41, name: 'Winter Hunter' },
    { id: 42, name: 'Wizard´s Creek' },
    { id: 43, name: 'Wonderform' },
    { id: 44, name: 'Wunderstern' },
      ];
    return (
      <div className="listofKennels">
        <ul className="kennelsList" >
        {kennels.map((kennel) => (
          <li key={kennel.id}>{kennel.name}</li>
        ))}
      </ul>
      </div>
    )
  }
  
  export default KennelCard