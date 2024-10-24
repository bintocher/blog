---
title: What are Macro-functions in Qlik?
authors: [chernov]
date: 2024-10-24
tags: [qlik, qliksense, functions, macro, sub, eRows, eRoundSec, eDropTableIfExists, eTableHeader]
---

We all know that there are functions in Qlik, but we know little about macro functions. What is it?

It's the functions which simplify the development!

For example, I want to output to the script execution console the number of rows of the table just loaded, as I did before?

```
LET myVar = NOOFROWS('myTable');
TRACE 'myTable has $(myVar) rows';
SET myVar;
```

And now?

```
$(eRows('myTable'));
```

What's Easier for You?

Macro functions examples:
- To find the minimum value in a field and store it in a variable with a single line of script?
- To delete a table if it exists with a simple command?
- To perform Concatenate/NoConcatenate without having to think about exist table or not?
and other ...

<!-- truncate -->

We'll start with the basic building blocks of macro substitution: essential functions that form the foundation for more advanced techniques. In subsequent articles, we'll explore more sophisticated expressions that streamline script development and enhance productivity

### eRows() - A function designed to output the table's row count to the console.

```
SET eRows = CALL ls_t_rowcount($1);
SUB ls_t_rowcount(ls_tname)
    LET ls_r_qty = NOOFROWS('$(ls_tname)');
    TRACE '$(ls_tname): rows count = $(ls_r_qty)';
    SET ls_r_qty;
    SET ls_tname;
END SUB;
```

Example:

```
tableName:
LOAD *
FROM ...;

$(eRows('tableName'));
```

### eRoundSec() - A timestamp rounding function, which reduces the precision of timestamps to seconds only

You can use it in script and visual part.

```
LET ONE_SECOND = 1 / 86400;
SET eRoundSec = Round($1, $(#ONE_SECOND));
```

Example:
```
$(eRoundSec(makedate(2024,10,20) + maketime(6,5,8)));
```

### eDropTableIfExists() - Drop table if it exists in model, without errors

```
SET eDropTableIfExists = CALL DropTableIfExists($1);
SUB DropTableIfExists(_tableName)
    If TableNumber(_tableName)>=0 Then
        Drop Table [$(_tableName)];
    End If
End Sub
```

Example:

```
$(eDropTableIfExists('myTable'));
```

### eTableHeader() - Return Concatenate if table exists, or NoConcatenate if not exits

```
SET eTableHeader = If(TableNumber('$1')>=0, 'Concatenate([$1])', 'NoConcatenate [$1]:');
```
Examples:


#1
```
LET vTableName = $(eTableHeader(myTable));
$(vTableName)
LOAD
    1 as myValue
AUTOGENERATE 1;
```

#2

```
// First time $(vTableName) will be NoConcatenate [myTable]:
// Second and other times $(vTableName) will be Concatenate [myTable]:

FOR file in filelist ....

    LET vTableName = $(eTableHeader(myTable));
    $(vTableName)
    LOAD
        1 as myValue
    AUTOGENERATE 1;

NEXT file
```
