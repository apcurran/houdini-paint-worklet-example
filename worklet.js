"use strict";

registerPaint("headerHighlight", class {
    /**
     * @returns {string[]} - Returns an array of strings representing CSS custom properties.
     */
    static get inputProperties() {
        return ["", ""];
    }
    /**
     * @returns {string[]} - Returns an array of strings representing CSS input args.
     */
    static get inputArguments() {
        return [];
    }
    /**
     * @returns {object} - Returns an object with context options set as key/value pairs.
     */
    static get contextOptions() {
        return { alpha: true };
    }

    /**
     * @param {CanvasRenderingContext2D} ctx - Canvas drawing context (actually supposed to be PaintRenderingContext2D type, but intellisense does not identify this yet.)
     * @param {object} size - Paint size property for drawn element.
     */
    paint(ctx, size) {
        ctx.fillStyle = "hsla(55 90% 60% / 1)";
        ctx.fillRect(0, size.height / 3, size.width * 0.4, size.height * 0.6);
    }
});