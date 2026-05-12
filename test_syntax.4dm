// 4D Syntax Highlighting Test File
// Comments

// Variables
var $myText: Text
var $myLongint: Longint
var $myObject: Object

[Customers]Name := "John Doe"
[Invoices]Total := 1000

// If
If ($longintVar > 1000)
    ALERT("High Value")
Else
    ALERT("Low Value")
End if
// Case
Case of
    : ($longintVar = 1)
    $textVar := "One"
    : ($longintVar = 2)
    $textVar := "Two"
Else
    $textVar := "Other"
End case
// While
While ($longintVar > 0)
    $longintVar := $longintVar - 1
End while
// For
For ($i; 1; 10)
    $longintVar := $longintVar + $i
End for
// For each
For each ($item; $objVar)
    $textVar := $item.prop
End for each
