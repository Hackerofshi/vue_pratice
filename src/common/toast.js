import { isEmpty, isNil } from "ramda";
import "@/css/toast.less";

const Toast = (content, duration) => {
  if (isNil(content) || isEmpty(content)) {
    return false;
  }
  let time = duration ? duration : 2000;
  let toast = document.createElement("div");
  let span = document.createElement("div");
  span.innerHTML = content;
  span.className = "toast-span";
  toast.className = "toast-enter";
  toast.appendChild(span);
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.className = "toast-leave";
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 150);
  }, time);
};

export default Toast;
