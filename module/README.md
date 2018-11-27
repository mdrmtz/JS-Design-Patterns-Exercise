
# Module
- Organize the [code in this example](https://github.com/brurez/js-design-patterns/blob/master/prototype/multiple-inheritance.js) of a Prototype design pattern into a Module pattern.
- Create a module that exposes public and private methods and properties.
- Methods should output text messages to the console.
  - Example of an output: `'called the isTooTall() method'`
- The module should be able to be consumed and used by global accessors.
## Extra points:
- [x] Include a version of the exercise using the revealing module pattern.

# Evaluation Criteria

### Context

Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.

The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.

### Problem

In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object.

### Solution

The problem defined  Chair, Wheel, WheelChair and Battery objects.
Declaring a module for each element:
  - ChairModule
  - WheelModule
  - BatteryModule
  - WheelChairModule
  - LogModule

For Chair and WheelModule will use LogModule to show how augment modules could be use.

Inside of the extra folder there is a simple example of the use of the pattern.
