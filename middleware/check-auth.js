export default function (context) {
  console.log('Check-Auth middleware')
  if (process.client) {
    context.store.dispatch('initAuth');
  }
}