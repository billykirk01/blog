---
title: vim tips and tricks
publish_date: 2022-06-20 08:00:00
snippet: my vim cheat sheat
---
## Cursor movement
`h` move cursor left

`j` move cursor down

`k` move cursor up

`l` move cursor right

`H` move to top of screen

`M` move to middle of screen

`L` move to bottom of screen

`w` jump forwards to the start of a word

`W` jump forwards to the start of a word (words can contain punctuation)

`e` jump forwards to the end of a word

`E` jump forwards to the end of a word (words can contain punctuation)

`b` jump backwards to the start of a word

`B` jump backwards to the start of a word (words can contain punctuation)

`ge` jump backwards to the end of a word

`gE` jump backwards to the end of a word (words can contain punctuation)

`%` - move to matching character (default supported pairs: '()', '{}', '[]' - use :h matchpairs in vim for more info)

`0` jump to the start of the line

`^` jump to the first non-blank character of the line

`$` jump to the end of the line

`g_` jump to the last non-blank character of the line

`gg` go to the first line of the document

`G` go to the last line of the document