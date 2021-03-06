module.exports = {
  'post /socrata': {
    controller: 'socrata',
    action: 'register'
  },

  'get /socrata': {
    controller: 'socrata',
    action: 'list'
  },

  'get /socrata/:id': {
    controller: 'socrata',
    action: 'find'
  },

  'get /socrata/:id/:item.:format': {
    controller: 'socrata',
    action: 'findResource'
  },
  
  'get /socrata/:id/:item': {
    controller: 'socrata',
    action: 'findResource'
  },

  'get /socrata/:id/:item/FeatureServer/:layer/:method': {
    controller: 'socrata',
    action: 'featureserver'
  },

  'get /socrata/:id/:item/FeatureServer/:layer': {
    controller: 'socrata',
    action: 'featureserver'
  },

  'get /socrata/:id/:item/FeatureServer': {
    controller: 'socrata',
    action: 'featureserver'
  },

  
  'post /socrata/:id/:item/FeatureServer/:layer/:method': {
    controller: 'socrata',
    action: 'featureserver'
  },

  'post /socrata/:id/:item/FeatureServer/:layer': {
    controller: 'socrata',
    action: 'featureserver'
  },

  'post /socrata/:id/:item/FeatureServer': {
    controller: 'socrata',
    action: 'featureserver'
  },

  'get /socrata/:id/:item/thumbnail': {
    controller: 'socrata',
    action: 'thumbnail'
  },
  
  'get /socrata/:id/:item/tiles/:z/:x/:y.:format': {
    controller : 'socrata',
    action: 'tiles'
  },

  'delete /socrata/:id': {
    controller: 'socrata',
    action: 'del'
  },

  'get /socrata/:id/:item/preview': {
    controller: 'socrata',
    action: 'preview'
  },

  'get /socrata/:id/:item/drop': {
    controller: 'socrata',
    action: 'drop'
  }

}
