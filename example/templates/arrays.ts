import { registerExamples } from '../example';
const schema = {
      'type': 'object',
      'properties': {
        'name': {
          'type': 'string'
        },
        'vegetarian': {
          'type': 'boolean'
        },
        'birthDate': {
          'type': 'string',
          'format': 'date'
        },
        'nationality': {
          'type': 'string',
          'enum': ['DE', 'IT', 'JP', 'US', 'RU', 'Other']
        },
        'occupation': {
          'type': 'string'
        },
        'postalCode': {
            'type': 'object',
            'properties': {
              'default': {
                'type': 'string'
              },
              'maxlength': {
                'type': 'number'
              }
            }
        },
        'comments': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'date': {
                'type': 'string',
                'format': 'date'
              },
              'message': {
                'type': 'string'
              }
            }
          }
        },
        'date-time': {
          'type': 'string',
          'format': 'date-time'
        },          
        'time': {
          'type': 'string',
          'format': 'time'
        }
      },
      'required': ['occupation', 'nationality']
    };
const uischema = {
  'type': 'VerticalLayout',
  'elements': [
    {
      'type': 'Control',
      'scope': {
        '$ref': '#/properties/comments'
      },
      'options': {
        'submit': true
      }
    },
      {
          'type': 'Control',
          'scope': {
              '$ref': '#/properties/postalCode'
          }
      },
    {
      'type': 'Control',
      'scope': {
        '$ref': '#/properties/date-time'
      }
    },
    {
      'type': 'Control',
      'scope': {
        '$ref': '#/properties/time'
      },
    }
  ]
};
const uischemaSimple = {
  'type': 'Control',
  'scope': {
    '$ref': '#/properties/comments'
  },
  'label': 'Some more comments',
  'options': {
    'table': true
  }
};
const localISOTime = (datestring: string): string => {
    const date: Date = new Date(datestring);
    const tzoffset: number = date.getTimezoneOffset() * 60000; // offset in milliseconds

    return (new Date(date.valueOf() - tzoffset)).toISOString();
};
const data = {
  'postalCode': {
    'default': '12345',
    'maxlength': 5
  },
  'comments': [
    {
      'date': new Date(2001, 8, 11).toISOString().substr(0, 10),
      'message': 'This is an example message'
    },
    {
      'date': new Date().toISOString().substr(0, 10),
      'message': 'Get ready for booohay'
    }
  ],
  'date-time':  localISOTime(new Date().toString()),
  'time': '13:37'
};
registerExamples([
  {name: 'array', label: 'Array', data: data, schema: schema, uiSchema: uischema},
  {name: 'array-simple', label: 'Array Simple', data: data,
    schema: schema, uiSchema: uischemaSimple}
]);
