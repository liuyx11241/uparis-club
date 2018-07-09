export class ColorHelper {

    private static ALL_COLORS = [
        'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal',
        'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey', 'mdb-color', 'grey', 'black'
    ];

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

    private static BADGE_COLORS = ['pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal'];

    private static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    public static randomBadgeColor(): string {
        return ColorHelper.BADGE_COLORS[ColorHelper.getRandomInt(ColorHelper.BADGE_COLORS.length)];
    }

    public static randomBadgeTone(): string {
        const listTones = ColorHelper.ALL_TONES.slice(2);
        return listTones[ColorHelper.getRandomInt(listTones.length)];
    }
}
