import Color from 'color';
export var checkColor = function (item) {
    var color = Color(item);
    return color[color.isDark() ? 'lighten' : 'darken'](0.5).toString();
};
export var darker = function (item) { return [
    'transparent',
    Color(item).darken(0.5).alpha(0.6).toString(),
]; };
export var lighter = function (item) { return [
    Color(item).lighten(0.5).alpha(0.6).toString(),
    'transparent',
]; };
