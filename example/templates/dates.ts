import { registerExamples } from '../example';
const schema = {
  'type': 'object',
  'properties': {
    'date-time': {
      'type': 'string',
      'format': 'date-time'
    },
    'date': {
      'type': 'string',
      'format': 'date'
    },
    'time': {
      'type': 'string',
      'format': 'time'
    }
  }
};
const uischema = {
  'type': 'VerticalLayout',
  'elements': [
  {
  'type': 'HorizontalLayout',
  'elements': [
    {
      'type': 'Control',
      'scope': {
        '$ref': '#/properties/date-time'
      }
    },
  ]
  },
  {
  'type': 'HorizontalLayout',
  'elements': [
    {
      'type': 'Control',
      'scope': {
        '$ref': '#/properties/date'
      }
    },
    {
      'type': 'Control',
      'scope': {
        '$ref': '#/properties/time'
      }
    }
  ]
  }
]
};
const data = {
  'date-time':  '2017-11-26T23:11:18.353Z',
  'date': new Date().toISOString().substr(0, 10),
  'time': '13:37'
};
registerExamples([
  {name: 'dates', label: 'Dates', data: data, schema: schema, uiSchema: uischema}
]);
