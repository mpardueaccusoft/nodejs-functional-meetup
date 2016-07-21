'use strict';

let sessionService = {};
let accountInfo = {};
let posts = {};

let preparePosts = (accountInfo, postList) => 
  postList.map(post => {
    return {
      message: post.message,
      accountName: accountInfo.fullname,
      messageTitle: post.title
    };
  });

function listUserPostHandler(req, res, next) {
  let token = req.token;

  sessionService.getUserId(req.token)
    .then(userId => {
      return Promise.all([
        accountInfo.getAccountInfo(userId),
        posts.listPosts(postId)
      ])
        .then(results => preparePosts(...results));
    })
    .then(postList => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(postList));
    });
}