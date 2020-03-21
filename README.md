# CovPY Auto Reporte

This project was created as an initiative by Penguin Academy to build technology that smooths the peak impact of the COVID-19 pandemic on the Paraguayan Health System.

🐧🇵🇾🦠

This is an auto reporting system, allowing anyone to access it, report their symptoms and get a quick feedback on what steps to take next as well as allowing to generate data on the situation. Through an early detection we can effectively calculate the transmission rate, flatten the curve and earn more time to fight against the virus.

## Demo and Contributing

As we received many requests for collaboration, we decided to clean up and open source this repository. It is entirely built on open source technology and can be a starting point to build an application for your country or specific target group.

### Contibution Guidelines ♥️

We welcome contributions! Please check the open issues to see what is needed at the moment. If those issues are not well specified  or there is nothing you can work on, contact us or open an issue to see if there is something else available you can work on.

Check our [Contribution Guide](./CONTRIBUTING.md) for instructions on how to contribute to the project.

### Demo 👀

A demo is available [here](https://covpy.netlify.com/). And the visual documentation (Storybook) is available [here](https://covpy-book.netlify.com/).

### Development 👩‍💻

This project uses [Storybook](https://storybook.js.org/). So you can run `yarn storybook` to start a storybook development server and enjoy the comfort to develop components and visually test them.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br /> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br /> It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

There are further scripts and documentation [available here](create-react-app.md)

## Deployment 🦸‍♀️

You can use [netlify](https://netlify.com/) to host the web app and setup a continous building process from the master branch. You will have to add the environment variables for your Firebase Backend in netlify! 👉Also make sure to secure the Firebase Backend as it is open to anyone to read the data in there per default!

## Other

This project uses [Froala Design Blocks](https://github.com/froala/design-blocks) an open source design framework with blocks based on the Bootstrap Library. They are the building blocks for beautiful websites. We converted the components to react and you can find them under [/src/templates] and in [Storybook](https://covpy-book.netlify.com/?path=/story/template--ctas)

### Funding 💸

You may provide financial support for this project by donating. [Get in touch](mailto:hello@penguin.academy) with us! Thank you for your support!

### About 🐧

`CovPy` is developed and maintained by [Penguin Academy](https://penguin.academy), [UCOM](http://www.ucom.edu.py/), [the Product Lab](https://www.theproductlab.co/), [Web Paraguay](https://webparaguay.com/), [Okimo](http://optometry.okimo.co/), and other organizations as well as many [amazing contributors](https://github.com/penguin-academy/covid-19-py/graphs/contributors) ❤️. If you're interested in learning more about what Penguin ACademy can do for your company, please [get in touch](mailto:hello@penguin.academy)!

### License

CovPY is [LGPL licensed](./LICENSE).
