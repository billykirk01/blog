---
title: tmux tips and tricks
publish_date: 2022-06-20
snippet: my tmux cheat sheat
---
`tmux` start a new session

`tmux new -s name` start a new named session

`tmux ls` list existing sessions

`tmux a` attach to the most recent session

`tmux attach-session -t name` attach to a named session

## Sessions
_Use these with the prefix `Ctrl-b`_

`)` switch to next session

`(` swtich to previous session

`d` detach from window

`?` list shortcuts

`:` prompt

`$` rename session

`s` switch session

## Windows (tabs)
_Use these with the prefix `Ctrl-b`_

`c`  create window

`w`  list windows

`n`  next window

`p`  previous window 

`f`  find window

`,`  name window

`&`  kill window

`[0-9]` move to window [0-9]

`left (right, up, down)` switch to the left (right, top, bottom) window

`:swap-window -s [0-9] -t [0-9]` swap windows

## Panes (splits)
_Use these with the prefix `Ctrl-b`_

`%` vertical split

`"` horizontal split

`Mod-1` select-layout even-horizontal

`Mod-2` select-layout even-vertical

`left (right, up, down)`  go to the left (right, top, bottom) pane

`Ctrl-left (right, up, down)`  resize panel to the left (right, top, bottom) pane

`o` swap panes

`q` show pane numbers (type the key to go to the pane)

`x` kill pane

`{` move the current pane left

`}` move the current pane right

`z` toggle pane zoom

## Copy mode
`[` go into copy mode

`]` paste into the current window

`setw -g mode-keys vi` switch into vi mode

```
Function                Vi             Emacs
-----------------------------------------------
Back to indentation     ^              M-m
Start selection         Space          C-space
Clear selection         Escape         C-g
Copy selection          Enter          M-w
Cursor down             j              Down
Cursor left             h              Left
Cursor right            l              Right
Cursor to bottom line   L
Cursor to middle line   M              M-r
Cursor to top line      H              M-R
Cursor up               k              Up
Delete entire line      d              C-u
Delete to end of line   D              C-k
End of line             $              C-e
Goto line               :              g
Half page down          C-d            M-Down
Half page up            C-u            M-Up
Next page               C-f            Page down
Next word               w              M-f
Paste buffer            p              C-y
Previous page           C-b            Page up
Previous word           b              M-b
Quit mode               q              Escape
Scroll down             C-Down or J    C-Down
Scroll up               C-Up or K      C-Up
Search again            n              n
Search backward         ?              C-r
Search forward          /              C-s
Start of line           0              C-a
Start selection         Space          C-Space
Transpose chars                        C-t
```
