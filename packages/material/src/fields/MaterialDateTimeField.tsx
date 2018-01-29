import * as React from 'react';
import {
  FieldProps,
  isDateTimeControl,
  mapStateToFieldProps,
  mapDispatchToFieldProps,
  RankedTester,
  rankWith,
  registerStartupInput
} from '@jsonforms/core';
import { connect } from 'react-redux';
import { DateTimePicker } from 'material-ui-pickers';
import * as moment from 'moment';
import 'moment/locale/de';
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import DateRangeIcon from 'material-ui-icons/DateRange';
import AccessTimeIcon from 'material-ui-icons/AccessTime';

export const MaterialDateTimeField = (props: FieldProps) => {
  const { data, id, enabled, uischema, path, handleChange, locale, translations } = props;

  const localeData = moment.localeData((locale));
  const localeDateTimeFormat = `${localeData.longDateFormat('L')} ${localeData.longDateFormat('LT')}`;
  const cancelLabel = translations.cancelLabel;
  const clearLabel = translations.clearLabel;

  let inputProps = {};

  return (
      <DateTimePicker
          value={data || null}
          onChange={ datetime =>
            handleChange(path, datetime ? moment(datetime).format() : '')
          }
          id={id}
          format={localeDateTimeFormat}
          ampm={false}
          cancelLabel={cancelLabel}
          clearLabel={clearLabel}
          clearable={true}
          disabled={!enabled}
          autoFocus={uischema.options && uischema.options.focus}
          fullWidth={true}
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
};
export const datetimeFieldTester: RankedTester = rankWith(2, isDateTimeControl);
export default registerStartupInput(
  datetimeFieldTester,
  connect(mapStateToFieldProps, mapDispatchToFieldProps)(MaterialDateTimeField)
);
