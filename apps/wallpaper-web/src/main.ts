import { App } from "@/app/App";
import "@/styles/main.css";

const root = document.getElementById("app");
if (!root) {
  throw new Error("Root element #app not found");
}

const app = new App(root);
app.init();
