# City Bike Journeys App

This React functional component displays data about bike stations and journeys from an API. The app allows users to select a station, view a list of journeys, and sort and paginate the journey data.

## Features

- Select a station from a dropdown list
- Sort journey data by duration, distance, or station name
- Paginate through the journey data

## Getting Started

To run the project, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1. Clone the repository: `git clone https://github.com/tonikv/citybike-ui.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

Open `http://localhost:3000/citybike-ui` to view the app in the browser.

## Testing

The project uses [Jest](https://jestjs.io/) for unit testing. To run the tests, use the command `npm test`.

## Continuous Integration (CI) Workflow

This project uses a GitHub Actions CI workflow to automate the testing, building, and deployment process. The workflow is triggered on every push and pull request for the `refactor` branch.

The CI workflow includes the following steps:

1. **Checkout repository**: Clones the repository using the `actions/checkout@v3` action.
2. **Set up Node.js**: Sets up the specified Node.js version using the `actions/setup-node@v3` action.
3. **Install dependencies**: Installs the project dependencies using `npm ci`.
4. **Run lint**: Checks the code for linting issues using `npm run lint`.
5. **Run tests**: Executes the unit tests using `npm test`.
6. **Build project**: Builds the project using `npm run build`.
7. **Deploy to GitHub Pages**: Deploys the built project to GitHub Pages using the `peaceiris/actions-gh-pages@v3` action.

## Deployment

- The project is hosted on [Github Pages](https://tonikv.github.io/citybike-ui/)

## Built With

- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript
- Fetch API: A web standard for making network requests
- Leaflet: An open-source JavaScript library for mobile-friendly interactive maps
