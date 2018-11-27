# Prototype
- Write an employee data model that allows a company to:
 - Create an Employee with:
   - Name
   - Age
   - Email address
   - Job title
   - Status of hire
 - An employee can be:
    - Hired
    - Laid off
    - Retired (at age 65)
    - Promoted
      - Changes job title, email
 - Create a sub-type of employee called Contractor with the following additional criteria:
    - Contract length
    - Boss (of type Employee)

## Extra points:
Include a version of the exercise using the revealing prototype pattern.

# Evaluation Criteria

### Context

Prototype pattern as one which creates objects based on a template of an existing object through cloning.

The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object.


### Problem

Easy way to implement inheritance, but it can also come with a performance boost as well.

An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database.


### Solution

Solution use two approaches , one using `prototype` and `call` for create Contractor & Employee objects.
2nd using JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.


Inside of the extra folder there is a simple example of the use of the pattern.
