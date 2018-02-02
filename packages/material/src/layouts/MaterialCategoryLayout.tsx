import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Card, CardContent } from 'material-ui';
import {
    and,
    Categorization,
    mapStateToLayoutProps,
    RankedTester,
    rankWith,
    registerStartupRenderer,
    Renderer,
    RendererProps,
    Tester,
    UISchemaElement,
    uiTypeIs
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { MaterialLayoutRenderer, MaterialLayoutRendererProps } from '../util/layout';

const isSingleLevelCategory: Tester = and(
    uiTypeIs('Categorization'),
    (uischema: UISchemaElement): boolean => {
        const categorization = uischema as Categorization;

        return categorization.elements.reduce((acc, e) => acc && e.type === 'Category', true);
    }
);

export const categoryTester: RankedTester = rankWith(1, isSingleLevelCategory);
export interface CategoryState {
    value: number;
  }

export class MaterialCategoryLayoutRenderer
    extends Renderer<RendererProps, CategoryState> {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
    }

    render() {
        const { uischema, schema, path, visible } = this.props;
        const { value } = this.state;
        const category = uischema as Categorization;

        const childProps: MaterialLayoutRendererProps = {
            elements: category.elements[value].elements,
            schema,
            path,
            direction: 'column',
            visible
        };
        const style: {[x: string]: any} = { marginBottom: '10px' };
        if (!visible) {
            style.display = 'none';
        }

        return (
            <div style={style}>
                <AppBar position='static'>
                <Tabs value={value} onChange={this.handleChange}>
                    {category.elements.map((e, idx) => <Tab  key={idx} label={e.label} />)}
                </Tabs>
                </AppBar>
                <div style={{ marginTop: '0.5em' }}>
                    <Card style={{ marginBottom: '10px' }}>
                        <CardContent>
                            <MaterialLayoutRenderer {...childProps}/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
    private handleChange = (_event, value) => {
        this.setState({ value });
    }
}

export default registerStartupRenderer(
    categoryTester,
    connect(mapStateToLayoutProps)(MaterialCategoryLayoutRenderer)
);
