export class Badge {
    private _$class: String;
    private _$text: String;

    constructor($text: String, $class: String) {
        this._$text = $text;
        this._$class = $class;
    }

    get $class(): String {
        return this._$class;
    }

    set $class(value: String) {
        this._$class = value;
    }

    get $text(): String {
        return this._$text;
    }

    set $text(value: String) {
        this._$text = value;
    }
}