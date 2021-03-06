import { Component, OnInit } from '@angular/core';
import { IdeahamsterService } from '../ideahamster.service';
import { ISubDomain } from '../subdomain';
import { IDomain } from '../domain';


@Component({
  selector: 'app-idea-service',
  templateUrl: './idea-service.component.html',
  styleUrls: ['./idea-service.component.css']
})
export class IdeaServiceComponent implements OnInit {
  selected='';
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  public domains:IDomain[]=[];
  public subdomains:ISubDomain[]=[];

  constructor(private _ideahamsterservice: IdeahamsterService) { }

  ngOnInit() {
    this._ideahamsterservice.getDomains()
        .subscribe(data => {
          this.domains = data
        });
        this._ideahamsterservice.getSubDomains()
        .subscribe(data => {
          this.subdomains = data;
        });
      }
   addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }  

}
