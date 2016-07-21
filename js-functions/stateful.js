'use strict';

let sessionService = {};
let accountInfo = {};
let posts = {};

function listUserPostHandler(req, res, next) {
  let token = req.token,
    _userId = null,
    _accountInfo = null,
    _postList = null;

  function getUserId() {
    return sessionService.getUserId(req.token)
      .then(userId => _userId = userId);
  }

  function getUserInfo() {
    return accountInfo.getAccountInfo(_userId)
      .then(accountInfo => _accountInfo = accountInfo);
  }

  function listPosts() {
    return posts.listPosts(postId)
      .then(postList => _postList = postList);
  }

  function preparePosts() {
    _postList.forEach(post => {
      post.accountName = _accountInfo.fullName;
    });

    return Promise.resolve();
  }

  return getUserId()
    .then(getUserInfo)
    .then(listPosts)
    .then(preparePosts)
    .then(() => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(_postList));
    });
}