import { JSX } from '../JSX';
import * as _ from 'lodash';
import { and, formatIs, RankedTester, rankWith, uiTypeIs } from '../../core/testers';
import { Control, ControlProps, ControlState } from './Control';
import {
    formatErrorMessage,
    mapStateToControlProps,
    registerStartupRenderer
} from '../renderer.util';
import { connect, Event } from '../../common/binding';

/**
 * Default tester for datetime controls.
 * @type {RankedTester}
 */
export const datetimeControlTester: RankedTester = rankWith(2, and(
    uiTypeIs('Control'),
    formatIs('date-time')
));

export class DateTimeControl extends Control<ControlProps, ControlState> {

    render() {
        const { classNames, id, visible, enabled, errors, label } = this.props;

        const isValid = errors.length === 0;
        const divClassNames = 'validation' + (isValid ? '' : ' validation_error');

        const localISOTime = (datestring: string): string => {
            const date: Date = new Date(datestring);
            const tzoffset: number = date.getTimezoneOffset() * 60000; // offset in milliseconds

            return (new Date(date.valueOf() - tzoffset)).toISOString();
        };

        return (
            <div className={classNames.wrapper}>
                <label htmlFor={id} className={classNames.label} data-error={errors}>
                    {label}
                </label>
                <input type='datetime-local'
                       value={this.state.value.toString().substr(0, 16)}
                       onChange={(ev: Event<HTMLInputElement>) =>
                           this.handleChange(localISOTime(ev.currentTarget.value))
                       }
                       className={classNames.input}
                       id={id}
                       hidden={!visible}
                       disabled={!enabled}
                />
                <div className={divClassNames}>
                    {!isValid ? formatErrorMessage(errors) : ''}
                </div>
            </div>
        );
    }
}

export default registerStartupRenderer(
    datetimeControlTester,
    connect(mapStateToControlProps)(DateTimeControl)
);
