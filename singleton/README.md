# Singleton

- [x] Organize the [code in this example](https://github.com/brurez/js-design-patterns/blob/master/factory/simple.js) of a Factory design pattern into a Singleton.

- [x] Log creation of files onto the console. Example: `PDF file was created`

- [x] The singleton instance should be able to be consumed and used by global accessors.

## Extra points:
- [x] Explain how Services and Providers in Angular are Singletons.

Providing a singleton service
There are two ways to make a service a singleton in Angular:

- Declare that the service should be provided in the application root.
- Include the service in the AppModule or in a module that is only imported by the AppModule.

When you provide the service at the root level, Angular creates a single, shared instance of the `Service` and injects into any class that asks for it. Registering the provider in the `@Injectable` metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.

```javascript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserService {
}
```

Inside of the extra folder there is a simple example of the use of the pattern.
