//import { make } from "redux-chill";
import { FormikBag } from "formik";
//import { DownloadInfo } from "@models";

/**
 * Change handler for onChange of form controls
 */
type ChangeHandler<T = any> = (name: string, value: T) => any;

// type ErrorsMap = {
//   [x: string]: any;
// };

/**
 * Create submit handler action for form
 */
// const createSubmitHandler = <T, S = any, F = any>(type: string) =>
//   make(
//     type,
//     (values: T, formik: Partial<FormikBag<any, T>>) => ({
//       values,
//       formik
//     }),
//     {
//       success: (payload: S) => payload,
//       failure: (payload: F) => payload,
//       finish: null
//     }
//   );

// const replacePrefix = (doc: DownloadInfo) => ({
//   ...doc,
//   codeOnFormIdentifier: doc.codeOnFormIdentifier.substr(
//     doc.codeOnFormIdentifier.lastIndexOf(".") + 1
//   )
// });

// const replaceDocsPrefix = documents =>
//   documents
//     ? Object.keys(documents).reduce(
//         (result, key) => {
//           const doc = documents[key];
//           // console.log(doc)
//           if (doc) {

//             console.log(Array.isArray(doc), doc, 'doc check')

//             result[key] = Array.isArray(doc)
//               ? doc.map(replacePrefix)
//               : replacePrefix(doc);
//           }

//           return result;
//         },
//         {} as { [x: string]: DownloadInfo | DownloadInfo[] }
//       )
//     : {};

export { ChangeHandler };
