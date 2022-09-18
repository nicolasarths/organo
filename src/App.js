import Form from './components/Form/'
import { Banner } from './components/Banner';
import { useState } from 'react';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [people, setPeople] = useState([
    {
      name: "Nícolas Arths.",
      role: "Desenvolvedor",
      team: "Programação",
      image: "https://github.com/nicolasarths.png"
    },
    {
      name: "Vinicios Neves",
      role: "Criador do Organo",
      team: "Programação",
      image: "https://github.com/viniciosneves.png"
    },
    {
      name: "Clark Kent",
      role: "Líder do Front",
      team: "Front-End",
      image: "https://portalpopline.com.br/wp-content/uploads/2022/07/superman-henry-cavill.jpg"
    },
    {
      name: "Macaco Louco",
      role: "Cientista",
      team: "Data Science",
      image: "https://pbs.twimg.com/profile_images/1227684446826041345/6wwgBPk-_400x400.jpg"
    },
    {
      name: "Agente da S.W.A.T",
      role: "Líder de Operações",
      team: "Devops",
      image: "https://media.istockphoto.com/photos/police-officer-against-brick-wall-picture-id682021004?k=20&m=682021004&s=170667a&w=0&h=wcF_GHzunDZwj5uzqQTMfbzrAYZP-L-qnloITiKALsw="
    },
    {
      name: "Steve Rogers",
      role: "Capitão",
      team: "Devops",
      image: "http://s11.favim.com/orig/7/775/7756/77561/marvel-steve-rogers-chris-evans-Favim.com-7756165.jpg"
    },
    {
      name: "Naruto Uzumaki",
      role: "Sofredor",
      team: "Devops",
      image: "https://i.scdn.co/image/ab67616d0000b27341764b961dc17534094c2cdd"
    },
    {
      name: "Cruella",
      role: "Designer",
      team: "UX e Design",
      image: "https://epipoca.com.br/wp-content/uploads/2021/05/Emma-Stone-como-Cruella-De-Vil-1200x900.jpg"
    },
    {
      name: "Edna Moda",
      role: "Designer",
      team: "UX e Design",
      image: "https://rollingstone.uol.com.br/media/_versions/edna_moda_disney_widelg.png"
    },
    {
      name: "Tio Patinhas",
      role: "Financiador",
      team: "Inovação e Gestão",
      image: "http://images.uncyc.org/pt/thumb/1/1f/Clipscrooge21.gif/150px-Clipscrooge21.jpg"
    },
  ])

  const teams = [
    {
      name: "Programação",
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: "Front-End",
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: "Data Science",
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: "Devops",
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: "UX e Design",
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: "Mobile",
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: "Inovação e Gestão",
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ];

  const linkItems = [
    {
        name: 'website Nícolas Arths',
        src: '/images/icons/victor-icon.png',
        href: 'https://nicolasarths.com.br'
    },
    {
        name: 'github',
        src: '/images/icons/github-icon.png',
        href: 'https://github.com/nicolasarths'
    }
]

  const submit = (person) => {
    setPeople([...people, person])
  }

  return (
    <div className="App">
      <Banner/>
      <Form 
        teams={teams.map(team => team.name)}
        onSubmit={person => submit(person)}
      />
      {teams.map(team => (
        <Team
          people={people.filter(person => person.team === team.name)}
          key={team.name}
          teamName={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
        />
      ))}
      <Footer linkItems={linkItems} />
    </div>
  );
}

export default App;
