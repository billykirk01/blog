import blog from "https://raw.githubusercontent.com/billykirk01/deno_blog/main/blog.tsx";
// import blog from "/home/billy/Development/deno_blog/blog.tsx";


blog({
  title: "Billy Kirk",
  description: "I love building applications for the web primarily with Deno ๐ฆ and Svelte ๐งก and I occasionally dabble in systems programming with Rust ๐ฆ and Go ๐",
  avatar: "https://avatars.githubusercontent.com/u/30280510?v=4",
  avatarClass: "rounded-full",
  author: "Billy Kirk",
  background: "#f9f9f9",
  lang: "en",
  timezone: "en-US",
  links: [
    { title: "Email", url: "mailto:kirk.william.c@gmail.com" },
    { title: "GitHub", url: "https://github.com/billykirk01" },
    { title: "Twitter", url: "https://twitter.com/billykirk01" },
  ],
});
