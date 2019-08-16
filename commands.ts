---ANGULAR---
By default all generated files go in into src\app, no folder is created.

npm install -g angular-cli          Install the CLI
npm install --global @angular/cli@7.0.2
ng -v, --version, version           Check the Angular version    

ng new <projectName>                Creates a new project
ng serve                            Serve our application using a local web-server
ng build                            Builds a development build. No optimization.
                                    Bundles all .js, .css, .html into smaller set of files in folder /dist. Can be hosted on a site.
ng build --prod                     Builds a production build with optimization.
ng test                             Builds project and runs all the tests, any errors are output to the terminal

ng generate component <CompName>    Create a component
(ng g c <CompName>)
ng g component ./src/app/foo/bar    Create a component called BarComponent in the folder ./src/app/foo/bar
ng g service MyService              Creates MyService
ng g class MyClass                  Creates MyClass
ng g interface MyInterface          Creates MyInterface
ng g enum MyEnum                    Creates MyEnum
ng generate directive|pipe|service|class|guard|interface|enum|module

npm install moment --save           Download and use moment.js as module/library in Angular application.
npm install bootstrap@next          Install the bootstrap library via npm

ng add @angular/material            Add material 


---IONIC---
https://ionicframework.com/docs/cli List of all commands

npm install -g ionic@latest         Get latest ionic version
ionic --help                        Show help/commands
ionic <ommcand> --help              
ionic serve
