import * as React from 'react';
import {
    and,
    Control,
    ControlElement,
    ControlProps,
    enumLengthAtMost,
    mapDispatchToFieldProps,
    mapStateToFieldProps,
    RankedTester,
    rankWith,
    registerStartupInput,
    resolveSchema,
    schemaMatches,
    uiTypeIs
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { ControlState } from '../../../core/src/renderers/Control';

export class EnumRadiobuttonField
    extends Control<ControlProps, ControlState> {

    render() {
        const { uischema, schema, classNames, id, label,
            visible, enabled, errors} = this.props;

        const options = resolveSchema(
            schema,
            (uischema as ControlElement).scope.$ref
        ).enum;

        return (
            <div
                className={classNames.wrapper}
                hidden={!visible}
                disabled={!enabled}
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
                                    for={optionValue}
                                    onClick={e => this.handleChange(e.target.value)}
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
    connect(mapStateToFieldProps, mapDispatchToFieldProps)(EnumRadiobuttonField)
);
