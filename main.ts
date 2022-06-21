import blog from "https://raw.githubusercontent.com/billykirk01/deno_blog/main/blog.tsx";
// import blog from "/home/billy/Development/deno_blog/blog.tsx";


import "https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-go?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-rust?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-bash?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-python?no-check";

blog({
  title: "Billy Kirk",
  description: "I love building applications for the web primarily with Deno 🦕 and Svelte 🧡 and I occasionally dabble in systems programming with Rust 🦀 and Go 💙",
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
