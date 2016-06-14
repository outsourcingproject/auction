import {RouteDefinition} from "angular2/router";
/**
 * index.js
 * Created by Huxley on 12/9/15.
 */
const setting = require('./routes.json');

export default class Routes {
    static config() {
        return setting.map((cfg):RouteDefinition =>{
            if (cfg.redirectTo)
                return { path: cfg.path, redirectTo: cfg.rediretTo };
            else {
                const component = `components/${cfg.component}`;
                return {
                    path: cfg.path, as: cfg.as,
                    component: require(component)
                };
            }
        });
    }
    static privilege() {
        return setting.map(cfg => {
            return { privilege: cfg.privilege };
        });
    }
}
