"use strict";

registerPaint("boxbg", class {
    /**
     * @returns {object} - Returns an object with context options set as key/value pairs.
     */
    static get contextOptions() {
        return { alpha: true };
    }
    /**
     * @returns {string[]} - Returns an array of strings representing CSS custom properties.
     */
    static get inputProperties() {
        return ["--boxColor", "--widthSubtractor"];
    }

    /**
     * @param {CanvasRenderingContext2D} ctx - Canvas drawing context (actually supposed to be PaintRenderingContext2D type, but intellisense does not identify this yet.)
     * @param {object} size - Paint size property for drawn element.
     * @param {object} props - Properties with get() method for drawn element.
     */
    paint(ctx, size, props) {
        ctx.fillStyle = props.get("--boxColor");
        ctx.fillRect(
            0,
            size.height / 3,
            size.width * 0.4 - props.get("--widthSubtractor"),
            size.height * 0.6
        );
    }
});