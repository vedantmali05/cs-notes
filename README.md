# cs-notes

- [Live Site Url - cs-notes](https://vedantmali05.github.io/cs-notes/)

## JSON Codes for Snippets (HTML)

```json
// Paragraph Snippet
    "Notes - Prose-para": {
        "prefix": "prose-para",
        "body": [
            "<p class=\"prose-para\">$1</p>"
        ],
        "description": "prose-para snippet"
    },
```

```json
 // Subtopics
    "Notes - Subtopics": {
        "prefix": "prose-subtopic",
        "body": [
            "<article class=\"subtopic-$1\">$2</article>",
        ],
        "description": "subtopic snippet"
    },
```

```json
// Headings
    "Notes - heading": {
        "prefix": "prose-heading",
        "body": [
            "<h$1 class=\"prose-heading-$1\">$2</h$1>",
        ],
        "description": "heading snippet"
    },
```
``` json
// Lists
    "Notes - List": {
        "prefix": "prose-list",
        "body": [
            "<$1 class=\"prose-list\">",
            "<li class=\"prose-para\">",            
            "</li>",
            "</$1>"
        ],
        "description": "heading snippet"
    },
```
``` json
// Bold Highligthing
    "Notes - highlight": {
        "prefix": "highlight",
        "body": [
            "<span class=\"highlight\">$1</span>",
        ],
        "description": "heading snippet"
    },
```

``` json
// Keybox for Callouts or Keypoints
    "Notes - Key - Callout": {
        "prefix": "key-callout",
        "body": [
            "<aside class=\"key callout\">",
            "<div class=\"key-header\">",
                "<span class=\"key-icon\">💡</span>",
                "<h2 class=\"prose-heading-2\">Key Point - $1</h2>",
            "</div>",
            "<div class=\"key-content\">",
                "<p class=\"prose-para\">$2</p>",
            "</div>",
        "</aside>",
        ],
        "description": "Callout keybox snippet"
    },
```
``` json
    // Keybox for Tips or Simplifications
    "Notes - Key - tip": {
        "prefix": "key-tip",
        "body": [
            "<aside class=\"key tip simplification\">",
            "<div class=\"key-header\">",
                "<span class=\"key-icon\">🙂</span>",
                "<h2 class=\"prose-heading-2\">Tip - $1</h2>",
            "</div>",
            "<div class=\"key-content\">",
                "<p class=\"prose-para\">$2</p>",
            "</div>",
        "</aside>",
        ],
        "description": "Tip keybox snippet"
    },
```
``` json
    // Keybox for Definition Box
    "Notes - Key - definition": {
        "prefix": "key-definition",
        "body": [
            "<aside class=\"key definition\">",
            "<div class=\"key-header\">",
                "<span class=\"key-icon\">📙</span>",
                "<h2 class=\"prose-heading-2\">Definition - $1</h2>",
            "</div>",
            "<div class=\"key-content\">",
                "<p class=\"prose-para\">$2</p>",
            "</div>",
        "</aside>",
        ],
        "description": "definition keybox snippet"
    },
```
``` json
    // Keybox for Additional Information on something
    "Notes - Key - additonal-point": {
        "prefix": "key-additonal-point",
        "body": [
            "<aside class=\"key additonal-point\">",
            "<div class=\"key-header\">",
                "<span class=\"key-icon\"><i class=\"bi bi-plus-circle\"></i></span>",
                "<h2 class=\"prose-heading-2\">More - $1</h2>",
            "</div>",
            "<div class=\"key-content\">",
                "<p class=\"prose-para\">$2</p>",
            "</div>",
        "</aside>",
        ],
        "description": "additional point keybox snippet"
    },
```
``` json
    // Keybox for Mathematical Equations or Formulas
    "Notes - Key - mathematical-formula": {
        "prefix": "key-mathematical-formula",
        "body": [
            "<aside class=\"key mathematical-formula\">",
            "<div class=\"key-header\">",
                "<span class=\"key-icon\"><i class=\"bi bi-123\"></i></span>",
                "<h2 class=\"prose-heading-2\">Formula for $1</h2>",
            "</div>",
            "<div class=\"key-content\">",
                "<span>$2</span>",
            "</div>",
        "</aside>",
        ],
        "description": "mathematical formula keybox snippet"
    },
```
``` json
    // Keybox for Code Snippets based on topic
    "Notes - Key - code": {
        "prefix": "key-code",
        "body": [
            "<aside class=\"key code\">",
            "<div class=\"key-header\">",
                "<span class=\"key-icon\"><i class=\"bi bi-code-square\"></i></span>",
                "<h2 class=\"prose-heading-2\">$1</h2>",
            "</div>",
            "<div class=\"key-content\">",
                "<pre>$2</pre>",
            "</div>",
        "</aside>",
        ],
        "description": "code keybox snippet"
    },
```

