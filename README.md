# TL;DR

Fix strange behavior when copy paste from terminal accessible buffer mode by replacing non-breaking spaces with regular ones.

# Summary

This extension provides facade-like functionality for the convenience of working with accessible buffer terminal.

By some reasons when you enter an accessible buffer mode for terminal, all whitespaces are replaced with non-breaking ones, so if you try to copy some command from there and paste it to the terminal the command will fail.

I believe that there are objective reasons for doing this. However, it bothers a bit, if you just want to copy and paste some command from a man page and etc. This extension makes everything copied from accessible buffer mode valid for insertion.

As I said before extension provides facade-like functionality. By which I mean that you can achieve almost the same behavior with other extensions that provide replacement rules for the clipboard. However, I wanted it to be a separate extension as it is easier to fix the problem by using a separate extension.

## Quick start

1. Install the extension
2. Enable the extension
3. Set a new shortcut for the key you use for copying with the following when expression `terminalAccessibleBufferFocus`


### Windows
```json
    {
        "key": "ctrl+c",
        "command": "abcopy.clipboardCopyAction",
        "when": "terminalAccessibleBufferFocus"
    }
```

### MacOS
```json
    {
        "key": "cmd+c",
        "command": "abcopy.clipboardCopyAction",
        "when": "terminalAccessibleBufferFocus"
    }
```

### Linux
```json
    {
        "key": "ctrl+shift+c",
        "command": "abcopy.clipboardCopyAction",
        "when": "terminalAccessibleBufferFocus"
    }
```

Now you've got a custom copy method, which is activated only when you are in the terminal accessible buffer mode.
