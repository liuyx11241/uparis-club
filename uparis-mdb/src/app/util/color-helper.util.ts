export class ColorHelper {

    private static ALL_COLORS = [
        'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal',
        'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown',
        'grey', 'blue-grey', 'mdb-color', 'black'
    ];

    private static LIGHTEN_TONES = ['lighten-5', 'lighten-4', 'lighten-3', 'lighten-2', 'lighten-1',];

    private static DARKEN_TONES = ['darken-1', 'darken-2', 'darken-3', 'darken-4', '',];

    private static ACCENT_TONES = ['accent-1', 'accent-2', 'accent-3', 'accent-4',];

    private static ALL_TONES = [
        'lighten-5', 'lighten-4', 'lighten-3', 'lighten-2', 'lighten-1',
        'darken-1', 'darken-2', 'darken-3', 'darken-4',
        'accent-1', 'accent-2', 'accent-3', 'accent-4', '',
    ];

    private static ALL_TEXT_COLORS = [
        'red-text', 'pink-text', 'purple-text', 'deep-purple-text', 'indigo-text', 'blue-text', 'light-blue-text', 'cyan-text', 'teal-text', 'green-text',
        'light-green-text', 'lime-text', 'yellow-text', 'amber-text', 'orange-text', 'deep-orange-text', 'brown-text', 'grey-text', 'blue-grey-text',
        'white-text', 'text-black-50', 'text-white-50 bg-dark',
    ];

    private static BADGE_COLORS = [
        'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue',
        'green', 'orange', 'deep-orange', 'brown', 'black', 'blue-grey', 'mdb-color',
    ];

    private static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    public static randomBadgeColor(): string {
        const listColors = ColorHelper.BADGE_COLORS;
        return listColors[ColorHelper.getRandomInt(listColors.length)];
    }

    public static randomBadgeTone(): string {
        const listTones = [...ColorHelper.DARKEN_TONES];
        return listTones[ColorHelper.getRandomInt(listTones.length)];
    }
}
