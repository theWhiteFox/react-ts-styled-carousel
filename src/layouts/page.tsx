
import { CardProps } from '../components/Card'
import Carousel from '../components/Carousel/Carousel'
import { CarouselStyles as S } from './styled'

const items: Array<CardProps> = [
  {
    id: 1,
    imageAlt: "A person's eye",
    title: 'Boiler Plate',
    description: 'a React set up',
    language: 'item #1',
    url: 'https://github.com/theWhiteFox/Vite-React-TS-Redux-boilerplate',
  },
  {
    id: 2,
    imageAlt: 'D3 Charts',
    title: 'D3 Charts',
    description: 'Dynamic Charts',
    language: 'item #2',
    url: 'https://github.com/theWhiteFox/D3-Charts',
  },
  {
    id: 3,
    imageAlt: "A person's eye",
    title: 'learning React',
    description: 'Code',
    language: 'item #3',
    url: 'https://github.com/theWhiteFox/react-basics-advanced',
  },
  {
    id: 4,
    imageAlt: "A person's eye",
    title: 'Pokedex',
    description: 'a selection of pokemon',
    language: 'item #4',
    url: 'https://thewhitefox-pokedex.netlify.app/',
  },
  {
    id: 5,
    imageAlt: "A person's eye",
    title: 'Pokedex',
    description: 'a selection of pokemon',
    language: 'item #5',
    url: 'https://thewhitefox-pokedex.netlify.app/',
  },
  {
    id: 6,
    imageAlt: "A person's eye",
    title: 'Pokedex',
    description: 'a selection of pokemon',
    language: 'item #6',
    url: 'https://thewhitefox-pokedex.netlify.app/',
  },
]

const first3ValueIndicators = (map: any[]) => [...map.values()].slice(items.length / 2, items.length); // tablet 

// const threeValueIndicators = (map: any[]) => [...map.values()].slice(items.length % 2); // desktop
// const twoValueIndicators = (map: any[]) => [...map.values()].slice(items.length / 2); // tablet desktop

const Page = ({ }) => {
  return (
    <S.Layout>
      <S.PageContainer>
        <h1>Projects Page!</h1>
        <p>Carousel of projects.</p>
        <S.CarouselMainContainer>
          <Carousel items={items} indicators={first3ValueIndicators(items)} />
        </S.CarouselMainContainer>
      </S.PageContainer>
    </S.Layout>
  );
}

export default Page;