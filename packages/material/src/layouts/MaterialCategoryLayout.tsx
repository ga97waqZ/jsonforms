import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import {
    CategoryLayout,
    mapStateToLayoutProps,
    RankedTester,
    rankWith,
    registerStartupRenderer,
    RendererProps,
    uiTypeIs,
    state
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { MaterialLayoutRenderer, MaterialLayoutRendererProps } from './layout.util';

export const categoryLayoutTester: RankedTester = rankWith(1, uiTypeIs('CategoryLayout'));

export class MaterialCategoryLayoutRenderer {

    constructor() {
        this.state = {
            selection: 0
        }
    }

    handleChange() {
        this.setState({
            selection:
        })
    }

    render() {
        const {data, schema, uischema, path, visible} = this.props;
        const categoryLayout = uischema as CategoryLayout;
        const childProps: MaterialLayoutRendererProps = {
            elements: categoryLayout.elements,
            schema,
            path,
            direction: 'column',
            visible
        };

        return (
            <AppBar>
                <Tabs value={data} onChange={this.handleChange}>
                    <Tab label={JsonForms.stylingRegistry.getAsClassName('category.label')}/>
                </Tabs>
            </AppBar>
        {
            data === 1 && <Typography component="div" style={{padding: 8 * 3}}>
                <MaterialLayoutRenderer {...childProps}/>
            </Typography>
        }
    )
        ;
    }
};

export default registerStartupRenderer(
    categoryLayoutTester,
    connect(mapStateToLayoutProps)(MaterialCategoryLayoutRenderer)
);
