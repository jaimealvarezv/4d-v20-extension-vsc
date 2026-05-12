# Query Patterns in 4D v20

## Standard ORDA Query

Use `ds.Table.query(queryString; ...params)`.

### Placeholders (Recommended)

Numeric placeholders:
```4d
$sel := ds.Users.query("name = :1 AND age > :2"; "John"; 25)
```

Named placeholders:
```4d
$sel := ds.Users.query("name = :name"; { "name": "John" })
```

### Formula Query

For complex logic or checking relations:

```4d
$sel := ds.Users.query("company.name = :1"; "Acme")
```

### Ordering

```4d
$sel := $sel.orderBy("name asc, age desc")
```

### Pagination

```4d
$subset := $sel.slice($start; $limit)
```

## Classic 4D Query (Legacy)

Avoid standard `QUERY` command in new v20 code if possible. Prefer ORDA.
If needed:

```4d
QUERY([Users]; [Users]name="John")
```
