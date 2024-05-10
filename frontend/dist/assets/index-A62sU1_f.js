function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BVdr7Iom.js","assets/index-ERZqQu9v.js","assets/index-D-ibgXF1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-ERZqQu9v.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BVdr7Iom.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
