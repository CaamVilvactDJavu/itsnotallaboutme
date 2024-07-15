# Markdown Syntax Guide

## Headings

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

_Italic_  
_Italic_

**Bold**  
**Bold**

**_Bold and Italic_**  
**_Bold and Italic_**

~~Strikethrough~~

## Lists

### Unordered

- Item 1
  - Subitem 1
  - Subitem 2
- Item 2
- Item 3

### Ordered

1. First item
2. Second item
3. Third item

### Task List

- [ ] Task 1
- [x] Task 2
- [ ] Task 3

## Links

[Inline Link](https://www.example.com)  
[Inline Link with Title](https://www.example.com "Example Site")

### Reference Link

[Reference Link][example]  
[Reference Link with Title][example-title]

[example]: https://www.example.com
[example-title]: https://www.example.com "Example Site"

## Images

![Alt Text](https://www.example.com/image.jpg)  
![Alt Text with Title](https://www.example.com/image.jpg "Image Title")

### Reference Image

![Reference Image][image]

[image]: https://www.example.com/image.jpg

## Code

### Inline Code

`inline code`

### Block Code

#### Fenced Code Block

#### Specifying Language

```python
def hello_world():
    print("Hello, world!")
```

### Indented Code Block

    This is an indented code block.

## Blockquotes

> This is a blockquote.
>
> This is the second paragraph in the blockquote.
>
> ### This is an H3 in a blockquote

## Horizontal Rule

---

---

---

## Tables

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Cell     | Cell     |
| Row 2    | Cell     | Cell     |
| Row 3    | Cell     | Cell     |

## Inline HTML

You can use <b>HTML tags</b> within Markdown for more control.

## Escaping Characters

\* This text is surrounded by literal asterisks. \*

## Footnotes

Here is a footnote reference[^1].

[^1]: This is the footnote content.

## Definition Lists

Term
: Definition

Another Term
: Another Definition

## Abbreviations

Markdown converts "HTML" to HTML automatically, but we can define an abbreviation as well: \*[HTML]: HyperText Markup Language

## Automatic Links

<https://www.example.com>

## GitHub Flavored Markdown (GFM)

- [x] Task list item
- [ ] Task list item
- Tables
- ~~Strikethrough~~
- Autolinks: https://www.example.com

## Syntax Highlighting

Use fenced code blocks with language identifiers for syntax highlighting. For example:

```rust
fn main() {
  add_one(1);
}

fn add_one(x: i32) -> i32 {
  x + 1
}
```
