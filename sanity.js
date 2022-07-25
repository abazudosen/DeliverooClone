import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  // projectId: 'qwoxusny',
  projectId: 'rc5iuja8',
  dataset: 'production',
  useCdn: true,
  apiVersion: "2021-10-21",
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source); 

export default client;