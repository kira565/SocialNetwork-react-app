import React from "react";
import { create, act } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";


describe("Status span should be rendered", () => {
    test("Status from props should be rendered", () => {
        const component = create(<ProfileStatus status="status-example"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children.length).toBe(1);
    });
    test("Status from props should be correct", () => {
        const component = create(<ProfileStatus status="status-example"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("status-example");
    });
    test("After creation input shouldn't be rendered", () => {
       const component = create(<ProfileStatus status="status-example"/>);
       const root = component.root;
       expect(() => {
           root.findByType("input");
       }).toThrow()
    });
    test("Input should be randered after doubleClick on span", () => {
        const component = create(<ProfileStatus status="status-example"/>);
        const root = component.root;
        let span = root.findByType("span");
        act(() => {
            span.props.onDoubleClick();
        });
        let input = root.findByType("input");
        expect(input.props.value).toBe("status-example");
    });
});