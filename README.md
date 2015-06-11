# Unicorne

Convert a unicode string to a string of Javascript escape sequences.

### Installation

Install via `npm`.

```sh
npm install unicorne
```

### Usage

```js
var unicorne = require('unicorne');

unicorne('La proprietà [{0}] della classe [{1}] con valore [{2}] non è un URL valido');
// > La propriet\\u00e0 [{0}] della classe [{1}] con valore [{2}] non \\u00e8 un URL valido
```
