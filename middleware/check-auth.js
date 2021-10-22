export default function (context) {
  console.log('Check-Auth middleware')
  context.store.dispatch('initAuth', context.req);
}