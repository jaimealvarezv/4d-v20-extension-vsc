# ORDA (Object Relational Data Access) in v20

## Basics

*   **ds**: DataStore (access to all tables).
*   **Selection**: A set of records.
*   **Entity**: A single record.

## Accessing Data

```4d
// All records
var $all : cs.UsersSelection
$all := ds.Users.all()

// Query
var $sel : cs.UsersSelection
$sel := ds.Users.query("age > :1"; 20)

// Single Entity (Primary Key)
var $user : cs.UsersEntity
$user := ds.Users.get(123)
```

## Creating & Saving

```4d
var $new : cs.UsersEntity
$new := ds.Users.new()
$new.name := "John"
$new.save()
```

## Updating

```4d
$user := ds.Users.get(123)
$user.name := "Jane"
$user.save()
```

## Deleting

```4d
$user.drop()
```

## Relations

ORDA handles relations as object properties:

```4d
// Many-to-One
var $company : cs.CompaniesEntity
$company := $user.company 

// One-to-Many
var $employees : cs.UsersSelection
$employees := $company.users
```

## Optimization context

Use contexts to optimize network requests (Client/Server):

```4d
$sel := ds.Users.all()
// .setRemoteContextInfo(contextName; attributes)
```
