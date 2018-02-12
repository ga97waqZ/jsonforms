import * as React from 'react';
import {
    and,
    Control,
    ControlElement,
    ControlProps,
    ControlState,
    enumLengthAtMost,
    mapDispatchToControlProps,
    mapStateToControlProps,
    RankedTester,
    rankWith,
    registerStartupInput,
    resolveSchema,
    schemaMatches,
    uiTypeIs
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { SyntheticEvent } from 'react';

export class MaterialEnumRadiobuttonField extends Control<ControlProps, ControlState> {
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
            <form
                className={classNames.wrapper.replace('input-field', '')}
                hidden={!visible}
                action='#'
            >
                <label htmlFor={id} data-error={errors}>
                    {label}
                </label>
                {
                    options.map(optionValue => {
                        return (
                            <p>
                                <input
                                    type='radio'
                                    name={label}
                                    id={optionValue}
                                    value={optionValue}
                                />
                                <label
                                    htmlFor={optionValue}
                                    onClick={(ev: SyntheticEvent<HTMLInputElement>)
                                        => this.handleChange(ev.currentTarget.value)}
                                >
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
/**
 * Default tester for enum controls.
 * @type {RankedTester}
 */
export const enumRadiobuttonFieldTester: RankedTester = rankWith(2, and(
    uiTypeIs('Control'),
    schemaMatches(schema => schema.hasOwnProperty('enum')),
    enumLengthAtMost(3)
));
export default registerStartupInput(
    enumRadiobuttonFieldTester,
    connect(mapStateToControlProps, mapDispatchToControlProps)(MaterialEnumRadiobuttonField)
);
