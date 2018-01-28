import * as React from 'react';
import * as _ from 'lodash';
import {
    CategoryLayout,
    RankedTester,
    rankWith,
    registerStartupRenderer,
    uiTypeIs,
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { mapStateToVanillaLayoutProps, renderChildren, VanillaRendererProps } from '../util';

/**
 * Default tester for a group layout.
 *
 * @type {RankedTester}
 */
export const categoryTester: RankedTester = rankWith(1, uiTypeIs('Category'));

export const CategoryLayoutRenderer = (
    {
        schema,
        uischema,
        path,
        visible,
        getStyle,
        getStyleAsClassName
    }: VanillaRendererProps) => {
    const category = uischema as CategoryLayout;
    const elementsSize = category.elements ? category.elements.length : 0;
    const classNames = getStyleAsClassName('category-layout');
    const childClassNames = getStyle('category-layout-item', elementsSize)
        .concat(['category-layout-item'])
        .join(' ');

    return (
        <fieldset
            className={classNames}
            hidden={visible === undefined || visible === null ? false : !visible}
        >
            {
                !_.isEmpty(category.label) ?
                    <legend className={getStyleAsClassName('category.label')}>
                        {category.label}
                    </legend> : ''
            }
            {renderChildren(category, schema, childClassNames, path)}
        </fieldset>
    );
};

export default registerStartupRenderer(
    categoryTester,
    connect(mapStateToVanillaLayoutProps)(CategoryLayoutRenderer)
);
