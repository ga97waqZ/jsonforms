import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import {
    CategoryLayout,
    mapStateToLayoutProps,
    RankedTester,
    rankWith,
    registerStartupRenderer,
    RendererProps,
    uiTypeIs
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { MaterialLayoutRenderer, MaterialLayoutRendererProps } from './layout.util';

export const MaterialCategoryLayoutRenderer = (props: RendererProps) => {
    const { schema, uischema, path}: RendererProps;

    const category = uischema as CategoryLayout;
    const classNames = JsonForms.stylingRegistry.getAsClassName('category-layout');

    return (
        <div className={classNames}>
            <AppBar>
                {
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label={JsonForms.stylingRegistry.getAsClassName('category.label')}/>
                    </Tabs>
                }
            </AppBar>
            {
                <TabContainer>
                    renderChildren(
                    category.elements,
                    schema,
                    'category-layout-item',
                    path
                    )
                </TabContainer>
            }
        </div>

    );
};

export default registerStartupRenderer(
    categoryLayoutTester,
    connect(mapStateToLayoutProps)(MaterialCategoryLayoutRenderer)
);
