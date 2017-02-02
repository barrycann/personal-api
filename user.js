var user = {
  name: "Barry",
  location: "Draper",
  occupations: ["Flash Developer", "Data Analyst", "Product Owner"],
  hobbies: [
    {
      name: "Hiking",
      type: "Outdoors"
    },
    {
      name: "Camping",
      type: "Outdoors"
    },
    {
      name: "Photography",
      type: "Art"
    },
   {
      name: "Sketching",
      type: "Art"
    },
   {
      name: "Video Games",
      type: "Gaming"
    }
  ],
  family: [
    {
      name: "Kelly",
      relation: "Wife",
      gender: "F"
    },
    {
      name: "Tyler",
      relation: "Brother",
      gender: "M"
    },{
      name: "Shannon",
      relation: "Sister",
      gender: "F"
    }
  ],
  restaurants: [
    {
      name: "Macaroni Grill",
      type: "Italian",
      rating: 8
    },
    {
      name: "Macdonalds",
      type: "Fast",
      rating: 4
    },
    {
      name: "J Dawgs",
      type: "Fast",
      rating: 6
    }
  ]
};

module.exports = user;