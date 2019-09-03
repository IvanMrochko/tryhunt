// import { GeneralStore } from "./general";
// import { History } from "history";
// import { Router } from "./shared";
// import { Services } from "@services";
// import { AuthStore } from "./auth";
// import { ComplaintStore } from "./complaint";
// import { enviroments } from "../enviroments";
// import { UserManagementStore } from "./user-management";
// import { NewComplaintStore } from "./complaint/NewComplaint";
// import {DictionariesStore} from "./dictionaries";
// import {ModalStore} from "./modal";
// import { SingleCompliantStore } from "./single-complaint";

// /**
//  * Store context
//  */
// type StoreContext = { store: Store } & typeof Store.prototype.stores;

// /**
//  * Root store to keep circular references between stores
//  */
// class Store {
//     /**
//      * Get stores
//      */
//     public constructor(public history: History) { }
//     /**
//    * General app data
//    */
//     public general: GeneralStore = new GeneralStore(this);
//     /**
//      * App services
//      */
//     public services = new Services({
//         http: [enviroments.apiUrl + '/api/', {
//             unAuthorized: this.general.handleUnAuthorized.bind(this.general)
//         }]
//     });
//     /**
//      * Router
//      */
//     public router: Router = new Router(this.history);
//     /**
//      * Auth store
//      */
//     public auth = new AuthStore(this);
//     /**
//    * Complaint store
//    */
//     public complaint = new ComplaintStore(this);

//     public singleCompliant = new SingleCompliantStore(this);

//     public newComplaint = new NewComplaintStore(this);
//     /**
//      * User Management store
//      */
//     public userManagement = new UserManagementStore(this);
//     /**
//      * Dictionary store
//      */
//     public dictionaries = new DictionariesStore(this);
//     /**
//      * Modal store
//      */
//     public modal = new ModalStore(this);
//     /**
//      * Stores to map
//      */
//     public get stores() {
//         const { general, router, auth, complaint, userManagement, dictionaries, newComplaint, modal, singleCompliant } = this;

//         return {
//             store: this,
//             general,
//             router,
//         };
//     }
// }

// export { Store, StoreContext };
