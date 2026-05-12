# Web and REST in v20

## Web Server

### On Web Connection

The entry point for standard HTTP requests.

```4d
// On Web Connection database method
var $1 : Text // URL
var $2 : Text // Header
var $3 : Text // Browser IP
var $4 : Text // Server IP
var $5 : Text // User
var $6 : Text // Password

// Parse URL and route
```

### WEB SEND ...

*   `WEB SEND TEXT($text)`
*   `WEB SEND FILE($path)`
*   `WEB SEND BLOB($blob)`

## REST API (ORDA)

Enable "Expose as REST resource" in Structure Settings for tables/dataclasses.

### Custom REST Functions

Define a function in a DataClass class exposed to REST.

```4d
// Users class
exposed Function getActive()
  return This.query("active = true")
```

## HTTP Client

Use `HTTP Request` command or `4D.HTTPRequest` class.

```4d
var $response : Object
$status := HTTP Request("GET"; "https://api.example.com"; $response)
```
