import NewBtn from "./NewBtn";

// 所有组件列表
const components = [NewBtn];
// 定义install方法，接收app作为参数
const install = function (app) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
  // 下面这个写法也可以
  // components.map(component => app.use(component))
};

export default {
  install,
  // 所有组件，必须具有install，才能使用app.use()
  ...components,
};
