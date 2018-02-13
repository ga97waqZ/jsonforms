import * as React from 'react';
import {
    and,
    Control,
    ControlElement,
    ControlProps,
    ControlState,
    enumLengthAtLeast,
    mapDispatchToControlProps,
    mapStateToControlProps,
    RankedTester,
    rankWith,
    resolveSchema,
    schemaMatches,
    uiTypeIs
} from '@jsonforms/core';
import { connect } from 'react-redux';

export class EnumAutocompleteField
    extends Control<ControlState, ControlProps> {

    render() {
        const  { uischema, schema, classNames, id, label,
            visible, enabled, path, errors, dispatch } = this.props;

        const isValid = errors.length === 0;
        const options = resolveSchema(
            schema,
            (uischema as ControlElement).scope
        ).enum;
        const divClassNames = 'validation' + (isValid ? '' : ' validation_error');

        return (
            <div className={classNames.wrapper}>
                <label htmlFor={id} className={classNames.label} data-error={errors}>
                    {label}
                </label>
                <input
                    className={classNames.input}
                    hidden={!visible}
                    disabled={!enabled}
                    value={this.state.value}
                    onChange={(ev: Event<HTMLSelectElement>) =>
                        dispatch(update(path, () => ev.currentTarget.value))
                    }
                    list={id}
                />
                <datalist id={id}>
                    {
                        options.map(optionValue => {
                            return (
                                <option
                                    value={optionValue}
                                />
                            );
                        })
                    }
                </datalist>
                <div className={divClassNames}>
                    {!isValid ? formatErrorMessage(errors) : ''}
                </div>
            </div>
        );
    }
}

/**
 * Default tester for autocomplete controls.
 * @type {RankedTester}
 */
export const enumAutocompleteFieldTester: RankedTester = rankWith(2, and(
    uiTypeIs('Control'),
    schemaMatches(schema => schema.hasOwnProperty('enum')),
    enumLengthAtLeast(15)
));

export default registerStartupRenderer(
    enumAutocompleteFieldTester,
    connect(mapStateToControlProps, mapDispatchToControlProps)(EnumAutocompleteField)
);
