import * as React from 'react';
import { initJsonFormsStore } from '../../../test/helpers/setup';
import test from 'ava';
import { CategoryLayout, JsonForms } from '@jsonforms/core';
import { renderIntoDocument } from '../../../test/helpers/binding';
import { Provider } from 'react-redux';
import { findRenderedDOMElementWithClass } from '../../../test/helpers/react-test';
import GroupLayoutRenderer, { categoryTester } from '../../src/layouts/category.layout';

test.before(() => {
    JsonForms.stylingRegistry.registerMany([
        {
            name: 'category-layout',
            classNames: ['category-layout']
        }
    ]);
});

test.beforeEach(t => {
    t.context.uischema = {
        type: 'CategoryLayout',
        elements: [{type: 'Control'}, {type: 'Group'}]
    };
});

test('tester', t => {
    t.is(categoryTester(undefined, undefined), -1);
    t.is(categoryTester(null, undefined), -1);
    t.is(categoryTester({type: 'Foo'}, undefined), -1);
    t.is(categoryTester({type: 'Category'}, undefined), 1);
});

test('render with label', t => {
    const uischema: CategoryLayout = {
        type: 'Category',
        label: 'Foo',
        elements: [],
    };
    const store = initJsonFormsStore({}, {}, uischema);
    const tree = renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={uischema} />
        </Provider>
    );
    const categoryLayout = findRenderedDOMElementWithClass(tree, 'category-layout');
    t.is(categoryLayout.tagName, 'FIELDSET');
    t.is(categoryLayout.className, 'category-layout');
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
    const store = initJsonFormsStore({}, {}, uischema);
    const tree = renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={uischema} />
        </Provider>
    );
    const categoryLayout = findRenderedDOMElementWithClass(tree, 'category-layout');
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
    const store = initJsonFormsStore({}, {}, uischema);
    const tree = renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={uischema} />
        </Provider>
    );
    const categoryLayout = findRenderedDOMElementWithClass(tree, 'category-layout');
    t.is(categoryLayout.tagName, 'FIELDSET');
    t.is(categoryLayout.children.length, 2);
});

test('hide', t => {
    const store = initJsonFormsStore({}, {}, t.context.uischema);
    const tree = renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={t.context.uischema} visible={false} />
        </Provider>
    );
    const categoryLayout = findRenderedDOMElementWithClass(tree, 'category-layout') as
        HTMLDivElement;
    t.true(categoryLayout.hidden);
});

test('show by default', t => {
    const store = initJsonFormsStore({}, {}, t.context.uischema);
    const tree = renderIntoDocument(
        <Provider store={store}>
            <CategoryLayoutRenderer uischema={t.context.uischema} />
        </Provider>
    );
    const categoryLayout = findRenderedDOMElementWithClass(tree, 'category-layout') as
        HTMLDivElement;
    t.false(categoryLayout.hidden);
});
