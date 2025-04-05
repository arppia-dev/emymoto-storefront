import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/blocks/Heros/HighImpact'
import { LowImpactHero } from '@/blocks/Heros/LowImpact'
import { MediumImpactHero } from '@/blocks/Heros/MediumImpact'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
