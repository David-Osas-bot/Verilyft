// export type AuthStackParamList = {
//     Splash: undefined;
//     Onboarding: undefined;
//     Login: undefined;
//     CreateAccount: undefined;
// };

// export type BuyerTabParamList = {
//     Home: undefined;
//     Search: undefined;
//     Orders: undefined;
//     VRide: undefined;
//     Account: undefined;
// };

// export type ErrandTabParamList = {
//     Requests: undefined;
//     ActiveErrands: undefined;
//     Earnings: undefined;
//     History: undefined;
//     Account: undefined;
// };

// export type DriverTabParamList = {
//     DriverHome: undefined;
//     ActiveJobs: undefined;
//     Earnings: undefined;
//     History: undefined;
//     Account: undefined;
// };

// export type RoleType = 'buyer' | 'seller' | 'errand' | 'driver';











export type AuthStackParamList = {
    Splash: undefined;
    Onboarding: undefined;
    Login: undefined;
    CreateAccount: undefined;
};

export type BuyerTabParamList = {
    Home: undefined;
    Search: undefined;
    Orders: undefined;
    VRide: undefined;
    Account: undefined;
};

export type ErrandTabParamList = {
    Requests: undefined;
    ActiveErrands: undefined;
    Earnings: undefined;
    History: undefined;
    Account: undefined;
};

export type DriverTabParamList = {
    DriverHome: undefined;
    ActiveJobs: undefined;
    Earnings: undefined;
    History: undefined;
    Account: undefined;
};

export type RoleType = 'buyer' | 'seller' | 'errand' | 'driver';

/**
 * MainStackParamList
 * ---------------------------------------------------------------------------
 * Wraps whichever role's tab navigator is active and hosts the screens that
 * get PUSHED on top of the tabs (full-screen, with a back arrow) rather than
 * living as tabs themselves: Notifications, Wallet, the Errand Guy order
 * chat, and the Switch Workspaces / profile settings screen.
 *
 * Each *TabParamList already declares its own "Account" route — AccountScreen
 * is the single shared component rendered inside each of those. From
 * AccountScreen, "Role Switcher > Switch" pushes ProfileSettings on this
 * stack (hence the composite navigation typing note in AccountScreen.tsx).
 */
export type MainStackParamList = {
    BuyerTabs: undefined;
    ErrandTabs: undefined;
    DriverTabs: undefined;
    Notifications: undefined;
    Wallet: undefined;
    OrderChat: { orderId: string; orderRef?: string };
    ProfileSettings: undefined;
};