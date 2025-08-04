exports.pagenotfound = (req, res, next) => {
  res.status(404);
  res.render('404', {
    pageTitle: 'Page Not Found',
    path: '/404'
  });
}