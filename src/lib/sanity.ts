import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'
import type { Image } from 'sanity'

import { dataset, projectId } from '@/config/env'

export const client = createClient({
  dataset,
  projectId,
  useCdn: false,
})

const imageBuilder = createImageUrlBuilder({
  dataset,
  projectId,
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
