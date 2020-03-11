const types = ['folder', 'file'];

const files =  [
    {
      id: 1,
      name: "Example comment here.",
      type: "user2",
      children: [
        {
        id: 2,
        name: "Another example comment text.",
        type: "user3",
        children: [
        {
            id: 3,
            name: "Another example comment text.",
            type: "user4",
            children: []
        },
        {
            id: 3,
            name: "Another example comment text.",
            type: "user4",
            children: []
        },
        {
            id: 3,
            name: "Another example comment text.",
            type: "user4",
            children: []
        }]
        }
      ]
    },
    {
        id: 4,
        name: "Example comment here 2.",
        type: "user5",
        children: []
    }
];

export default files;
  