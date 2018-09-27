/// <reference types="jest" />

import * as React from 'react';
import { createRenderer, ShallowRenderer } from 'react-test-renderer/shallow';
import HelloWorld from "../components/HelloWorld";

describe("FieldMapping React ShallowRenderer tests", () => {
    let renderer: ShallowRenderer;

    beforeEach(() => {
        renderer = createRenderer();
        renderer.render(
            <HelloWorld
                description="jest-test"
            ></HelloWorld>
        );
    });

    afterEach(() => {
        renderer.unmount();
    });

    test('jest test with dialog', () => {
        const output = renderer.getRenderOutput();
        console.log(output);
    });
});