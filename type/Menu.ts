import {Location} from 'vue-router';
import {Route} from "./Route";
import {Badge} from "./Badge";

export class Menu {
    private _$text: String;
    private _$icon?: String;
    private _$class?: Array<String>;
    private _$route?: Route;
    private _$badge?: Badge | Boolean;
    private _$children: MenuCollection;

    constructor($text: String, $icon: String = null) {
        this._$text = $text;
        this._$icon = $icon;
        this._$badge = false;
        this._$class = [];
        this._$children = new MenuCollection();
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

    get $children(): MenuCollection {
        return this._$children;
    }

    set $children(value: MenuCollection) {
        this._$children = value;
    }


    get $badge(): Badge | Boolean {
        return this._$badge;
    }

    set $badge(value: Badge | Boolean) {
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
        this._$children.add($menu);
        return this;
    }

    isCurrent($router: Location): boolean {
        if (this.$route !== undefined) {
            return this.$route.$name === $router.name;
        }

        return !!this.$children.$elements.filter(($menu: Menu) => {
            return $menu.isCurrent($router);
        }).length;
    }

}

export class MenuCollection {

    private _$expanded: Boolean;
    private _$class?: String;
    private _$elements: Array<Menu>;

    constructor($elements: Array<Menu> = []) {
        this._$elements = $elements;
        this._$expanded = false;
        this._$class = null;
    }

    get $expanded(): Boolean {
        return this._$expanded;
    }

    set $expanded($value: Boolean) {
        this._$expanded = $value;
    }

    get $class(): String {
        return this._$class;
    }

    set $class($value: String) {
        this._$class = $value;
    }

    get $elements(): Array<Menu> {
        return this._$elements;
    }

    set $elements($value: Array<Menu>) {
        this._$elements = $value;
    }

    add($menu: Menu) {
        this._$elements.push($menu);
        return this;
    }

    isEmpty() {
        return !this.$elements.length
    }

    isFilled() {
        return !this.isEmpty();
    }

}