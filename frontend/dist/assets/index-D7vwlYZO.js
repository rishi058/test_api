function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bouncer-C7Pa2_x-.js","assets/index-ERZqQu9v.js","assets/index-D-ibgXF1.css","assets/Ranges-DH1vSY8j.js","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-ERZqQu9v.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-C7Pa2_x-.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};
