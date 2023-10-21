# React-Ninja

## Integration react
```bash
import {createRoot} from "react-dom/client";

function Greeting(){
  return <h1>hello world</h1>
}
const rootPath = document.getElementById("root");
const root = createRoot(rootPath);
root.render(<Greeting/>);
```
