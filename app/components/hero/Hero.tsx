// app/components/Hero.tsx

import { HeroTitle } from './HeroTitle'
import { HeroText } from './HeroText'

export const Hero = () => {
    return (
        <div className="max-w-4xl">
            <HeroTitle />
            <HeroText />
        </div>
    )
}