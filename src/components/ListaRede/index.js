export default {
    data() {
        return {
            items: [
                {
                    "id": 251,
                    "name": "BrilhoPerfeito Sérum Facial",
                    "price": 17.07
                  },
                  {
                    "id": 950,
                    "name": "EssênciaRadiante Creme Noturno",
                    "price": 25.78
                  },
                  {
                    "id": 410,
                    "name": "EncantoNatural Shampoo Revitalizante",
                    "price": 11.43
                  },
                  {
                    "id": 269,
                    "name": "PeleHarmonia Loção Hidratante",
                    "price": 34.7
                  },
                  {
                    "id": 964,
                    "name": "PerfumeSutil Eau de Parfum",
                    "price": 3.01
                  },
                  {
                    "id": 123,
                    "name": "MaquiagemDivina Paleta de Sombras",
                    "price": 19.36
                  },
                  {
                    "id": 952,
                    "name": "CharmeIntenso Máscara Capilar",
                    "price": 28.99
                  },
                  {
                    "id": 190,
                    "name": "DelíciaDermatológica Sabonete Esfoliante",
                    "price": 12.31
                  },
                  {
                    "id": 611,
                    "name": "RostoLuminoso Pó Compacto Iluminador",
                    "price": 23.93
                  },
                  {
                    "id": 699,
                    "name": "AromaNobre Óleo Corporal Relaxante",
                    "price": 0.25
                  }                
            ],
            nameSearch: '',
            filtredItem: []
        }
    },
    computed: {
        formataValores(){
            this.items.forEach(item => {
                item.price = item.price.toLocaleString('pt-br', {minimumFractionDigits: 2});
            });
        }
    },
    methods: {
        ordernar(){
            this.items.sort(function (x,y) {
                return parseFloat(x.price) - parseFloat(y.price)
            })
        },
        search(){
            const search = this.items.filter(item => (item.name == this.nameSearch.trim()));
            if(this.nameSearch == ''){
                return this.filtredItem = this.items;
            }
            this.filtredItem = search;
        }
    },
    mounted(){
        this.filtredItem = this.items;
        this.formataValores;
    }
}