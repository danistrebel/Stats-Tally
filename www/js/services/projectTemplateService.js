angular.module('statstally.services')

.factory('templates', [function() {
  return [
      {
        name: "5 Fruits per day",
        clickers : [
          {
            name: "Banana",
            clicks: []
          },
          {
            name: "Orange",
            clicks: []
          },
          {
            name: "Apple",
            clicks: []
          }
        ]
      },
      {
        name: "Soccer Stats",
        clickers : [
          {
            name: "Goal Team A",
            clicks: []
          },
          {
            name: "Goal Team B",
            clicks: []
          },
          {
            name: "Offsite A",
            clicks: []
          },
          {
            name: "Offsite B",
            clicks: []
          }
        ]
      },
      {
        name: "Running Shoe Brands",
        clickers : [
          {
            name: "Nike",
            clicks: []
          },
          {
            name: "Adidas",
            clicks: []
          },
          {
            name: "Asics",
            clicks: []
          },
          {
            name: "Other",
            clicks: []
          }
        ]
      },
    ];
}]);
