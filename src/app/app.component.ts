import { Component } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drang and drop';
  droppedItems = []; hasElements = true;
  dropdown = "dropdown-"
  items = [
    {name: "Apple", type: "fruit"}, 
    {name: "Carrot", type: "vegetable"},
    {name: "Orange", type: "fruit"}
  ];
  onItemDrop(e: any) {
      // Get the dropped data here
      if(!this.getKeyByValue(this.droppedItems,e.dragData)){
        this.droppedItems.push(e.dragData);
        this.items.splice(this.getKeyByValue(this.items,e.dragData),1)
      }
  }
  onItemDropBack(e: any) {
    // Get the dropped data here
    if(!this.getKeyByValue(this.items,e.dragData)){
      this.items.push(e.dragData);
      this.droppedItems.splice(this.getKeyByValue(this.droppedItems,e.dragData),1)
    }
    if(this.droppedItems.length > 0){
      this.hasElements = false
    }else{
      this.hasElements = true
    }
}
  getKeyByValue(object, value) {
    return parseInt(Object.keys(object).find(key => object[key] === value));
  }
  dropdownForm(i){
    
    if(document.getElementById("dropdown-"+i).style.display == "block")
      document.getElementById("dropdown-"+i).style.display = "none"
    else
      document.getElementById("dropdown-"+i).style.display = "block"
  }

  constructor() { }

}
