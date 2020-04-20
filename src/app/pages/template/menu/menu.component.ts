import {Component, OnInit} from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MenuNode} from "./menu-item-node.model";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {MenuItem} from "./menu-item.model";

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: [
    './menu.component.scss'
  ]
})

export class MenuComponent implements OnInit {

  public treeControl = new FlatTreeControl<MenuNode>(
    node => node.level,
    node => node.expandable
  );

  public treeFlattener = new MatTreeFlattener<MenuItem, MenuNode>(
    this.transformer.bind(this),
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  public readonly MENU_ITEMS: Array<MenuItem> = [
    {
      name: 'Home',
      routerLink: ['/home']
    },
    {
      name: 'Operators',
      children: [
        {
          name: 'Combine latest',
          routerLink: ['/operators', 'combine-latest']
        },
        {
          name: 'Fork join',
          routerLink: ['/operators', 'fork-join']
        },
        {
          name: 'Debounce time',
          routerLink: ['/operators', 'debounce-time']
        },
      ]
    },
  ];

  public dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );


  constructor() {
    this.dataSource.data = this.MENU_ITEMS;
  }

  private transformer(node: MenuItem, level: number): MenuNode {
    return {
      expandable: node?.children?.length > 0,
      level,
      menuItem: node
    };
  }

  public hasChild(_: number, node: MenuNode) {
    return node.expandable;
  }

  ngOnInit() {
  }
}
