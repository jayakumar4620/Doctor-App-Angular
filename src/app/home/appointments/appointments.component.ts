import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Router,ActivatedRoute } from '@angular/router';
declare var $: any;
import * as moment from 'moment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
appointmentlist:any=[];
selectdate ;
shownoimg =false;
show_date;
count;
today;
  constructor(private serverService: ServerService, private router:Router,private route: ActivatedRoute) {

  
   }

  ngOnInit(): void {
this.selectdate=moment(new Date()).format('DD-MM-YYYY')
this.getappointments()
  	var cur_date = new Date();
     this.formatshow_date(moment(cur_date).format('YYYY-MM-DD'),"initial");

  }

  getappointments(){
  this.shownoimg = false;

    let api_req:any = '{"slot_date":"'+this.selectdate+'"}';
    let url="appointments"
  
    this.serverService.sendServer(api_req,url).subscribe((response:any) => {
      if(response.status=="true"){

this.appointmentlist = response.data;
this.count = this.appointmentlist.length;
if(this.appointmentlist.length == 0){
	this.shownoimg = true;
}
for (var i = 0; i < this.appointmentlist.length; i++) {
	if(i% 2 == 0){

this.appointmentlist[i].sl_color ="#f89406";
this.appointmentlist[i].sl_color_bg ="#f4b85e3d";


	}else{
this.appointmentlist[i].sl_color ="#131ae296";
this.appointmentlist[i].sl_color_bg ="#eeeff6";
this.appointmentlist[i].sl_color_bg ="#f4b85e3d";


	}
}
console.log(this.appointmentlist)


      } else {


      }
    }, 
    (error)=>{
        console.log(error);
    });
  }


onChange(e){

this.selectdate =moment(e.target.value).format('DD-MM-YYYY');

this.formatshow_date(e,"selected");


this.getappointments();


}

formatshow_date(e,type){
var date;
	if(type == "initial"){
		console.log(e)
	var splitdate = e.split('-')
 date = new Date(splitdate[0], splitdate[1]-1, splitdate[2]);  
 if(moment(new Date()).format('DD-MM-YYYY') == moment(e).format('DD-MM-YYYY'))
   this.today = "Today"
 else
   this.today =""

	}else{
		var splitdate = e.target.value.split('-')
 date = new Date(splitdate[0], splitdate[1]-1, splitdate[2]);  
 if(moment(new Date()).format('DD-MM-YYYY') == moment(e.target.value).format('DD-MM-YYYY'))
   this.today = "Today"
 else
   this.today =""
	}
const month = date.toLocaleString('default', { month: 'short' });
this.show_date =  splitdate[2] +' ' +month + ' '+splitdate[0]

}


onActivate(event) {

         

}
    

}
