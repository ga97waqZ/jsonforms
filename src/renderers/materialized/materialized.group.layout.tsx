import { JSX } from '../JSX';
import PropTypes from 'prop-types';
import { JsonForms } from '../../core';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { mapStateToControlProps, registerStartupRenderer, renderChildren
} from '../renderer.util';
import { withIncreasedRank } from '../../core/testers';
import { groupTester } from '../layouts/group.layout';
import { connect } from '../../common/binding';
import { RendererProps } from '../../core/renderer';
import { GroupLayout } from '../../models/uischema';

export const GroupLayoutRenderer = (props: RendererProps) => {
    const { uischema, schema, path, visible } = props;

    render(){
        const group = uischema as GroupLayout;
        const classNames = JsonForms.stylingRegistry.getAsClassName('group-layout');

        return (
            <div>
                <Card className={classNames}>
                    {
                        !_.isEmpty(group.label) ?
                            <legend className={JsonForms.stylingRegistry.getAsClassName
                            ('group.label')}>
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
                </Card>
            </div>
        );
    }
};

export default registerStartupRenderer(
    withIncreasedRank(1, groupTester),
    connect(mapStateToControlProps)(GroupLayoutRenderer)
);
