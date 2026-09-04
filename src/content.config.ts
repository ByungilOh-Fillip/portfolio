import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// 프로젝트 컬렉션 스키마 정의
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string().default('game'),
    status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
    period: z.object({
      start: z.string(),
      end: z.string().optional(),
    }),
    role: z.array(z.string()),
    team: z.object({
      size: z.number(),
    }),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    thumbnail: z.string().optional(), // 썸네일 이미지 경로
    hero: z.string().optional(), // 상세 페이지 상단 이미지 경로
    github: z.string().url().optional(),
    blog: z.string().url().optional(),
  }),
});

// Develop(Study, Organize) 컬렉션 스키마 정의 (추가 확장 가능)
const developCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/develop" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['study', 'project', 'organize']),
    date: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'develop': developCollection,
};
