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
			"type": "number"
		},
		"discountWithPromotionCode": {
			"type": "number"
		},
		"numberOfViews": {
			"type": "integer"
		}
	},
	"required": ["name", "description"]
};

export const uischema = {
	"type": "VerticalLayout",
	"elements": [
		{
			"type": "Group",
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
											"scope": { "$ref":  "#/properties/name" },
											"options": {
												"displayError": true
											}
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/description" },
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
											"scope": { "$ref": "#/properties/secondHand" },
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
											"scope": { "$ref": "#/properties/numberOfPages" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/author" },
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
											"scope": { "$ref": "#/properties/publisher" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/language" },
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
											"scope": { "$ref": "#/properties/ISBNnumber" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/ageRestriction" },
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
			"type": "Group",
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
											"scope": { "$ref": "#/properties/price" },
                      "options": {
												"format": true
											}
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/shippingPrice" },
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
											"scope": { "$ref": "#/properties/generalDiscount" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/discountWithPromotionCode" },
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
											"scope": { "$ref": "#/properties/deliverableOn" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/deliveryOptions" },
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
											"scope": { "$ref": "#/properties/internationalShipping" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/soldOut" },
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
											"scope": { "$ref": "#/properties/itemsInStock" },
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
											"scope": { "$ref": "#/properties/brand" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/bestBefore" },
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
											"scope": { "$ref": "#/properties/producedOn" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/EANCode" },
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
											"scope": { "$ref": "#/properties/weight" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/weightIncludingPackaging" },
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
											"scope": { "$ref": "#/properties/isPublished" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/numberOfViews" },
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
											"scope": { "$ref": "#/properties/onlineSince" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/lastModifiedOn" },
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
			"type": "Group",
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
											"scope": { "$ref": "#/properties/auctionStarts" },
										},
										{
											"type": "Control",
											"scope": { "$ref": "#/properties/auctionEnds" },
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
											"scope": { "$ref": "#/properties/numberOfBidders" },
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
