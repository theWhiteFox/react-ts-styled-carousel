import { useWindowSize } from '../../hooks/useWindowSize'
import { CardStyles as S } from './styled'
export interface CardProps {
  id: number
  total?: number
  imageAlt: string
  title: string
  description: string
  language: string
  url: string
}

const breakpoints = {
  small: '100%',
  medium: '50%',
  large: '33.3%',
}

const getBreakPoint = (windowWidth: number) => {
  if (windowWidth) {
    if (windowWidth < 480) {
      return breakpoints.small
    } else if (windowWidth < 1024) {
      return breakpoints.medium
    } else {
      return breakpoints.large
    }
  } else {
    return undefined
  }
}

// https://api.github.com/users/theWhiteFox/repos

const MIN_SWIPE_REQUIRED = 358

export const Card = ({ id, total, title, description, language, url }: CardProps) => {
  const { width } = useWindowSize()

  return (
    <S.CardWrapper
    // $width={getBreakPoint(width)}
    // style={{
    //   padding: '8px 4px',
    // }}
    >
      <S.Card>
        <S.CardContent>
          {language}
        </S.CardContent>
      </S.Card>
    </S.CardWrapper>
  )
}
