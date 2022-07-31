const notFoundHandler = (req, res, next) => {
  try {
    res.render('common/notFound', { title: 404, message: 'Page not found' });
  } catch (error) {
    res.render('common/error', { title: 'Error occurred', error });
  }
};

const errorhandler = (error, req, res, next) => {
  if (res.headersSent) {
    next(error);
  } else {
    res.render('common/error', {
      title: 'Error occurred',
      error,
    });
  }
};

module.exports = { notFoundHandler, errorhandler };
