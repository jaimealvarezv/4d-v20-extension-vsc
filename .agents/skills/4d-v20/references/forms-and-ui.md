# Forms and UI in v20

## Form Objects

Access form objects by name (String) or variable (if bound).

### Collection-based ListBox

Bind a ListBox to a collection property of the Form.

```4d
// Form load
Form.users := ds.Users.all().toCollection()
```

### Events

Check `Form event code` in the form method or object method.

```4d
Case of
  : (Form event code = On Load)
    // init
  : (Form event code = On Clicked)
    // handle click
End case
```

## Dynamic Forms

Use `DIALOG` with a form definition object (JSON) if building dynamic UIs.
