# useless-npm-package

Video: https://www.youtube.com/watch?v=J4b_T-qH3BY&t=20s

Channel Name: 
Web Dev Simplified

Commands to run:

inside package: npm link

1. Creates a Global Link
When you run npm link in your package directory, it:
Creates a symbolic link in the global node_modules directory pointing to your local package
Makes your package available globally as if it were installed via npm install -g

2. For Your "useless-npm-package"
Since your package has:
"name": "useless-npm-package"
"main": "index.js"
Running npm link would:
Create a global link so you can run useless-npm-package from anywhere
Allow other projects to use your package locally during development



