export class Route {
    private _$name: String;
    private _$params?: Array<Object>;

    constructor($name: String, $params: Array<Object> = []) {
        this._$name = $name;
        this._$params = $params;
    }

    get $name(): String {
        return this._$name;
    }

    set $name(value: String) {
        this._$name = value;
    }

    get $params(): Array<Object> {
        return this._$params;
    }

    set $params(value: Array<Object>) {
        this._$params = value;
    }

    path() {
        return {
            name: this.$name,
            params: this.$params
        }
    }
}
