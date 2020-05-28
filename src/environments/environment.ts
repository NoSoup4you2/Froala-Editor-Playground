// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    version: '0.0.0',
  apiUrl: 'https://nodejs.pub.pgtel.net/api',
  socketUrl: 'https://nodejs.pub.pgtel.net',

    fileUploadUrl: 'https://froala.pub.cmrealtors.com/upload_file_validation',
    imageUploadUrl: 'https://froala.pub.cmrealtors.com/upload_image_validation',
    loadImagesUrl: 'https://froala.pub.cmrealtors.com/load_images',
    loadImageUrl: 'http://images.tustin.pgtel.net',
    deleteImageUrl: 'https://froala.pub.cmrealtors.com/delete_image',

    // fileUploadUrl: '/froala-upload/upload_file_validation',
    // loadImagesUrl: '/froala-upload/load_images',
    // loadImageUrl: '/froala-load-single',

    froala: {
        license: {
            version3: 'HQD1uB3A2A3D1F2D1lrJ-7aqtzcwkiI2C-21rscD3F3H3E2G3A4D5B6B2B3==',
            version2p8p0AndUp: 'HA2A1A17B5B1B1qB1F1B4E4I1A15C11D3D6F4dzwiyC-22rkosqH3gjk==',
            lessThanVersion2p8p0: 'HdeA-65ojd1yaA-9cH1qA-32y==',
        }
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
