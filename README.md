# wdio-sauce

# How to run the test!

The first thing that you need to do is to run:

```sh
$ npm install
```

This will generate the nodule modules folder.

After that you can choose where to run the test:

- Using your chrome browser of your laptop

To run it locally you can check the package.json. In there you can see the following script:

```sh
$ npm run test:run,
$ npm run test:run:prod,
$ npm run test:run:dev,
```

This script has some ENV variables that will help you to set up the test:


# Variables to run the test

BASE_URL -> define url where to run tetst

Once you set that up, the next step is to run the test:

```sh
$ npm run test:run:prod
```
