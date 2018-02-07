import * as React from 'react';
import {
    ControlElement,
    FieldProps,
    isEnumControl,
    mapDispatchToFieldProps,
    mapStateToFieldProps,
    RankedTester,
    rankWith,
    registerStartupInput,
    resolveSchema
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { SyntheticEvent } from 'react';

const EnumField = (props: FieldProps) => {
    const { data, className, id, enabled, uischema, schema, path, handleChange } = props;
    const options = resolveSchema(schema, uischema as ControlElement).scope.$ref).enum;

    return (
        <div
            className={className}
            id={id}
            disabled={!enabled}
            autoFocus={uischema.options && uischema.options.focus}
            value={data || ''}
            onChange={(ev: SyntheticEvent<HTMLSelectElement>) =>
                handleChange(path, ev.currentTarget.value)
            }
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
                            <label for={optionValue}
                                   onClick={e => this.handleChange(e.target.value)}>
                                {optionValue}
                            </label>
                        </div>
                    );
                })
        </div>
    );
};
/**
 * Default tester for enum controls.
 * @type {RankedTester}
 */
export const enumFieldTester: RankedTester = rankWith(2, isEnumControl);

export default registerStartupInput(
    enumFieldTester,
    connect(mapStateToFieldProps, mapDispatchToFieldProps)(EnumField)
);
