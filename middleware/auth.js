export default function (context) {
  console.log('Auth middleware')
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}