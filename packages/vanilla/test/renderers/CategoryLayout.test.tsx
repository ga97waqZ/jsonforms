import { initJsonFormsStore } from '@jsonforms/test';
import * as React from 'react';
import test from 'ava';
import { CategoryLayout } from '@jsonforms/core';
import { Provider } from 'react-redux';
import CategoryLayoutRenderer, { categoryTester } from '../../src/layouts/CategoryLayout';
import * as TestUtils from 'react-dom/test-utils';

test.beforeEach(t => {
    t.context.uischema = {
        type: 'CategoryLayout',
        elements: [{type: 'Control'}]
    };
    t.context.styles = [
        {
            name: 'category-layout',
            classNames: ['category-layout']
        }
    ];
});

test('tester', t => {
    t.is(categoryTester(undefined, undefined), -1);
    t.is(categoryTester(null, undefined), -1);
    t.is(categoryTester({type: 'Foo'}, undefined), -1);
    t.is(categoryTester({type: 'Group'}, undefined), 1);
});

test('render with label', t => {
    const uischema: CategoryLayout = {
        type: 'Category',
        label: 'Foo',
        elements: [],
    };
    const store = initJsonFormsStore({
        data: {},
        schema: {},
        uischema,
        styles: t.context.styles
    });
    const tree = TestUtils.renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={uischema} />
        </Provider>
    );
    const categoryLayout = TestUtils.findRenderedDOMComponentWithClass(tree, 'category-layout');
    t.is(categoryLayout.tagName, 'FIELDSET');
    t.is(categoryLayout.className, 'group-layout');
    t.is(categoryLayout.children.length, 1);
    const legend = categoryLayout.children[0];
    t.is(legend.tagName, 'LEGEND');
    t.is(legend.textContent, 'Foo');
});

test('render with null elements', t => {
    const uischema: CategoryLayout = {
        type: 'Category',
        elements: null
    };
    const store = initJsonFormsStore({
        data: {},
        schema: {},
        uischema,
        styles: t.context.styles
    });
    const tree = TestUtils.renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={uischema} />
        </Provider>
    );
    const categoryLayout = TestUtils.findRenderedDOMComponentWithClass(tree, 'category-layout');
    t.is(categoryLayout.tagName, 'FIELDSET');
    t.is(categoryLayout.children.length, 0);
});

test('render with children', t => {
    const uischema: CategoryLayout = {
        type: 'Category',
        elements: [
            {type: 'Control'},
            {type: 'Control'}
        ]
    };
    const store = initJsonFormsStore({
        data: {},
        schema: {},
        uischema,
        styles: t.context.styles
    });
    const tree = TestUtils.renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={uischema} />
        </Provider>
    );
    const categoryLayout = TestUtils.findRenderedDOMComponentWithClass(tree, 'category-layout');
    t.is(categoryLayout.tagName, 'FIELDSET');
    t.is(categoryLayout.children.length, 2);
});

test('hide', t => {
    const store = initJsonFormsStore({
        data: {},
        schema: {},
        uischema: t.context.uischema,
        styles: t.context.styles
    });
    const tree = TestUtils.renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer
                uischema={t.context.uischema}
                visible={false}
            />
        </Provider>
    );
    const categoryLayout = TestUtils.findRenderedDOMComponentWithClass(
        tree,
        'category-layout'
    ) as HTMLDivElement;
    t.true(categoryLayout.hidden);
});

test('show by default', t => {
    const store = initJsonFormsStore({
        data: {},
        schema: {},
        uischema: t.context.uischema,
        styles: t.context.styles
    });
    const tree = TestUtils.renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={t.context.uischema} />
        </Provider>
    );
    const categoryLayout = TestUtils.findRenderedDOMComponentWithClass(
        tree,
        'category-layout'
    ) as HTMLDivElement;
    t.false(categoryLayout.hidden);
});
