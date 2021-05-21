"use strict";

registerPaint("headerHighlight", class {
    static get contextOptions() {
        return { alpha: true };
    }

    /**
     * @param {CanvasRenderingContext2D} ctx - Canvas drawing context (actually supposed to be PaintRenderingContext2D type, but intellisense does not identify this yet.)
     */
    paint(ctx) {
        ctx.fillStyle = "hsla(55 90% 60% / 1)";
        ctx.fillRect(0, 15, 200, 20);
    }
});