export function interpolateColor(rgb1: number[], rgb2: number[], percent: number): number[] {
    var w1 = percent/100;
    var w2 = 1 - w1;
    return [
        Math.round(rgb1[0] * w2 + rgb2[0] * w1),
        Math.round(rgb1[1] * w2 + rgb2[1] * w1),
        Math.round(rgb1[2] * w2 + rgb2[2] * w1)
    ];
}

export function hexToRGBArray(color: string): [number, number, number] {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (color.length === 5) {
        r = parseInt(color[1] + color[1], 16);
        g = parseInt(color[2] + color[2], 16);
        b = parseInt(color[3] + color[3], 16);

        // 6 digits
    } else if (color.length === 7) {
        r = parseInt(color[1] + color[2], 16);
        g = parseInt(color[3] + color[4], 16);
        b = parseInt(color[5] + color[6], 16);
    }

    return [r, g, b];
}