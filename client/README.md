# Note za developere koji budu pregledali task

Ovo je progress unutar 24h rata i aplikacija ima dosta nedostataka:

##### Error Interceptor

Error interceptor koji presreće response koji dobijamo od API-a i prikazuje ga adekvatno u aplikaciji

##### Auth status

Trenutno se refresh i access tokeni snimaju u localstorage i ako nešto ima u localstorage znači je korisnik auth.
Međutim, ovako se ne smije raditi. Refresh token se treba snimiti u httponly cookie
Iako nije zahtijevano zadatkom, treba napraviti auth interceptor koji u headers dodaje 'Bearer ' + accessToken
kako bi se mogoa poslati autorizovan req na api. Također, super je praksa da imamo auto authentikaciju korisnika,
ukoliko nije uradio logout. Kada se aplikacija starta, može se provjeriti da li postoje podaci u localStorage i cookies,
ili poslati GET req na /api/v1/sessions i na osnovu toga, ukoliko je validna sesija, automatski autorizovati korisnika.

##### State management

Poprilično je "haotično" bez redux-a, obično je super praksa da imamo centralizovani sistem za state management
(slično kao servisu u Angular2+). Tako bismo mogli imati podatke da li je korisnik auth kao prop u nekoj komponenti
i dinamički ga renderovati, jer deeply nested props binding može biti veoma konfuzno.

##### Feedback

Ako želite možete mi ostaviti feedback na najvažnije stvari kako bih mogao ispraviti.
Ukoliko je redux i redux-thunk mandatoran, kao što sam naveo u mail-u, trebaće mi 1 sedmica da se podsjetim svih stvari
vezanih za to.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
