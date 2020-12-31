// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginUrl: 'http://localhost:3000/login',
  signupUrl: 'http://localhost:3000/signup',
  favoritesUrl: 'http://localhost:3000/favorites',
  usersFavoritesUrl: 'http://localhost:3000/allFavorites',
  deleteFavoriteUrl: 'http://localhost:3000/favorites/deleteFav',

  debugMode: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

