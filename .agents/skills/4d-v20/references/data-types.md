# 4D v20 Data Types

## Core Types

| Type | Keyword | Description |
| :--- | :--- | :--- |
| **Text** | `Text` | Unicode strings. |
| **Integer** | `Integer` | 4-byte integer (Legacy `Longint` is 4-byte). |
| **Real** | `Real` | 8-byte floating point. |
| **Boolean** | `Boolean` | `True` or `False`. |
| **Date** | `Date` | `!YYYY-MM-DD!`. |
| **Time** | `Time` | `?HH:MM:SS?`. |
| **Object** | `Object` | JSON-like structure. `{ "prop": value }`. |
| **Collection** | `Collection` | Ordered list. `[ value1, value2 ]`. |
| **Variant** | `Variant` | Can hold any type (including `Null`). |
| **Picture** | `Picture` | Image data. |
| **Blob** | `Blob` | Binary data. |

## ORDA Types

*   `cs.TableEntity`: A specific entity class.
*   `cs.TableSelection`: A selection of entities.
*   `4D.Entity`: Generic entity.
*   `4D.EntitySelection`: Generic selection.

## Null & Undefined

*   **Null**: explicit null value. Supported in `Object`, `Collection`, `Variant`.
*   **Undefined**: Property does not exist.
*   Check: `If ($obj.prop = Null)` or `OB Is defined($obj; "prop")`.

## Collections vs Arrays

Prefer **Collections** in v20.

*   **Initialize**: `$col := New collection` or `$col := []`.
*   **Access**: `$col[0]`.
*   **Methods**: `.push()`, `.length`, `.map()`, `.query()`.
