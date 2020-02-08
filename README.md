# Make Fixture

## Introduction

This is a very light-weight npm package that provides a quick and easy method for creating new references to fixture objects for testing.

### The Why

JavaScript is a pass-by-reference language. This means that, when you pass a variable into a function, the function has the ability to change the original value of the variable. This can wreak all manor of havoc and writing [immutable](https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2) JS has exploded in popularity in recent years in response.

But not all code that we work with will always be immutable. And our team found pretty quickly that non-immutable code could make unit testing a horrifically painful experience. We were working on a number of codebases with crazy data that could include JS objects neste 4, 5, or 6+ layers down. When it came time to unit test these codebases, we simply created JS objects and started throwing those into our tests. We quickly started seeing early tests throwing off later ones because the objects were being changed by those first tests and throwing off the results of the later tests.

At first, our solution was to utilize lodash's cloneDeep function. But then every single one of our tests started with deep cloning (an expensive operation) insanely large JS objects (an exponentially more expensive operation). This quick first pass at solving this problem was not scalable.

### The Solution

So Robbie came up with the idea behind make-fixture. At first, we utilized JS classes and the `new` operator every time we wanted to create a new fixture of a certain type. This was a little cumbersome of an implementation, but it was better than the alternative!

Then Kevin noticed that the only reason we were doing this was to force JS to pick a new spot in memory each time it created new fixture data. They suggested that we could accomplish the same thing by instantiating the default fixture object inside of a new function call. Every time the function was called, a new `const` variable would be declared, and a brand new spot in memory would be chosen for the new fixture object. This implementation was far cleaner and it's the one in this package.

## Examples

Using the make-fixture package is dead-simple. Just take a look at the examples in the `examples` directory! To create a new type of fixture object (let's use the `makeCompanyFixture` example in `examples/company.ts`), just declare a function named `makeCompanyFixture` that takes an `overrides` parameter. This parameter is optional and a TS Partial of the type of fixture object you're creating.

Create a default object of type `Company`. (We've found that it's good practice to only create default values for the key-value-pairs that are NOT optional. You can always create those optional parameters for one specific test or another by passing them in with your call to your custom `make____Fixture` function.) Then just pass your defaults into make-fixture's `makeFixture` function, which will override the defaults with whatever overrides are passed in!

## TypeScript

We highly recommend TypeScript on any project being written in JS! make-fixture is TS-friendly and TS automatically infers all types going into and out of your custom `make____Fixture` functions!
