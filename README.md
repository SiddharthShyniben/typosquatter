# typosquatter

A mistake we all make:

```js
Object.kys(someObj);
```

Don't you wish that the code just ignored your typo and _just worked_?
Worry no more! Just use typosquatter.

```js
import typosquatter from 'https://deno.land/x/typosquatter/mod.ts';

let obj = typosquatter({foo: {bar: {baz: 'lol'}}});

console.log(obj.fo.ba.bz.substrng(1)); // => lol
```

See? No more typos et al.

Seriously thought, don't use it in real life. The only reason to use it is when
you are experimenting with code and the last thing you need is an error because
of a typo.
