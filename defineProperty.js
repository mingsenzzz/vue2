const originObj = {
  name: "mingsen",
  age: 24,
};

const targetObj = {};

for (const key in originObj) {
  Object.defineProperty(targetObj, key, {
    // value: originObj[key],
    enumerable: true,
    configurable: true,
    get() {
      return originObj[key];
    },
    set(val) {
      originObj[key] = val;
    },
  });
}

targetObj.name = "newName";

console.log(targetObj.name, "targetObj");
