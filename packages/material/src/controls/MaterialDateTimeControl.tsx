import * as React from 'react';
import {
  computeLabel,
  Control,
  ControlElement,
  ControlProps,
  ControlState,
  isDateTimeControl,
  mapDispatchToControlProps,
  mapStateToControlProps,
  RankedTester,
  rankWith,
  registerStartupRenderer,
  resolveSchema
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { DateTimePicker } from 'material-ui-pickers';
import * as moment from 'moment';
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import DateRangeIcon from 'material-ui-icons/DateRange';
import AccessTimeIcon from 'material-ui-icons/AccessTime';

export class MaterialDateTimeControl extends Control<ControlProps, ControlState> {
  render() {
    const {
      id,
      errors,
      label,
      uischema,
      schema,
      visible,
      enabled,
      required,
      path,
      handleChange,
      locale,
      translations,
      data
    } = this.props;
    const isValid = errors.length === 0;
    const trim = uischema.options && uischema.options.trim;
    const controlElement = uischema as ControlElement;
    const resolvedSchema = resolveSchema(schema, controlElement.scope);
    const description = resolvedSchema.description === undefined ? '' : resolvedSchema.description;
    const localeData = moment.localeData((locale));
    const localeDateTimeFormat = `${localeData.longDateFormat('L')} ${localeData.longDateFormat('LT')}`;
    const cancelLabel = translations.cancelLabel;
    const clearLabel = translations.clearLabel;
    let style = {};
    if (!visible) {
      style = {display: 'none'};
    }
    let inputProps = {};

    return (
      <DateTimePicker
        id={id}
        label={computeLabel(label, required)}
        error={!isValid}
        style={style}
        fullWidth={!trim}
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
        helperText={!isValid ? errors : description}
        InputLabelProps={{shrink: true, }}
        value={data || null}
        onChange={ datetime => 
          handleChange(path, datetime ? moment(datetime).format() : '')
        }
        format={localeDateTimeFormat}
        ampm={false}
        cancelLabel={cancelLabel}
        clearLabel={clearLabel}
        clearable={true}
        disabled={!enabled}
        autoFocus={uischema.options && uischema.options.focus}
        leftArrowIcon={<KeyboardArrowLeftIcon />}
        rightArrowIcon={<KeyboardArrowRightIcon />}
        dateRangeIcon={<DateRangeIcon />}
        timeIcon={<AccessTimeIcon />}
        onClear={() =>
          handleChange(path, '')
        }
        InputProps={inputProps}
      />
    );
  }
}
export const datetimeControlTester: RankedTester = rankWith(2, isDateTimeControl);
export default registerStartupRenderer(
  datetimeControlTester,
  connect(mapStateToControlProps, mapDispatchToControlProps)(MaterialDateTimeControl)
);
