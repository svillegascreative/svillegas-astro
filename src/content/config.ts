import { defineCollection, z } from "astro:content";

const forSaleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    photos: z.array(z.string().url()),
    price: z.string(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  "for-sale": forSaleCollection,
  posts: postsCollection,
};
