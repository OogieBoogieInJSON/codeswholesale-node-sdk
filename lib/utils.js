'use strict';

var hasTokenExpired = exports.hasTokenExpired = function hasTokenExpired(persistedToken) {
  if(!persistedToken) {
    return true;
  }

  let delta = (new Date().getTime() / 1000) - persistedToken.created_at;
  
  return (delta < persistedToken.expires_in) ? false : true;
};
