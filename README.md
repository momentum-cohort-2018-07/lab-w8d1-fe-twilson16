# Lab W8D1 Frontend -- Decomposing React Components

This purpose of this lab is to practice using props and state by breaking a monolithic React application into multiple components.

The current application is called "TweetShrink" and it is used to turn a section of text into a shorter section of text by applying a series of transformations. The user can choose the transformations to use.

This application should be broken into the following components:

* App -- the top-level component, should have only state and a minimal `render()`
* TextInput -- the input element for text
* ShrinkText -- the shrunken output
* TextOptions -- the container for all text shrinking options
* TextOption -- an individual text shrinking option

`App.js` has comments in it to indicate where the application should be broken up.

The decomposed (that is, broken up into multiple components) app should have the same functionality as the original application.
