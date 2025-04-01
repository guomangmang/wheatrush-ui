export function withInstall(comp) {
    comp.install = function (app) {
        const { name } = comp
        app.component(name, comp);
    };
    return comp;
}

export const withInstallFunction = (fn, name) => {
    fn.install = (app) => {
        fn._context = app._context
        app.config.globalProperties[name] = fn
    }

    return fn
}

// import { Plugin,App } from "vue";
// export type SFCWithInstall<T> = T & Plugin;
// export function withInstall<T>(comp: T) {
//   (comp as SFCWithInstall<T>).install = function (app) {
//     const { name } = comp as unknown as { name: string };
//     app.component(name, comp);
//   };
//   return comp as SFCWithInstall<T>;
// }




