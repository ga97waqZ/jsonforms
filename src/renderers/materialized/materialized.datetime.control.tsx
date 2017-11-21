import { JSX } from '../JSX';
import { withIncreasedRank } from '../../core/testers';
import { Control, ControlProps, ControlState } from '../controls/Control';
import { mapStateToControlProps, registerStartupRenderer } from '../renderer.util';
import { datetimeControlTester } from '../controls/datetime.control';
import { connect, Event } from '../../common/binding';

export class DateTimeControl extends Control<ControlProps, ControlState> {

    render() {
        const { classNames, id, visible, enabled, errors, label } = this.props;

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
            </div>
        );
    }
}

export default registerStartupRenderer(
    withIncreasedRank(1, datetimeControlTester),
    connect(mapStateToControlProps)(DateTimeControl)
);
