export class AnimationHelper {
    private static ANIMATED = 'animated ';

    private static ALL_ANIMATIONS = [
        'bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello',
        'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp',
        'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
        'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig',
        'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
        'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
        'lightSpeedIn', 'lightSpeedOut',
        'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
        'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
        'hinge', 'rollIn', 'rollOut',
        'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
        'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp',
        'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp',
        'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp',
    ];

    private static ATTENTION_SEEKERS = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello',];
    private static BOUNCING_ENTRANCES = ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp',];
    private static BOUNCING_EXITS = ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',];
    private static FADING_ENTRANCES = ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig',];
    private static FADING_EXITS = ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',];
    private static FLIPPERS = ['flipInX', 'flipInY', 'flipOutX', 'flipOutY',];
    private static LIGHTSPEED = ['lightSpeedIn', 'lightSpeedOut',];
    private static ROTATING_ENTRANCES = ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',];
    private static ROTATING_EXITS = ['rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',];
    private static SLIDING_ENTRANCES = ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp',];
    private static SLIDING_EXITS = ['slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp',];
    private static ZOOM_ENTRANCES = ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',];
    private static ZOOM_EXITS = ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp',];
    private static SPECIALS = ['hinge', 'rollIn', 'rollOut',
    ];
}
