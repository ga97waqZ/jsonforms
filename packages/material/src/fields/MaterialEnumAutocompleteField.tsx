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
import { SyntheticEvent } from 'react';

export class MaterialEnumAutocompleteField
    extends Control<ControlProps, ControlState> {

    componentDidMount() {
        const {
            uischema,
            schema,
            id
        } = this.props;

        const options = resolveSchema(
            schema,
            (uischema as ControlElement).scope
        ).enum;

        const dataObject = {};

        for (const i of options) {
            dataObject[i] = null;
        }

        $(`[id='${id}']`).autocomplete({
            data: dataObject
        });
    }

    render() {
        const {
            classNames,
            id,
            label,
            visible,
            enabled,
            errors
        } = this.props;

        return (
            <div className={classNames.wrapper}>
                <input
                    className={classNames.input}
                    hidden={!visible}
                    disabled={!enabled}
                    value={this.state.value}
                    onChange={(ev: Event<HTMLInputElement>) => {
                        if (ev.currentTarget) {
                            this.handleChange(ev.currentTarget.value);
                        }
                    }
                    }
                    id={id}
                    type='text'
                />
                <label htmlFor={id} className={classNames.label} data-error={errors}>
                    {label}
                </label>
            </div>
        );
    }
}

/**
 * Default tester for enum controls.
 * @type {RankedTester}
 */
export const enumAutocompleteFieldTester: RankedTester = rankWith(2, and(
    uiTypeIs('Control'),
    schemaMatches(schema => schema.hasOwnProperty('enum')),
    enumLengthAtLeast(15)
));

export default registerStartupRenderer(
    withIncreasedRank(1, enumAutocompleteFieldTester),
    connect(mapStateToControlProps, mapDispatchToControlProps)(MaterialEnumAutocompleteField)
);

