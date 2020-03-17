const files = [
    {
        id: 1,
        name: "Root",
        id_parent: 0,
        type: "folder",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 2,
        id_parent: 1, //con của thằng có id là 1
        name: "FolderC1-1",
        type: "folder",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 3,
        id_parent: 1, //con của thằng có id là 1
        name: "FolderC1-2",
        type: "folder",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 4,
        id_parent: 2, 
        name: "FolderC2-1",
        type: "folder",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 5,
        id_parent: 2, 
        name: "FolderC2-2",
        type: "folder",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 6,
        id_parent: 4, 
        name: "FolderC3-1",
        type: "folder",
        created_at: new Date(),
        updated_at: new Date()
    }
  ];
  
  export default files;
  