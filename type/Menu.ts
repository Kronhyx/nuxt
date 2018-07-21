import {Location} from 'vue-router';
import {Route} from "./Route";
import {Badge} from "./Badge";

export class Menu {
    private _$text: String;
    private _$icon?: String;
    private _$class?: Array<String>;
    private _$route?: Route;
    private _$badge?: Badge;
    private _$children: Array<Menu>;

    constructor($text: String, $icon: String = null) {
        this._$text = $text;
        this._$icon = $icon;
        this._$class = [];
        this._$children = [];
    }

    get $text(): String {
        return this._$text;
    }

    set $text(value: String) {
        this._$text = value;
    }

    get $icon(): String {
        return this._$icon;
    }

    set $icon(value: String) {
        this._$icon = value;
    }

    get $route(): Route {
        return this._$route;
    }

    set $route(value: Route) {
        this._$route = value;
    }

    get $children(): Array<Menu> {
        return this._$children;
    }

    set $children(value: Array<Menu>) {
        this._$children = value;
    }

    get $badge(): Badge {
        return this._$badge;
    }

    set $badge(value: Badge) {
        this._$badge = value;
    }

    get $class(): Array<String> {
        return this._$class;
    }

    set $class(value: Array<String>) {
        this._$class = value;
    }

    getClass(): String {
        return this.$class.join(' ');
    }

    addClass($class: String): Menu {
        this._$class.push($class);
        return this;
    }

    setRoute($name: String, $params: Array<Object> = []): Menu {
        this.$route = new Route($name, $params);
        return this;
    }

    setBadge($text: String, $class: String): Menu {
        this.$badge = new Badge($text, $class);
        return this;
    }

    addChildren($menu: Menu): Menu {
        this._$children.push($menu);
        return this;
    }

    isCurrent($router: Location): boolean {
        if (this.$route !== undefined) {
            return this.$route.$name === $router.name;
        }

        return !!this.$children.filter(($menu: Menu) => {
            return $menu.isCurrent($router);
        }).length;
    }

}


