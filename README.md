# File Name Conventions

A collection of guidelines for writing file names used in this project.

## Possible characters

### Use dashes as delimiters

- You should use dashes (-) as delimiters.
- Periods are allowed in some cases, such as for languages and conditions.
- Never use spaces or underscores. Spaces are converted to %20 in URLs or can break an URL when shared. Underscores are difficult to see when the file name is displayed as an underlined link. Although the use of underscores does not impact your ranking that much, [Google advices not to use underscores](https://www.youtube.com/watch?v=AQcSFsQyct8).
- Exceptions apply for functional requirements, such as for [Sass partials](http://sass-lang.com/guide#topic-4). A leading underscore informs the Sass compiler a file is only a partial file and should never be generated into a stand alone CSS file.

**Right:**

```
file-name-with-dashes.en.min.html
```

### Do not use special characters

Avoid using non-alphanumeric characters in file names, such as: '\*' ':' '\' '/' '<' '>' '|' '"' '!' '?' '[' ']' ';' '=' '+' '&' '£' '$' '€' '%' or ','. These characters can have special meaning in programming languages or can cause problems with different operating systems.

### Use lowercase, never uppercase

We should always consider URLs as case-sensitive, therefore, use lowercase to reduce errors when typing URLs.
