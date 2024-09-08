import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@funcef/navbar",
  app: () => System.import<LifeCycles>("@funcef/navbar"),
  activeWhen: () => true,
});

registerApplication({
  name: "@funcef/payments",
  app: () => System.import<LifeCycles>("@funcef/payments"),
  activeWhen: ["/payments"],
});

start({
  urlRerouteOnly: true,
});
