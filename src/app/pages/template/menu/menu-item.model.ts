export interface MenuItem {
  name: string,
  routerLink?: Array<string>,
  children?: Array<MenuItem>
}
