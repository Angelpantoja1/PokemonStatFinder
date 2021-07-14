import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Ipoke } from './ipoke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "";
  closeResult = "";
  pokeMon: Ipoke[] = [];
  OfficialDex: Ipoke[] = [];
  caught = 0;
  seen = 0;
  monOBJ: Ipoke = {
    pokedexNum: "",
    name: "",
    modalName: "",
    type: "",
    location: "",
    evolution: "",
    img: "",
    caught: "",
    seen: "",
    baseStats:""
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    fetch("https://spreadsheets.google.com/feeds/list/1CmATP39mPrkEne6aPtip-QeytH_FGC6n2sFC8bYyUH0/2/public/full?alt=json")
      .then(response => response.json())
      .then(data => {
        let pokeentry = data.feed.entry
        console.log(pokeentry);
        for (let i = 2; i < pokeentry.length; i++) {
          let pokeOBJ = {
            pokedexNum: `${pokeentry[i].gsx$galar.$t}`,
            name: `Name: ${pokeentry[i].gsx$name.$t}`,
            modalName: pokeentry[i].gsx$name.$t,
            type: `Type: ${pokeentry[i].gsx$type.$t}`,
            location: `Location: ${pokeentry[i].gsx$location.$t}`,
            evolution: `Evolution: ${pokeentry[i].gsx$evolution.$t}`,
            img: `${pokeentry[i].gsx$img.$t.toLowerCase()}`,
            caught: pokeentry[i].gsx$caught_2.$t,
            seen: pokeentry[i].gsx$seen.$t,
            baseStats:pokeentry[i].gsx$basestats.$t
          }
          pokeOBJ.seen != "" ? this.seen++ : this.seen;
          pokeOBJ.caught != "" ? this.caught++ : this.caught
          this.pokeMon.push(pokeOBJ);
          this.OfficialDex.push(pokeOBJ);
        }
      })
  }
  fiterCaught() {
    this.pokeMon = this.OfficialDex.filter(x => x.caught != "");
  }
  filterSeen() {
    this.pokeMon = this.OfficialDex.filter(x => x.seen != "");
    console.log("Seen");
  }
  defaultMon() {
    this.pokeMon = this.OfficialDex;
  }
  open(content: any, i: number) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    let mon = this.pokeMon[i];
    this.monOBJ = {
      pokedexNum: mon.pokedexNum,
      name: mon.name,
      modalName: mon.modalName,
      type: mon.type,
      location: mon.location,
      evolution: mon.evolution,
      img: mon.img,
      caught: mon.caught,
      seen: mon.seen,
      baseStats: mon.baseStats
    }
    console.log(this.pokeMon[i])
  }

  filterSearch(e: any) {
    this.pokeMon = [];
    if (e.keyCode == 13) {
      console.log(e.target.value);
      for (let i = 0; i < this.OfficialDex.length; i++) {
        console.log(i)
        console.log(this.OfficialDex[i].modalName.toLowerCase() === e.target.value.toLowerCase())
        if (this.OfficialDex[i].modalName.toLowerCase() === e.target.value.toLowerCase()) {
          this.pokeMon.push(this.OfficialDex[i])
        }

      }
      if (this.pokeMon.length < 1) {
        this.pokeMon.push({
          pokedexNum: "",
          name: "Pokemon Not Found",
          modalName: "Pokemon Not Found",
          type: "",
          location: "",
          evolution: "",
          img: "",
          caught: "",
          seen: "",
          baseStats:""
        })
      }
      console.log(this.pokeMon);
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
