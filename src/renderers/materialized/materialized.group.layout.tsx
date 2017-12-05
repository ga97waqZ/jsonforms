import { JSX } from '../JSX';
import * as _ from 'lodash';
import { JsonForms } from '../../core';
import { RendererProps } from '../../core/renderer';
import { groupTester } from '../layouts/group.layout';
import { GroupLayout } from '../../models/uischema';
import {
    JsonFormsLayout,
    mapStateToLayoutProps,
    registerStartupRenderer,
    renderChildren
} from '../renderer.util';
import { connect } from '../../common/binding';



export class MaterializedGroupLayoutRenderer {
    const group = uischema as GroupLayout;

    const classNames = JsonForms.stylingRegistry.getAsClassName('group-layout');

    return (
        <fieldset className={classNames}
                  hidden={visible === undefined || visible === null ? false : !visible}
        >
            {
                !_.isEmpty(group.label) ?
                    <legend className={JsonForms.stylingRegistry.getAsClassName('group.label')}>
                        {group.label}
                    </legend> : ''
            }
            {
                renderChildren(
                    group.elements,
                    schema,
                    'group-layout-item',
                    path
                )
            }
        </fieldset>
    );
};

export default registerStartupRenderer(
    groupTester,
    connect(mapStateToLayoutProps)(GroupLayoutRenderer)
);
