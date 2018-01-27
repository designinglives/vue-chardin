# vue-chardin

> VueJS plugin for integration with Chardin.js

## Installation

### Using yarn

`yarn add vue-chardin`

### Using npm

`npm i --save vue-chardin`

## Example

Under `example` directory

`npm run serve`

## Usage

```jsx
import VueChardin from 'vue-chardin';
import 'vue-chardin/dist/vue-chardin.min.css';

Vue.use(VueChardin);
```


### UMD

```html
<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./umd/vue-chardin.min.js" charset="utf-8"></script>
<link href="./umd/vue-chardin.min.css" rel="stylesheet">
```

## Build

Build configuration is located in the `poi.config.js` file, to build just run: `npm run build`, it will build to `dist` directory.

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [Apache 2](https://www.apache.org/licenses/LICENSE-2.0)
