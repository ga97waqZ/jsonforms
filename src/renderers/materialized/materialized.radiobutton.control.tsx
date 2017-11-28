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
            // according to
            // https://stackoverflow.com/questions/47338362/radio-buttons-are-not-working-
            // for-materialize-css-design
            // we need here a hack to delete input field.
            <form className={classNames.wrapper.replace('input-field','')} hidden={!visible}>
                <label htmlFor={id} data-error={errors}>
                    {label}
                </label>
                {
                    options.map(optionValue => {
                        return (
                            <p>
                                <input
                                    type='radio'
                                    name='group1'
                                    id={optionValue}
                                    value={this.state.value}
                                />
                                <label for={optionValue}
                                       onClick={() => this.handleChange(!this.state.value)}>
                                    {optionValue}
                                </label>
                            </p>
                        );
                    })
                }
            </form>
        );
    }
}

export default registerStartupRenderer(
    withIncreasedRank(1, radiobottonControlTester),
    connect(mapStateToControlProps)(MaterializedRadiobuttonControl)
);
