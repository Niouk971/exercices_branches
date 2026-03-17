import {expect, test} from "vitest";
import { arrayToFrench } from "./3-arrayToFrench";

// TODO: test arrayToFrench function with one, two and multiple words

test("convert an array to a french sentence", () => {
    expect(arrayToFrench(['un', 'deux', 'trois', 'soleil'])).toBe("un, deux, trois et soleil");
    expect(arrayToFrench(['noir', 'blanc'])).toBe("noir et blanc");
});
