import { JSX } from '../JSX';
import { withIncreasedRank } from '../../core/testers';
import { ControlElement } from '../../models/uischema';
import { resolveSchema } from '../../path.util';
import { Control, ControlProps, ControlState } from '../controls/Control';
import { mapStateToControlProps, registerStartupRenderer } from '../renderer.util';
import { radiobottonControlTester } from '../controls/radiobutton.control';
import { connect } from '../../common/binding';
declare let $;

export class MaterializedRadiobuttonControl extends Control<ControlProps, ControlState> {

    componentDidMount() {
        $('select').material_select();
    }

    componentDidUpdate() {
        $('select').material_select();
    }

    render() {
        const {
            uischema,
            schema,
            classNames,
            id,
            label,
            visible,
            enabled,
            data,
            errors
        } = this.props;
        const options = resolveSchema(
            schema,
            (uischema as ControlElement).scope.$ref
        ).enum;

        return (
            <div className={classNames.wrapper} hidden={!visible}>
                {
                    [<input type='radio' value='' selected={data === undefined} key={'empty'}/>]
                        .concat(
                            options.map(optionValue => {
                                return (
                                    <p>
                                        <input
                                            type='radio'
                                            value={optionValue}
                                            selected={data === optionValue}
                                            key={optionValue}
                                            id={optionValue}
                                        />
                                        <label for={optionValue}>
                                            {optionValue}
                                        </label>
                                    </p>
                                );
                            })
                        )
                    }
                <label htmlFor={id} data-error={errors}>
                    {label}
                </label>
            </div>
        );
    }
}

export default registerStartupRenderer(
    withIncreasedRank(1, radiobottonControlTester),
    connect(mapStateToControlProps)(MaterializedRadiobuttonControl)
);
