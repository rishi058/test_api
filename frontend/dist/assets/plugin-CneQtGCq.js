function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-J0w0n9Ck.js","assets/index-ERZqQu9v.js","assets/index-D-ibgXF1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-ERZqQu9v.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-J0w0n9Ck.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
