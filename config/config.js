var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'fileOrganizerApp'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dperezg1:ubiRCH91@ds143151.mlab.com:43151/fileorganizer'
  },

  test: {
    root: rootPath,
    app: {
      name: 'fileOrganizerApp'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dperezg1:ubiRCH91@ds143151.mlab.com:43151/fileorganizer'
  },

  production: {
    root: rootPath,
    app: {
      name: 'fileOrganizerApp'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dperezg1:ubiRCH91@ds143151.mlab.com:43151/fileorganizer'
  }
};

module.exports = config[env];
