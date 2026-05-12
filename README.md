# 4D v20 VS Code Extension

Everything you need for modern 4D v20 development in VS Code. This extension provides robust syntax highlighting, useful snippets, and basic formatting to streamline your workflow.

> **Maintained by ** for the 4D Community.

## Demo

![Demo](demo/demo.gif)

## Features

### 🚀 Modern Syntax Highlighting
Full support for the latest 4D v20 language features:
*   **Declarations**: `var`, `Class`, `extends`, `Function`, `property`.
*   **Control Flow**: `For each`, `If/Else/End if`, `Case of`, `While`.
*   **ORDA Support**: Highlights `ds` (DataStore), `cs` (ClassStore), and object dot notation properties.
*   **Classic Commands**: Supports standard 4D commands and constants.

### ⚡ Smart Snippets
Boost your productivity with built-in snippets for common structures:
*   `method`: Generates a standard method header with `#DECLARE`.
*   `class`: Creates a new Class skeleton.
*   `function`: Adds a new function to your class.
*   `if`, `ifelse`: Quick conditional blocks.
*   `foreach`, `for`: Loop structures.
*   `dsquery`: ORDA query templates.

### 🎨 Formatting
Keep your code clean with basic formatting support:
*   Auto-indentation for block structures (`If`, `For`, `Case of`, `Class`, `Function`).
*   **Setting**: `4d.uppercaseKeywords` (default: `true`) auto-capitalizes keywords on format.

## Installation

### From Marketplace (Future)
Once published, you can install it directly from the VS Code Marketplace.

### Manual Installation (VSIX)
1.  Download the `.vsix` file.
2.  Run `code --install-extension 4d-v20-vscode-0.1.1.vsix` or use the **"Install from VSIX..."** command in VS Code.

## Requirements
*   VS Code ^1.80.0

## Extension Settings
This extension contributes the following settings:

*   `4d.uppercaseKeywords`: enable/disable auto-uppercasing of 4D keywords when formatting.

## Release Notes

### 0.1.1
*   Updated metadata and branding.

### 0.1.0
*   Initial release with v20 Modern Syntax support.

