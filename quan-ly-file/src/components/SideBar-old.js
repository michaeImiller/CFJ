getChildren(id, name) {
    const { data_children } = this.state;
    const father = this.searchIdChild(id, data_children);
    this.setState({
      itemFather: father,
      data_children: father.children,
      id_parent: id,
      item_breadcrumb: this.state.item_breadcrumb.concat('/', name)
    });
  }

  searchIdChild (id, array){
    const { data_children } = this.state;
    for (var i = 0; i < data_children.length; i++) {
      if (data_children[i].id === id) {
        return array[i];
      }
    }
  }
