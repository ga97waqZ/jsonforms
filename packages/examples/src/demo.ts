import { registerExamples } from './register';

export const schema = {
	"type": "object",
	"properties": {
		"name": {
			"type": "string"
		},
		"bestBefore": {
			"type": "string",
			"format": "date"
		},
		"itemsInStock": {
			"type": "integer"
		},
		"auctionEnds": {
			"type": "string",
			"format": "date-time"
		},
		"numberOfBidders": {
			"type": "integer"
		},
		"description": {
			"type": "string"
		},
		"isPublished": {
			"type": "boolean"
		},
		"auctionStarts": {
			"type": "string",
			"format": "date-time"
		},
		"EANCode": {
			"type": "string",
			"maxLength": 13
		},
		"author": {
			"type": "string"
		},
		"numberOfPages": {
			"type": "integer"
		},
		"price": {
			"type": "string"
		},
		"deliverableOn": {
			"type": "string",
			"format": "date-time"
		},
		"ISBNnumber": {
			"type": "string",
			"maxLength": 17
		},
		"language": {
			"type": "string"
		},
		"publisher": {
			"type": "string"
		},
		"deliveryOptions": {
			"type": "string",
			"enum" : ["regular", "express"]
		},
		"brand": {
			"type": "string"
		},
		"internationalShipping": {
			"type": "boolean"
		},
		"soldOut": {
			"type": "boolean"
		},
		"secondHand": {
			"type": "boolean"
		},
		"onlineSince": {
			"type": "string",
			"format" : "date-time"
		},
		"producedOn": {
			"type": "string",
			"format" : "date-time"
		},
		"ageRestriction": {
			"type": "integer"
		},
		"weight": {
			"type": "number"
		},
		"weightIncludingPackaging": {
			"type": "number"
		},
		"lastModifiedOn": {
			"type": "string",
			"format" : "date-time"
		},
		"shippingPrice": {
			"type": "string"
		},
		"generalDiscount": {
			"type": "number",
			"minimum": 0,
			"maximum": 1
		},
		"discountWithPromotionCode": {
			"type": "number",
			"minimum": 0,
			"maximum": 1
		},
		"numberOfViews": {
			"type": "integer"
		}
	},
	"required": ["name", "description"]
};

export const uischema = {
	"type": "Categorization",
	"elements": [
		{
			"type": "Category",
			"label": "Description",
			"elements": [
				{
					"type": "Group",
					"label": "General",
					"elements": [
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope":  "#/properties/name",
											"options": {
												"displayError": true
											}
										},
										{
											"type": "Control",
											"scope": "#/properties/description",
											"options": {
												"multi": true,
												"displayError": false
											}
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/secondHand",
										}
									]
								}
							]
						}
					]
				},
				{
					"type": "Group",
					"label": "Book",
					"elements": [
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/numberOfPages",
										},
										{
											"type": "Control",
											"scope": "#/properties/author",
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/publisher",
										},
										{
											"type": "Control",
											"scope": "#/properties/language",
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/ISBNnumber",
										},
										{
											"type": "Control",
											"scope": "#/properties/ageRestriction",
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "Category",
			"label": "Details",
			"elements": [
				{
					"type": "Group",
					"label": "Pricing",
					"elements": [
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/price",
                      "options": {
												"format": true
											}
										},
										{
											"type": "Control",
											"scope": "#/properties/shippingPrice",
											"options": {
												"format": true
											}
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/generalDiscount",
										},
										{
											"type": "Control",
											"scope": "#/properties/discountWithPromotionCode",
										}
									]
								}
							]
						}
					]
				},
				{
					"type": "Group",
					"label": "Delivery",
					"elements": [
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/deliverableOn",
										},
										{
											"type": "Control",
											"scope": "#/properties/deliveryOptions",
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/internationalShipping",
										},
										{
											"type": "Control",
											"scope": "#/properties/soldOut",
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/itemsInStock",
										}
									]
								}
							]
						}
					]
				},
				{
					"type": "Group",
					"label": "Manufacturer",
					"elements": [
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/brand",
										},
										{
											"type": "Control",
											"scope": "#/properties/bestBefore",
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/producedOn",
										},
										{
											"type": "Control",
											"scope": "#/properties/EANCode",
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/weight",
										},
										{
											"type": "Control",
											"scope": "#/properties/weightIncludingPackaging",
										}
									]
								}
							]
						}
					]
				},
				{
					"type": "Group",
					"label": "Publishing",
					"elements": [
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/isPublished",
										},
										{
											"type": "Control",
											"scope": "#/properties/numberOfViews",
										}
									]
								}
							]
						},
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/onlineSince",
										},
										{
											"type": "Control",
											"scope": "#/properties/lastModifiedOn",
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "Category",
			"label": "Auction",
			"elements": [
				{
					"type": "Group",
					"label": "Time",
					"elements": [
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/auctionStarts",
										},
										{
											"type": "Control",
											"scope": "#/properties/auctionEnds",
										}
									]
								}
							]
						}
					]
				},
				{
					"type": "Group",
					"label": "Bids",
					"elements": [
						{
							"type": "VerticalLayout",
							"elements": [
								{
									"type": "HorizontalLayout",
									"elements": [
										{
											"type": "Control",
											"scope": "#/properties/numberOfBidders",
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
}
;

export const data = {
  name: 'Cool Book',
  bestBefore: '2019-04-01',
  itemsInStock: 9,
  auctionEnds: '2018-02-19T22:14:51+00:00',
  numberOfBidders: 6,
  description: 'All cool nerds read this book.',
  isPublished: true,
  auctionStarts: '2018-02-15T10:02:19+00:00',
  EANCode: '7612345678900',
  author: 'Erika Mustermann',
  numberOfPages: 314,
  price: '8.99',
  deliverableOn: '2018-02-15T00:00:00+00:00',
  ISBNnumber: '978-3-16-148410-0',
  language: 'German',
  publisher: 'TUM',
  deliveryOptions: 'express',
  brand: 'GreatBooks',
  internationalShipping: false,
  soldOut: false,
  secondHand: true,
  onlineSince: '2017-11-01T12:45:00+00:00',
  producedOn: '2016-05-14T00:00:00+00:00',
  ageRestriction: 16,
  weight: 1.2,
  weightIncludingPackaging: 1.3,
  lastModifiedOn: '2018-02-14T17:38:46+00:00',
  shippingPrice: '2.99',
  generalDiscount: 0.1,
  discountWithPromotionCode: 0.3,
  numberOfViews: 327
};

registerExamples([
  {
    name: 'demo',
    label: 'Demo (bad)',
    data,
    schema,
    uiSchema: uischema
  }
]);
