# toastmasters
Updated version of http://dbatoastmasters.com/dba/index.html

## Installation
1. `cd toastmasters-angular`
2. `npm install -g @angular/cli`
3. `npm install`
4. `ng serve`

Should be up on http://localhost:4200/

## Stack
We are using:
- Angular 2
- Boostrap 4
- toastmasters API found here: https://terrylp.ics415.com/toastmasters/api/

## Development
I've created empty components with Typescript, HTML, and CSS files. These components can be found in their respective directories inside of the `components` directory.

In the `services` directory, I have created services that interact with the toastmasters API. Each function is well documented so please take a look at how to correctly use it. If you need an example on how to call the service within a component, then take a look at either the `about` or `update-member-info` component.


