import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../../services/server.service';
import { Router,ActivatedRoute } from '@angular/router';
declare var iziToast:any;

declare var $: any;
import * as moment from 'moment';
@Component({
  selector: 'app-createslot',
  templateUrl: './createslot.component.html',
  styleUrls: ['./createslot.component.css']
})
export class CreateslotComponent implements OnInit {
   public selectedMoment = new Date();
addtime: FormGroup;
timeslotlist:any=[];
eveslot:any=[];
morslot:any=[];
eveslotno_title=false;
morslotno_title=false;
showbtnval = true;
    constructor(private serverService: ServerService, private router:Router,private route: ActivatedRoute){ }

  ngOnInit(): void {
  	this.addtime = new FormGroup({
     
      'start_time' : new FormControl(null,Validators.required),
      'end_time' : new FormControl(null,Validators.required),
     
     });

    this.getslots()
    this.showbtn()
 
  }
showbtn(){
   var now = new Date();
  now.setHours(0,0,0,0);
  if (this.selectedMoment < now) {
    this.showbtnval = false;
  } else {
    this.showbtnval = true;

  }
}

close(){
$("#id01").css("display","none")
}
open()
{
  this.addtime.patchValue({
 start_time :"",
 end_time :""
  });
$("#id01").css("display","block")

}


save(){

if(this.addtime.value.start_time !='' && this.addtime.value.end_time != ''){


 var t1 = this.addtime.value.start_time.split(":")[0]*60 +this.addtime.value.start_time.split(":")[1]*1;
  
 var t2 = this.addtime.value.end_time.split(":")[0]*60 + this.addtime.value.end_time.split(":")[1]*1;
 var  diff = t2 - t1;
if(Math.sign(diff) == -1){
alert("Please select To time as greater than From time")
}else{

if(diff==30){
$("#id01").css("display","none")

this.addslots()
}else{
alert("Please select time duration as 30 mins")

}
}




}else{


}

}

getdate(){
  this.showbtn()
  this.getslots()
}


 getslots(){
this.eveslot =[];
this.morslot=[];
this.eveslotno_title=false;
this.morslotno_title=false;

   var select_date = moment(this.selectedMoment).format('DD-MM-YYYY');
    let api_req:any = '{"slot_date":"'+select_date+'"}';
    let url="retrieveSlots"
    this.serverService.sendServer(api_req,url).subscribe((response:any) => {
      if(response.status=="true"){
 this.timeslotlist = response.data;
 for (var i = 0; i < this.timeslotlist.length; i++) {
   var hr =this.timeslotlist[i].slot_from.split(':');
   if(hr[0]>=12){
     console.log(this.timeslotlist[i])
this.eveslot.push(this.timeslotlist[i])

   }
   else{
this.morslot.push(this.timeslotlist[i])

   }
 }
 if(this.morslot.length == 0)
   this.morslotno_title=true;

 if(this.eveslot.length == 0)
   this.eveslotno_title=true;

      } else {


      }
    }, 
    (error)=>{
        console.log(error);
    });
  }

addslots(){
    let api_req:any = '{"slot_date":"'+moment(this.selectedMoment).format('DD-MM-YYYY')+'","slot_from":"'+this.addtime.value.start_time+'","slot_to":"'+this.addtime.value.end_time+'"}';
    let url="slotCreate"
    this.serverService.sendServer(api_req,url).subscribe((response:any) => {
      if(response.status=="true"){

    iziToast.success({
          message: response.message,
          position: 'topRight'
        });
 this.getslots()

      } else {
iziToast.error({
          message: response.message,
          position: 'topRight'
        });

      }
    }, 
    (error)=>{
        console.log(error);
    });
  }



}
