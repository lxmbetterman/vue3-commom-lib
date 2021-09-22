// 暴露组件
import NewBtn from "./src/NewBtn";
NewBtn.install = (Vue) => {
  Vue.component(NewBtn.name, NewBtn);
};
export default NewBtn;
