import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "projects",
        label: "Projects",
        path: "src/content/projects",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["game", "web", "app", "other"],
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: ["completed", "in-progress", "planned"],
          },
          {
            type: "object",
            name: "period",
            label: "Period",
            fields: [
              { type: "string", name: "start", label: "Start Date" },
              { type: "string", name: "end", label: "End Date (Optional)" },
            ],
          },
          {
            type: "string",
            name: "role",
            label: "Roles",
            list: true,
          },
          {
            type: "object",
            name: "team",
            label: "Team",
            fields: [
              { type: "number", name: "size", label: "Size" }
            ],
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
          },
          {
            type: "number",
            name: "order",
            label: "Order",
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail Image",
          },
          {
            type: "image",
            name: "hero",
            label: "Hero Image",
          },
          {
            type: "string",
            name: "github",
            label: "GitHub URL",
          },
          {
            type: "string",
            name: "blog",
            label: "Blog URL",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "develop",
        label: "Develop Logs",
        path: "src/content/develop",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            options: ["study", "project", "organize"],
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      }
    ],
  },
});
