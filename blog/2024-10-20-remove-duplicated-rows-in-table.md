---
title: Remove duplicated rows by index field from a table - how?
authors: [chernov]
date: 2024-10-20
tags: [qlik, qliksense, distinct, inline table, distinct rows, table]
draft: true
---

![image](/img/2024-10-20/pgljmafPye.png)

How?

<!-- truncate -->

I have table:

|index|name|value|
|---|---|---|
|1|name1|1|
|1|name1|2|
|1|name2|3|
|2|name3|1|
|2|name4|2|

and want to convert it to:

|index|name|value|
|---|---|---|
|1|name1|1|
|2|name3|1|

Answer:

``` qlik
// Create inline table
myTable:
LOAD * INLINE [
index, name, value
1, name1, 1
1, name1, 2
1, name2, 3
2, name3, 1
2, name4, 2
];

// Create new table without duplicates
NOCONCATENATE
myTable_uniq:
LOAD
    index
    , index as index_temp
    , name
    , value
RESIDENT myTable
WHERE NOT EXISTS(index_temp,index)
;
DROP FIELD index_temp;
DROP TABLE myTable;
```
