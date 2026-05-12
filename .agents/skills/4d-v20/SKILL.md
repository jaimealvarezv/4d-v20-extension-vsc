---
name: 4d-v20
description: Comprehensive 4D v20 development skill with embedded documentation.
---

# 4D v20 Development Skill

This skill provides expert knowledge for developing in 4D v20. It includes embedded official documentation and best practice guides tailored for version 20.

## 📚 Documentation Router

| Topic | Reference File | Description |
| :--- | :--- | :--- |
| **Language Syntax** | [language-syntax.md](references/language-syntax.md) | `var`, operators, control flow, v20 specifics. |
| **Data Types** | [data-types.md](references/data-types.md) | Collections, Objects, Variants, typing rules. |
| **ORDA** | [orda-modern.md](references/orda-modern.md) | Entity Selections, DataClass, optimization. |
| **Queries** | [query-patterns.md](references/query-patterns.md) | Placeholders, formula queries, optimization. |
| **Error Handling** | [error-handling.md](references/error-handling.md) | `ON ERR CALL`, `Try/Catch` (check availability). |
| **Web & REST** | [web-and-rest.md](references/web-and-rest.md) | Web Server, REST API, HTTPRequest. |
| **Forms & UI** | [forms-and-ui.md](references/forms-and-ui.md) | Form objects, events, list boxes. |

## ⚠️ Critical v20 Rules

1.  **Variable Declaration**: ALWAYS use `var $name : Type`. Avoid `C_TEXT` unless modifying legacy code.
2.  **Assignment**: Use `:=` for assignment found in legacy/standard mode. v20 allows `=` in some contexts but `:=` is safer for compatibility.
    *   *Note*: If "Use standard assignment =" option is on, `=` is fine. Default to `:=` to be safe.
3.  **Collections vs Arrays**: Prefer **Collections** (`[]`) and **Objects** (`{}`) over Arrays (`ARRAY TEXT`).
4.  **Query Literals**: Use placeholders (`:1`, `:2`) or `: $var`. NEVER concat strings into queries (SQL injection checks).
    *   *Safe*: `ds.Users.query("name = :1", $name)`
5.  **Null**: Use `Null` keyword. Check with `Unknown value` or `Assert` helper if needed.
6.  **Linked Collections**: When using `[table]`, remember it returns a selection. To get a collection, use `ds.Table.all().toCollection()`.

## 🚫 v21+ Features to AVOID (v21-only)

Do **NOT** use the following features unless you are certain the project is v20 R7+ or v21:

*   **HTTP Classes**: `4D.IncomingMessage`, `4D.OutgoingMessage` (v20 R6+). Use `On Web Connection` / `WEB GET BODY` for standard v20 servers.
*   **File Handles**: `4D.File.Handle` (v21). Use `File` and `Document to text` / `Text to document` or `File.getContent()`.
*   **Singleton Classes**: `shared singleton Class`. Use `Storage` for singletons in v20.
*   **Try/Catch**: Available in v20 R4+. If base v20, use `ON ERR CALL`. **Verify exact v20 R-release**.

## 🔍 Searching Documentation

The official 4D v20 documentation is embedded in the `docs/` directory.
To find information about a command or class:

1.  **Search References**: Check `references/` first for high-level patterns.
2.  **Grep Docs**: Use `grep_search` or `find_by_name` in `docs/` folder.
    *   Example: `grep -r "HTTP Request" docs/`
3.  **API Index**: See [api-index.md](references/api-index.md) for a map of standard commands.

## REST Contract

When building REST APIs in v20:
*   **Success**: `{ "ok": true, "data": ... }`
*   **Error**: `{ "ok": false, "error": { "code": 123, "message": "..." } }`
*   Use `Web Server` class or `On Web Connection` database method.
