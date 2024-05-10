function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DFhawKae.js","assets/index-ERZqQu9v.js","assets/index-D-ibgXF1.css","assets/index-TgWGEFN1.js","assets/index-DEYqR50A.js","assets/index-B7bPTyaG.js","assets/index-CrNlDo0O.js","assets/index-CH6-8cDJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-ERZqQu9v.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DFhawKae.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-TgWGEFN1.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DEYqR50A.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B7bPTyaG.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CrNlDo0O.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CH6-8cDJ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
