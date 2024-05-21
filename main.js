'use strict';

const {createApp} = Vue;

createApp({

    // data è un metodo che restituisce valori(variabili) al dom

    data(){
        return {

            title: 'Hello Vue!',
            imgSrc: 'https://picsum.photos/200'

        };
    },

    // methods è una proprietà composta da un oggetto che racchiude i metodi che potremo utilizzare nel dom
    methods: {
        prova(){
            console.log('funzione prova');
        }
    },

    beforeCreate(){
        console.log('beforeCreate');
    },

    created(){
        console.log('created');
    },

    beforeMount(){
        console.log('beforeMount');
    },

    // mounted() è un metodo che si attiva quando viene lanciato il metodo mount sull app
    mounted(){
        console.log('mounted');
    }

}).mount('#app');