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
    state,
    uiTypeIs
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { MaterialLayoutRenderer, MaterialLayoutRendererProps } from './layout.util';
import { JsonForms } from '../../../core/src/core';
import { ControlElement } from '../../../core/src/models/uischema';
import { resolveSchema } from '../../../core/src/util/resolvers';

export const categoryLayoutTester: RankedTester = rankWith(1, uiTypeIs('CategoryLayout'));

const TabContainer = (props => {
    return (
        <Typography component='div' style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
});

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
        const options = resolveSchema(
            schema,
            (uischema as ControlElement).scope.$ref
        ).enum;

        return (
            <div>
            <AppBar position='static'>
                <Tabs value={data} onChange={this.handleChange}>
                    options.map(optionValue => {
                        return(
                            <Tab key={optionValue} label={optionValue}/>
                    );
                })
                </Tabs>
            </AppBar>
            data.map(optionValue => {
                 return(
                     {
                        value === optionValue && <TabContainer>
                         <MaterialLayoutRenderer {...childProps}/>
                        <TabContainer>
                     }
                )
            }
            </div>
        );
    }
}

export default registerStartupRenderer(
    categoryLayoutTester(1, categoryLayoutTester),
    connect(mapStateToLayoutProps)(MaterialCategoryLayoutRenderer)
);
