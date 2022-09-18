## Official gophysics website repository
![GitHub](https://img.shields.io/github/license/Gabri432/gophysics)
![GitHub go.mod Go version](https://img.shields.io/github/go-mod/go-version/Gabri432/gophysics)
[![Go Reference](https://pkg.go.dev/badge/github.com/Gabri432/gophysics.svg)](https://pkg.go.dev/github.com/Gabri432/gophysics)

This is the repository of the gophysics library website.

### Website structure
- The website will be composed by four sections:
  - gophysics (main), showing how the library can be used
  - Documentation page, showing the list of Physics formulas and constants of the library
  - About page, giving a general overview about the library
  - Chatbot, a simple rule-based chatbot to help the user with some basic operations.


### Project structure
- gophysics.io (main)
  - index.html
  - license
  - readme
  - style.css
- routes
  - about
    - .html/css/js
  - docs
    - .html/css/js
- chatbot
  - .html/css/js

### Notes
- The project was made with pure Html, Css and Javascript. But I am considering Angular13+ if the website gets bigger.
- The website makes use of a simple rule-based chatbot to help the user with simple tasks such as:
  - finding a specific constant of formula/function
  - redirecting the user to the github repository pages if he/she needs to report a bug or suggestion.