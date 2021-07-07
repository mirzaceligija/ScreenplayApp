# Note za developere koji budu pregledali task

Ovo je progress unutar 24h i aplikacija ima dosta nedostataka. Razlog slanja "nedovršene" aplikacije je dobijanje inicijalnog feedbacka obzirom da nisam duže vremena ništa radio u react-u. Inicijalni feedback bi trebao sadržavati "ugrubo" promjene dovoljne da tehnički intervju, ukoliko trenutna implementacija nije dovoljna.

Trenutna implementacija ima slijedeće nedostatke: 

### Error Interceptor

Error interceptor koji presreće response koji dobijamo od API-a i prikazuje ga adekvatno u aplikaciji, kako se aplikacija
ne bi srušila.

### Auth status

Trenutno se refresh i access tokeni snimaju u localstorage i ako nešto ima u localstorage znači da je korisnik autorizovan.
Međutim, ovako se ne smije raditi. Refresh token se treba snimiti u httponly cookie, a jwt se može snimiti u localStorage.
Iako nije zahtijevano zadatkom, trebalo bi napraviti auth interceptor koji u headers dodaje 'Bearer ' + accessToken
kako bi se mogao poslati autorizovan req na api. Također, super je praksa da imamo automatsku autentikaciju korisnika,
ukoliko nije uradio logout. Kada se aplikacija starta, može se provjeriti da li postoje podaci u localStorage i cookies,
ili poslati GET req na /api/v1/sessions i na osnovu toga, ukoliko je validna sesija, automatski autorizovati korisnika.

### Route guard

Iako nema posebnih ruta koje trebaju biti zaštićene i vidljive samo autorizovanim korisnicima, možemo osigurati da korisnik,
ukoliko je autorizovan, ne može otići na Login/Register guard.

#### State management

Poprilično je "haotično" bez redux-a, bilo bi super da imamo centralizovani sistem za state management
(slično servisu u Angular2+). Tako bismo mogli imati podatke da li je korisnik auth kao prop u nekoj komponenti
i dinamički ga renderovati po potrebi. Na taj način, jedna komponenta može promijeniti state, a ta bi se promjena
poslala svima koji su zainteresovani. Na primjer, klikom na logout, navigacija može renderovati dinamički druge stavke.
Deeply nested props binding može biti veoma konfuzno, pogotovo u velikim aplikacijama.

#### Feedback

Ukoliko je redux i redux-thunk mandatoran, kao što sam naveo u mail-u, trebaće mi sedmica da se podsjetim svih stvari vezanih za to.


### Good luck


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
