import { Component, OnInit } from '@angular/core';
import { MockData } from './mock-Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  categoryList1: any = []
  categoryList2: any = []
  categoryList3: any = []
  categoryList4: any = []

  constructor() { }
  ngOnInit() {
    const dataList = this.conditinalSelect(MockData, false);
    this.categoryList1 = this.getAllFilter(dataList, 'CSE');
    this.categoryList2 = this.getAllFilter(dataList, 'Elecrical');
    this.categoryList3 = this.getAllFilter(dataList, 'Civil');
    this.categoryList4 = this.getAllFilter(dataList, 'Mechanical');
  }

  getAllFilter(array: Array<any> = [], key: string) {
    return array.filter(item => item.type === key);
  }
  selectAll(checked) {
    this.cseSelectAll(checked);
    this.elecricalSelectAll(checked);
    this.civilSelectAll(checked);
    this.mechanicalSelectAll(checked);
  }
  cseSelectAll(checked) {
    this.categoryList1 = [...this.conditinalSelect(this.categoryList1, checked)];
  }
  elecricalSelectAll(checked) {
    this.categoryList2 = [...this.conditinalSelect(this.categoryList2, checked)];
  }
  civilSelectAll(checked) {
    this.categoryList3 = [...this.conditinalSelect(this.categoryList3, checked)];
  }
  mechanicalSelectAll(checked) {
    this.categoryList4 = [...this.conditinalSelect(this.categoryList4, checked)];
  }
  conditinalSelect(array: Array<any> = [], condition) {
    return [...array.map(item => {
      item['isSelected'] = condition;
      return item;
    })];
  }
  checkAllSelected() {
    const cse = this.getAllSelectedCount(this.categoryList1);
    const ele = this.getAllSelectedCount(this.categoryList2);
    const civil = this.getAllSelectedCount(this.categoryList3);
    const mech = this.getAllSelectedCount(this.categoryList4);
    const total = cse + ele + civil + mech;
    return total === 22;
  }
  getCseSelectCount() {
    return this.getAllSelectedCount(this.categoryList1) === 10;
  }
  getElecricalCount() {
    return this.getAllSelectedCount(this.categoryList2) === 6;
  }
  getCivilCount() {
    return this.getAllSelectedCount(this.categoryList3) === 3;
  }
  getMechCount() {
    return this.getAllSelectedCount(this.categoryList4) === 3;
  }

  getAllSelectedCount(array: Array<any> = []) {
    return array.filter(item => item['isSelected']) ? array.filter(item => item['isSelected']).length : 0;
  }
  selectedItem(checked, category, index) {
    if (category === 'CSE') {
      this.categoryList1[index].isSelected = checked;
    } else if (category === 'elctrical') {
      this.categoryList2[index].isSelected = checked;
    } else if (category === 'civil') {
      this.categoryList3[index].isSelected = checked;
    } else if (category === 'mech') {
      this.categoryList4[index].isSelected = checked;
    }
  }
}


