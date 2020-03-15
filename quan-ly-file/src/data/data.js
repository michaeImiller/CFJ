const files = [
  {
    id: 1,
    name: "Root 1.",
    type: "folder",
    children: [
      {
        id_parent: 1,
        id: 2,
        name: "F1 1 Root 1",
        type: "folder",
        children: [
          {
            id_parent: 2,
            id: 3,
            name: "F2 1 Root 1",
            type: "folder",
            children: [
              {
                id_parent: 3,
                id: 8,
                name: "F3 1 Root 1",
                type: "folder",
                children: []
              }
            ]
          },
          {
            id_parent: 2,
            id: 3,
            name: "F2 2 Root 1",
            type: "folder",
            children: []
          },
          {
            id_parent: 2,
            id: 3,
            name: "F2 3 Root 1",
            type: "folder",
            children: []
          }
        ]
      },
      {
        id: 4,
        id_parent: 1,
        name: "F1 2 Root 1",
        type: "folder",
        children: []
      },
      {
        id_parent: 1,
        id: 6,
        name: "F1 3",
        type: "folder",
        children: []
      }
    ]
  },
  {
    id: 5,
    name: "Root 2",
    type: "folder",
    children: [
      {
        id_parent: 5,
        id: 7,
        name: "F1 1",
        type: "folder",
        children: [
          {
            id_parent: 2,
            id: 3,
            name: "F2 1",
            type: "folder",
            children: []
          },
          {
            id_parent: 2,
            id: 3,
            name: "F2 2",
            type: "folder",
            children: []
          },
          {
            id_parent: 2,
            id: 3,
            name: "F2 3.",
            type: "folder",
            children: []
          }
        ]
      },
      {
        id: 4,
        id_parent: 1,
        name: "F1 2",
        type: "folder",
        children: []
      },
      {
        id_parent: 1,
        id: 6,
        name: "F1 3",
        type: "folder",
        children: []
      }
    ]
  }
];

export default files;
