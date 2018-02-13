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

export class EnumRadiobuttonField
    extends Control<ControlProps, ControlState> {

    render() {
        const {classNames, id, uischema,
            schema, label, errors, visible } = this.props;
        const options = resolveSchema(
            schema,
            (uischema as ControlElement).scope
        ).enum;

        return (
            <div
                className={classNames.wrapper}
                hidden={!visible}
            >
                <label htmlFor={id} className={classNames.label} data-error={errors}>
                    {label}
                </label>
                {
                    options.map(optionValue => {
                        return (
                            <div>
                                <input
                                    type='radio'
                                    name={label}
                                    id={optionValue}
                                    value={optionValue}
                                />
                                <label
                                    htmlFor={optionValue}
                                    onClick={ev => this.handleChange(
                                        ev.currentTarget.value)}
                                >
                                    {optionValue}
                                </label>
                            </div>
                        );
                    })
                }
            </div>
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
    connect(mapStateToControlProps, mapDispatchToControlProps)(EnumRadiobuttonField)
);
