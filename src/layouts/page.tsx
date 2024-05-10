
import { CardProps } from '../components/Card'
import Carousel from '../components/Carousel/Carousel'
import { CarouselStyles as S } from '../components/Carousel/styled'

const items: Array<CardProps> = [
  {
    id: 1,
    imageAlt: "A person's eye",
    title: 'Boiler Plate',
    description: 'a React set up',
    language: 'JS',
    url: 'https://github.com/theWhiteFox/Vite-React-TS-Redux-boilerplate',
  },
  {
    id: 2,
    imageAlt: 'D3 Charts',
    title: 'D3 Charts',
    description: 'Dynamic Charts',
    language: 'JS',
    url: 'https://github.com/theWhiteFox/D3-Charts',
  },
  {
    id: 3,
    imageAlt: "A person's eye",
    title: 'learning React',
    description: 'Code',
    language: 'JS',
    url: 'https://github.com/theWhiteFox/react-basics-advanced',
  },
  {
    id: 4,
    imageAlt: "A person's eye",
    title: 'Pokedex',
    description: 'a selection of pokemon',
    language: 'JS',
    url: 'https://thewhitefox-pokedex.netlify.app/',
  },
  {
    id: 5,
    imageAlt: "A person's eye",
    title: 'Pokedex',
    description: 'a selection of pokemon',
    language: 'JS',
    url: 'https://thewhitefox-pokedex.netlify.app/',
  },
  {
    id: 6,
    imageAlt: "A person's eye",
    title: 'Pokedex',
    description: 'a selection of pokemon',
    language: 'JS',
    url: 'https://thewhitefox-pokedex.netlify.app/',
  },
  {
    id: 7,
    imageAlt: "A person's eye",
    title: 'Pokedex',
    description: 'a selection of pokemon',
    language: 'JS',
    url: 'https://thewhitefox-pokedex.netlify.app/',
  },
]

const first3ValueIndicators = (map: any[]) => [...map.values()].slice(0, 3);

const Page = ({ }) => {
  return (
    <S.CarouselMainContainer>
      <Carousel items={items} indicators={first3ValueIndicators(items)} />
    </S.CarouselMainContainer>
  );
}

export default Page;