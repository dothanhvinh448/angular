import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';
import { CartproductService } from './cartproduct.service';

@Injectable({
  providedIn: 'root'
})
export class QuantriService {

  constructor(private cartproduct:CartproductService) { }
public listitem:Order|any=[]
listitem1:Order[]|any=[]




acceptance()
{
localStorage.setItem("Itemslice",JSON.stringify(this.listitem))

}
getacceptance()
{
  {
    var getitem=localStorage.getItem("Itemslice")
  try {
    if(getitem){
      return this.listitem=JSON.parse(getitem)
    }else{
      return ['lỗi']
    }
  } catch (error) {
    return []
  }
}
}

}
