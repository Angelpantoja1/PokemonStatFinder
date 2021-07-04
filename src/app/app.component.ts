import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PokemonStatFinder';
  url = "https://pokeapi.co/api/v2/pokemon?offset=200&limit=1118";
  gen1: any[] = []
  gen2: any[] = []
  gen3: any[] = []
  gen4: any[] = []
  gen5: any[] = []
  gen6: any[] = []
  gen7: any[] = []
  gen8: any[] = []
  gen11: any[] = []
  gen22: any[] = []
  gen33: any[] = []
  gen44: any[] = []
  gen55: any[] = []
  gen66: any[] = []
  gen77: any[] = []
  gen88: any[] = []
  pokemon: any[] = []
  ngOnInit() {

    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.results.length; i++) {
          fetch(data.results[i].url)
            .then(r => r.json())
            .then(d => {
              this.pokemon.push(d)
            })
        }
      })

    setTimeout(() => {


      fetch("https://pokeapi.co/api/v2/generation/1/")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.pokemon_species.length; i++) {
            fetch(data.pokemon_species[i].url)
              .then(r => r.json())
              .then(d => {
                fetch(d.varieties[0].pokemon["url"])
                  .then(re => re.json())
                  .then(da => {
                    this.gen1.push(da);
                  })
              })
          }
        })
      fetch("https://pokeapi.co/api/v2/generation/2/")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.pokemon_species.length; i++) {
            fetch(data.pokemon_species[i].url)
              .then(r => r.json())
              .then(d => {
                fetch(d.varieties[0].pokemon["url"])
                  .then(re => re.json())
                  .then(da => {
                    this.gen2.push(da);
                  })
              })
          }
        })
      fetch("https://pokeapi.co/api/v2/generation/3/")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.pokemon_species.length; i++) {
            fetch(data.pokemon_species[i].url)
              .then(r => r.json())
              .then(d => {
                fetch(d.varieties[0].pokemon["url"])
                  .then(re => re.json())
                  .then(da => {
                    this.gen3.push(da);
                  })
              })
          }
        })
      fetch("https://pokeapi.co/api/v2/generation/4/")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.pokemon_species.length; i++) {
            fetch(data.pokemon_species[i].url)
              .then(r => r.json())
              .then(d => {
                fetch(d.varieties[0].pokemon["url"])
                  .then(re => re.json())
                  .then(da => {
                    this.gen4.push(da);
                  })
              })
          }
        })
      fetch("https://pokeapi.co/api/v2/generation/5/")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.pokemon_species.length; i++) {
            fetch(data.pokemon_species[i].url)
              .then(r => r.json())
              .then(d => {
                fetch(d.varieties[0].pokemon["url"])
                  .then(re => re.json())
                  .then(da => {
                    this.gen5.push(da);
                  })
              })
          }
        })
      fetch("https://pokeapi.co/api/v2/generation/6/")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.pokemon_species.length; i++) {
            fetch(data.pokemon_species[i].url)
              .then(r => r.json())
              .then(d => {
                fetch(d.varieties[0].pokemon["url"])
                  .then(re => re.json())
                  .then(da => {
                    this.gen6.push(da);
                  })
              })
          }
        })
      fetch("https://pokeapi.co/api/v2/generation/7/")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.pokemon_species.length; i++) {
            fetch(data.pokemon_species[i].url)
              .then(r => r.json())
              .then(d => {
                fetch(d.varieties[0].pokemon["url"])
                  .then(re => re.json())
                  .then(da => {
                    this.gen7.push(da);
                    console.log(this.gen7)
                  })
              })
          }
        })
      fetch("https://pokeapi.co/api/v2/generation/8/")
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.pokemon_species.length; i++) {
            fetch(data.pokemon_species[i].url)
              .then(r => r.json())
              .then(d => {
                fetch(d.varieties[0].pokemon["url"])
                  .then(re => re.json())
                  .then(da => {
                    this.gen8.push(da);
                    console.log(this.gen8)
                  })
              })
          }
        })
    }, 1000);
  }
}
