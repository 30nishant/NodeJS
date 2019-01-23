let handlebars = require("handlebars");

let feederData=
[
  {                                 //product with ID:1 starts
    "baseId": "1",                  
    "feature": {                    //ID:1 feature
      "1": "parent",
      "2": "first entry"
    },
    "contentType": {                //ID:1 contentType
      "1": {
        "value": "pure"
      },
      "2": {
        "value": "mix"
      }
    },
    "isActive": true,               //ID:1 status
    "childProducts": [              //ID:1 child products start
      {                             //ID:1 child products 1.1
        "baseId": "1-1",            
        "isActive": true
      },
      {                             //ID:1 child products 1.2
        "baseId": "1-2",
        "isActive": false
      },
      {                             //ID:1 child products 1.3
        "baseId": "1-3",
        "isActive": true
      },
      {                             //ID:1 child products 1.4
        "baseId": "1-4",
        "isActive": true,
        "feature": {
          "1": "parent",
          "2": "first entry"
        },
        "searchTerms": {
          "0": "glue",
          "1": "adhesive",
          "2": "stick"
        }                           
      }                             // child product 1.4 ends
    ]                               //ID:1 child products ends
  },                                //product with ID:1 ends
  {                                 //product with ID:10 starts
    "baseId": "10",
    "isActive": true,               //ID:10 status
    "searchTerms": {                //ID:10 searchItems
      "0": "glue",
      "1": "adhesive",
      "2": "stick"
    },
    "childProducts": [              //ID:10 childProducts starts
      {
        "baseId": "10-1",
        "isActive": true,
        "searchTerms": {
          "0": "glue"
        }
      },
      {
        "baseId": "10-2",
        "isActive": false
      },
      {
        "baseId": "10-3",
        "isActive": true
      },
      {
        "baseId": "10-4",
        "isActive": true
      }
    ]                               //ID:10 childProducts ends
  }                                 //product with ID:1 ends
]


let expectedTemplate=
"<products>{{#each this}}"+ 
   "<product>"+
       "<baseId>{{baseId}}</baseId>"+ 
       "<isActive>{{isActive}}</isActive>"+
       "<contentType>{{#each contentType}}"+
           "<contentTypeValue>{{value}}</contentTypeValue>{{/each}}"+
       "</contentType>"+
       "<features>{{#each feature}}"+
           "<feature>{{this}}</feature>{{/each}}"+
       "</features>"+
       "<searchTerms>{{#each searchTerms}}"+
           "<searchTermValue>{{this}}</searchTermValue>{{/each}}"+
       "</searchTerms>"+
       "<childProducts>"+
           "<childProduct>{{#each this.childProducts}}"+
               "<baseId>{{baseId}}</baseId>"+
               "<isActive>{{isActive}}</isActive>"+
               "<features>{{#each feature}}"+
                   "<feature>{{this}}</feature>{{/each}}"+
               "</features>"+
               "<searchTerms>{{#each searchTerms}}"+
                   "<searchTermValue>{{this}}</searchTermValue>{{/each}}"+
               "</searchTerms>"+
           "</childProduct>{{/each}}"+
       "</childProducts>"+
   "</product>{{/each}}"+
"</products>";

let rahulsarkar=handlebars.compile(expectedTemplate);
let modisarkar=rahulsarkar(feederData);
console.log(modisarkar);