# Error Handling in 4D v20

## Global Error Handler

Install a method to catch errors project-wide or per-process.

```4d
ON ERR CALL("ErrorHandler")
```

Inside `ErrorHandler`:

```4d
var $err : Object
$err := Last errors[0]
// $err.code, $err.message, $err.componentSignature
```

## Try / Catch (v20 R4+)

**Check your specific v20 release.** Standard v20 might not have `Try/Catch` blocks depending on the R-release installed.
If R4+ is confirmed:

```4d
Try
  // risky code
Catch ($err)
  // handle error
End try
```

## Defensive Programming

Always check for `Null` or valid entity before accessing properties.

```4d
$user := ds.Users.get($id)
If ($user # Null)
  // safe
Else
  // handle not found
End if
```
