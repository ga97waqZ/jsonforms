import * as React from 'react';
import {
    RankedTester,
    rankWith,
    RendererProps,
    uiTypeIs,
    CategoryLayout,
    renderChildren,
    JsonFormsLayout,
    mapStateToLayoutProps,
    registerStartupRenderer,
} from '@jsonforms/core';
import { connect } from 'react-redux';

/**
 * Default tester for a horizontal layout.
 * @type {RankedTester}
 */
export const categoryLayoutTester: RankedTester = rankWith(1, uiTypeIs('CategoryLayout'));

export const HorizontalLayoutRenderer = ({ schema, uischema, path, visible }: RendererProps) => {

    const categoryLayout = uischema as CategoryLayout;

    return (
        <div class='tab'>
            {
                <button class='tablinks' onclick='openCategory(event, this.category'>
                    {JsonForms.stylingRegistry.getAsClassName('category.label')}
                </button>
            }
        </div>
        <div id=this.category class='tabcontent'>
            {
                renderChildren(
                    categoryLayout.elements,
                    schema,
                    'category-layout-item',
                    path
                )
            }
        </div>
    );
};

export default registerStartupRenderer(
    categoryLayoutTester,
    connect(mapStateToLayoutProps)(CategoryLayoutRenderer)
);