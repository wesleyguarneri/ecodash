## Delpoyment Link:
https://ecodash-psi.vercel.app/


## About
This project uses Next.js and arcGIS online (AGOL).

AGOL stores both the building metaData and the energy usage data from the shark meters. The data can easily be queried from
the feature layers which store the data through the hooks that have been set up.

Currently the dashboard has a complete map, sidebar, about page, energy tips page, and a leaderboard for the Kill-a-Watt challenge. The Kill-a-Watt challenge is an annual energy saving competition among the freshman dorms during the fall semester. Since the challenge is over, you might want to hide the page until it's needed again. The about and energy tips pages are simple information pages that you should read through and make changes if needed.  The detail pages are implemented, but more equivalencies could be added.

When running the app locally, you'll notice a hydration error. It hasn't had an effect on development, but it's something you could look into fixing.
Learn more [here](https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render)


## How to Run Locally

Loading the dev environment:
```
npm install
npm run dev
```
or
```
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Loading the prod environment:
```
yarn build
yarn start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Note - The dev environment is easier for development since changes are quickly displayed on localhost without having to rebuild the app. The prod environment will show how the page will be displayed when it's deployed on Vercel, but you need to execute the commands above every time.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

