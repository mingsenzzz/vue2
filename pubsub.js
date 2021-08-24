const pubsub = {};

//自执行的函数
(function(paramObj) {
  const topicObjs = {};
  let uid = 0;

  //订阅
  paramObj.subscribe = (topic, func) => {
    topicObjs[topic] = [
      ...(topicObjs[topic] || []),
      {
        func,
        uid: ++uid,
      },
    ];
    //将订阅的id返回出去
    return uid;
  };

  //发布
  paramObj.publish = (topic, data) => {
    const subscribers = topicObjs[topic] || [];
    let len = subscribers?.length || 0;
    while (len--) {
      subscribers[len].func(data);
    }
  };

  //取消订阅
  paramObj.unSubscribe = (uid) => {
    for (const topic in topicObjs) {
      for (let index = 0; index < topicObjs[topic].length; index++) {
        const element = topicObjs[topic][index];
        if (element.uid === uid) {
          //清除掉uid一致的订阅回调
          topicObjs[topic].splice(index, 1);
        }
      }
    }
  };
})(pubsub);

const id = pubsub.subscribe("react_topic", (data) => {
  console.log(data, "data");
});

const id1 = pubsub.subscribe("react_topic", (data) => {
  console.log(data, "data--2");
});

pubsub.unSubscribe(id1);

// pubsub.publish("react_topic", "发布的值");

console.log(id, "id");
console.log(id1, "id");
