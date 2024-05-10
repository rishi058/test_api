function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DBfW-6Nb.js","assets/index-ERZqQu9v.js","assets/index-D-ibgXF1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-ERZqQu9v.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DBfW-6Nb.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
