import { registerExamples } from './register';

export const schema = {
	"type": "object",
	"properties": {
		"name": {
			"type": "string",
			"description": "%namedescription"
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
											"label": "%name",
											"options": {
												"displayError": true
											}
										},
										{
											"type": "Control",
											"scope": "#/properties/description",
											"label": "%description",
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
											"label": "%secondHand"
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
											"label": "%numberOfPages"
										},
										{
											"type": "Control",
											"scope": "#/properties/author",
											"label": "%author"
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
											"label": "%publisher"
										},
										{
											"type": "Control",
											"scope": "#/properties/language",
											"label": "%language"
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
											"label": "%ISBNnumber"
										},
										{
											"type": "Control",
											"scope": "#/properties/ageRestriction",
											"label": "%ageRestriction"
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
											"label": "%price",
                      "options": {
												"format": true
											}
										},
										{
											"type": "Control",
											"scope": "#/properties/shippingPrice",
											"label": "%shippingPrice",
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
											"label": "%generalDiscount"
										},
										{
											"type": "Control",
											"scope": "#/properties/discountWithPromotionCode",
											"label": "%discountWithPromotionCode"
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
											"label": "%deliverableOn"
										},
										{
											"type": "Control",
											"scope": "#/properties/deliveryOptions",
											"label": "%deliveryOptions"
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
											"label": "%internationalShipping"
										},
										{
											"type": "Control",
											"scope": "#/properties/soldOut",
											"label": "%soldOut"
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
											"label": "%itemsInStock"
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
											"label": "%brand"
										},
										{
											"type": "Control",
											"scope": "#/properties/bestBefore",
											"label": "%bestBefore"
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
											"label": "%producedOn"
										},
										{
											"type": "Control",
											"scope": "#/properties/EANCode",
											"label": "%EANCode"
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
											"label": "%weight"
										},
										{
											"type": "Control",
											"scope": "#/properties/weightIncludingPackaging",
											"label": "%weightIncludingPackaging"
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
											"label": "%isPublished"
										},
										{
											"type": "Control",
											"scope": "#/properties/numberOfViews",
											"label": "%numberOfViews"
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
											"label": "%onlineSince"
										},
										{
											"type": "Control",
											"scope": "#/properties/lastModifiedOn",
											"label": "%lastModifiedOn"
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
											"label": "%auctionStarts"
										},
										{
											"type": "Control",
											"scope": "#/properties/auctionEnds",
											"label": "%auctionEnds"
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
											"label": "%numberOfBidders"
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

const translations = {
  'en-US': {
    name: 'Name',
    description: 'Description',
    secondHand: 'Second hand',
    numberOfPages: 'Number of pages',
    author: 'Author',
    publisher: 'Publisher',
    language: 'Language',
    ISBNnumber: 'ISBN number',
    ageRestriction: 'Age restriction',
    price: 'Price',
    shippingPrice: 'Shipping price',
    generalDiscount: 'General discount',
    discountWithPromotionCode: 'Discount with promotion code',
    deliverableOn: 'Deliverable on',
    deliveryOptions: 'Delivery options',
    internationalShipping: 'International shipping',
    soldOut: 'Sold out',
    itemsInStock: 'Items in stock',
    brand: 'Brand',
    bestBefore: 'Best before',
    producedOn: 'Produced on',
    EANCode: 'EAN code',
    weight: 'Weight',
    weightIncludingPackaging: 'Weight including packaging',
    isPublished: 'Is published',
    numberOfViews: 'Number of views',
    onlineSince: 'Online since',
    lastModifiedOn: 'Last modified on',
    auctionStarts: 'Auction starts',
    auctionEnds: 'Auction ends',
    numberOfBidders: 'Number of bidders',
    secondHandDescription: 'Whether this item is second-hand or new',
    cancelLabel: 'CANCEL',
    clearLabel: 'CLEAR',
    namedescription: 'Please Enter Your Name',
    tabDescription: 'Description',
    catGeneral: 'General',
    catBook: 'Book',
    catShirt: 'Shirt',
    tabDetails: 'Details',
    catPricing: 'Pricing',
    catDelivery: 'Delivery',
    catManufacturer: 'Manufacturer',
    catPublishing: 'Publishing',
    tabAuction: 'Auction',
    catTime: 'Time',
    catBids: 'Bids'
  },
  'de-DE': {
    name: 'Name',
    description: 'Beschreibung',
    secondHand: 'Gebraucht',
    numberOfPages: 'Anzahl der Seiten',
    author: 'Autor',
    publisher: 'Verlag',
    language: 'Sprache',
    ISBNnumber: 'ISBN-Nummer',
    ageRestriction: 'Altersbeschränkung',
    price: 'Preis',
    shippingPrice: 'Versandkosten',
    generalDiscount: 'Allgemeiner Rabatt',
    discountWithPromotionCode: 'Rabatt mit Gutscheincode',
    deliverableOn: 'Lieferbar am',
    deliveryOptions: 'Lieferoptionen',
    internationalShipping: 'Internationale Lieferung',
    soldOut: 'Ausverkauft',
    itemsInStock: 'Stückzahl auf Lager',
    brand: 'Marke',
    bestBefore: 'Mindestens haltbar bis',
    producedOn: 'Hergestellt am',
    EANCode: 'EAN-Code',
    weight: 'Gewicht',
    weightIncludingPackaging: 'Gewicht inkl. Verpackung',
    isPublished: 'Veröffentlicht',
    numberOfViews: 'Anzahl der Seitenaufrufe',
    onlineSince: 'Online seit',
    lastModifiedOn: 'Zuletzt bearbeitet am',
    auctionStarts: 'Auktion beginnt am',
    auctionEnds: 'Auktion endet am',
    numberOfBidders: 'Anzahl der Gebote',
    secondHandDescription: 'Ob dieser Artikel gebraucht oder neu ist',
    cancelLabel: 'ABBRECHEN',
    clearLabel: 'LÖSCHEN',
    namedescription: 'Bitte geben Sie Ihren Namen ein',
    tabDescription: 'Beschreibng',
    catGeneral: 'Allgemein',
    catBook: 'Buch',
    catShirt: 'Shirt',
    tabDetails: 'Details',
    catPricing: 'Preis',
    catDelivery: 'Lieferung',
    catManufacturer: 'Hersteller',
    catPublishing: 'Veröffentlichung',
    tabAuction: 'Auktion',
    catTime: 'Zeitraum',
    catBids: 'Gebote'
  }
};

const numberSeparators = {
  'en-US': {
    decimalSeparator: '.',
    thousandsSeparator: ','
  },
  'de-DE': {
    decimalSeparator: ',',
    thousandsSeparator: '.'
  }
};

const config = {
	trim: false
};

registerExamples([
  {
    name: 'demo',
    label: 'Demo (good)',
    data,
    schema,
    uiSchema: uischema,
    translations,
		numberSeparators,
		config
  }
]);
