# 4D v20 Language Syntax

## Variables

Use `var` keyword for local and component variables (v20 standard):

```4d
var $text : Text
var $int : Integer
var $obj : Object
var $col : Collection
var $entity : cs.UsersEntity
```

Legacy `C_TEXT`, `C_LONGINT` are supported but discouraged for new code.

## Control Flow

### If / Else

```4d
If (condition)
  // code
Else 
  // code
End if
```

### Case of

```4d
Case of
  : (condition1)
    // code
  : (condition2)
    // code
  Else
    // default
End case
```

### Loops

**For each** (Preferred for collections/selections):

```4d
For each ($item; $collection)
  // code
End for each
```

**While**:

```4d
While (condition)
  // code
End while
```

**For**:

```4d
For ($i; 1; 10)
  // code
End for
```

## Operators

*   **Assignment**: `:=` (e.g., `$a := 10`)
*   **Comparison**: `=`, `#`, `>`, `<`, `>=`, `<=`
*   **Logical**: `&` (AND), `|` (OR), `!` (NOT - deprecated, use `Not`)
*   **String**: `+` (concatenation)

## Comments

*   `// Single line comment`
*   `/* Block comment */`
