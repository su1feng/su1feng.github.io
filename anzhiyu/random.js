var posts=["2025/12/07/hello-world/","2025/12/15/个人随笔/","2025/12/14/刷题记录/","2025/12/14/技术学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };