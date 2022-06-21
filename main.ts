import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

import "https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-go?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-rust?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-bash?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-python?no-check";

blog({
  title: "Billy Kirk",
  avatar: "https://avatars.githubusercontent.com/u/30280510?v=4",
  avatarClass: "rounded-full",
  author: "Billy Kirk",
  background: "#f9f9f9",
  links: [
    { title: "Email", url: "mailto:kirk.william.c@gmail.com" },
    { title: "GitHub", url: "https://github.com/billykirk01" },
    { title: "Twitter", url: "https://twitter.com/billykirk01" },
  ],
});
