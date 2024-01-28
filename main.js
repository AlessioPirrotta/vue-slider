const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        currentImage: 0,
        autoScroll: null,
        simpsonFamily: [
          {
            Nome: "Homer Jay",
            Cognome: "Simpson",
            Immagine: "./img/homer.jpg"
          },
          {
            Nome: "Marjorie Jacqueline",
            Cognome: "Bouvier - Simpson",
            Immagine: "./img/marge.jpg"
          },
          {
            Nome: "Bartholomew JoJo",
            Cognome: "Simpson",
            Immagine: "./img/bart.jpg"
          },
          {
            Nome: "Lisa Marie",
            Cognome: "Simpson",
            Immagine: "./img/lisa.jpg"
          },
          {
            Nome: "Margaret Evelyn Lenny",
            Cognome: "Simpson",
            Immagine: "./img/maggie.jpg"
          }
        ]
      }
    },
    created() {
      this.interval()
    },
    methods: {
      imageUp(){
        if(this.currentImage <= 0){
          this.currentImage= this.simpsonFamily.length
        }
        this.currentImage-- 
      },
      imageDown(){
        this.currentImage ++
        if(this.currentImage >= this.simpsonFamily.length){
          this.currentImage= 0
        }
      },
      current(image) {
        const index = this.simpsonFamily.findIndex(item => item === image);
        this.currentImage = index;
      },
      interval(){
        this.autoScroll = setInterval(() => {
          this.imageDown()
      } ,2000 )},

      stopInterval(){
        clearInterval(this.autoScroll)
      } 
    }
  }).mount('#app')


