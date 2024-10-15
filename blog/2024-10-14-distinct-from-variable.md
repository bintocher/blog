---
title: Different values from variable
authors: [chernov]
date: 2024-10-14
tags: [qlik]
---
Let's say you need to extract only unique values from a variable that can be input by the user in a visual part.

<!-- truncate -->

The user inputs values: `1 1 1 1 2 2 2...`, and how do we keep only unique entries in this list?

This can be useful, for example, when building ODAG applications, or for visual analysis of entered data, or in other cases.

In my case, the variable is called `myVar`, and the delimiter is spaces.

![image](/img/2024-10-14/distinct_variable_values.png)

Try this variable definition:
```
=concat(distinct SubField('$(myVar)',' ',ValueLoop(1,$(=SubStringCount(myVar,' '))+1)),' ')
```
