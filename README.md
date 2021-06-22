#  Dates Constructor Guide

## Description

Easily construct dates using a shorthand syntax that looks like 'now-1d/d'. There are two main functions, 
one called `parse` which will take a string like the above and return a date, and another called `stringify`
which will take a date, and return a string like the above.


> Includes two main functions: `parse` and  `stringify`.

> Also inclused sub modular functions in the `utils` folder which can be reused

## Commands

 In the `/index.ts` file call for example: 
   `stringify(new Date('June 23, 2022 23:15:30 GMT+11:00'))` 
 
   `parse('now+1w')`



To run and see the results in you terminal, use :

```bash
yarn # or npm install
```

```bash
yarn start # or npm start 
```

## What can be improved
 1. Adding unit tests
 2. Adding a better way to handle rounding off to the nearest unit
 3. Adding a way to handle different locales and time zones

## Problems found
 1. Handling rounding off to a nearest unit(what is the context of the nearest unit)
