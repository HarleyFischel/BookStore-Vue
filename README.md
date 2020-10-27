# BookStore-Vue
BookStore frontend interface using Vue
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# served at: localhost:8080
npm run dev

http://localhost:8080/

# build for production
npm run build

# view the bundle and report
npm run build --report
```

####Development configuration
``` js
// config/dev.env.js

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://localhost:8000"'
})
```

####Production configuration
``` js
// config/prod.env.js

module.exports = {
  NODE_ENV: '"production"',
  API_URL: '"http://app.azii.io"'
}
```