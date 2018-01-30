import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import {
    CategoryLayout,
    mapStateToLayoutProps,
    RankedTester,
    rankWith,
    registerStartupRenderer,
    uiTypeIs,
    withIncreasedRank
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { MaterialLayoutRenderer, MaterialLayoutRendererProps } from '../util/layout';
import { ControlElement } from '../../../core/src/models/uischema';
import { resolveSchema } from '../../../core/src/util/resolvers';

export const categoryLayoutTester: RankedTester = rankWith(1, uiTypeIs('CategoryLayout'));

export const state = {
    selection: 0
};

export class MaterialCategoryLayoutRenderer {
    constructor() {
        this.state = {
            selection: 0
        };
    }
    handleChange(e) {
        this.setState({
            selection: e.target.data
        });
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
        const getTab = optionValue => {
            return(
                <Tab key={optionValue} label={optionValue}/>
            );
        };
        const options = resolveSchema(
            schema,
            (uischema as ControlElement).scope.$ref
        ).enum;

        return (
            <div>
            <AppBar position='static'>
                <Tabs value={data} onChange={this.handleChange(e)}>
                    options.map(data => {getTab(optionValue)}
                })
                </Tabs>
                <MaterialLayoutRenderer {...childProps}/>
            </AppBar>
            </div>
        );
    }
}

export default registerStartupRenderer(
    withIncreasedRank(1, categoryLayoutTester),
    connect(mapStateToLayoutProps)(MaterialCategoryLayoutRenderer)
);
