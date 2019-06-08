# WaniKani API

## Installation

This package can be installed from npm.

```shell
# via npm cli
npm install @bytesize/wanikani-api

# via yarn cli
yarn add @bytesize/wanikani-api
```

## Usage

> **NOTE**: This package is written using es2015 modules and will therefore require
> support in whichever runtime you choose.

### Create An API Instance

```js
import wanikani_api from '@bytesize/wanikani-api'

const api = new wanikani_api({
  key: "my-api-key"
  fetch: window.fetch // you can also use something like isomorphic-fetch (https://www.npmjs.com/package/isomorphic-fetch)
});
```

### Fetch Data

```js
// get user info
api.get_user().then(data => {
  console.log(data.user_information);
});

// get study queue
api.get_study_queue().then(data => {
  console.log(data.requested_information);
});

// get level progression
api.get_level_progression().then(data => {
  console.log(data.requested_information);
});

// get srs data
api.get_srs_distribution().then(data => {
  console.log(data.requested_information);
});

// get recent unlocks
api.get_recent_unlocks().then(data => {
  console.log(data.requested_information);
});

// get critical items
api.get_critical_items().then(data => {
  console.log(data.requested_information);
});

// get radicals
api.get_radicals().then(data => {
  console.log(data.requested_information);
});

// get kanji
api.get_kanji().then(data => {
  console.log(data.requested_information);
});

// get vocabulary
api.get_vocabulary().then(data => {
  console.log(data.requested_information);
});
```
