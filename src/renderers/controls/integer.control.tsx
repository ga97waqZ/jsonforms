import { JSX } from '../JSX';
import * as _ from 'lodash';
import { and, RankedTester, rankWith, schemaTypeIs, uiTypeIs } from '../../core/testers';
import {
  formatErrorMessage,
  mapStateToControlProps,
  registerStartupRenderer,
  setLabelField
} from '../renderer.util';
import { connect, Event } from '../../common/binding';
import { Control, ControlProps, ControlState } from './Control';

/**
 * Default tester for integer controls.
 * @type {RankedTester}
 */
export const integerControlTester: RankedTester = rankWith(2, and(
  uiTypeIs('Control'),
  schemaTypeIs('integer')
));

export class IntegerControl extends Control<ControlProps, ControlState> {

  render() {
    const {classNames, id, visible, enabled, errors, label, uischema, required } = this.props;
    const isValid = errors.length === 0;
    const divClassNames = 'validation' + (isValid ? '' : ' validation_error');

    return (
      <div className={classNames.wrapper}>
        <label htmlFor={id} className={classNames.label} data-error={errors}>
          {setLabelField(label, required)}
        </label>
        <input type='number'
               step='1'
               value={this.state.value}
               onChange={(ev: Event<HTMLInputElement>) =>
                 this.handleChange(_.toInteger(ev.currentTarget.value))
               }
               className={classNames.input}
               id={id}
               hidden={!visible}
               disabled={!enabled}
               autoFocus={uischema.options && uischema.options.focus}
        />
        <div className={divClassNames}>
          {!isValid ? formatErrorMessage(errors) : ''}
        </div>
      </div>
    );
  }
}

export default registerStartupRenderer(
  integerControlTester,
  connect(mapStateToControlProps)(IntegerControl)
);
