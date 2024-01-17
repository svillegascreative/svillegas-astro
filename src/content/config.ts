import { defineCollection, z } from "astro:content";

/** Things I'm selling, for a personal marketplace (maybe) */
const forSaleCollection = defineCollection({
  type: "content",
  schema: z.object({
    description: z.string(),
    title: z.string(),
    photos: z.array(z.string().url()),
    price: z.string(),
  }),
});

/** Updates posted in "/now" */
const nowCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.string(),
  }),
});

/** Writing, collected in "/posts" */
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
    lede: z.string().optional(),
    image: z.string().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  "for-sale": forSaleCollection,
  now: nowCollection,
  posts: postsCollection,
};
