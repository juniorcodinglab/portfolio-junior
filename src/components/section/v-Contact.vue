<script>

import Title from './../../components/widgets/v-Title.vue';
import IconWhats from './../../img/Icon-Whats.vue';
import IconEmail from './../../img/Icon-Email.vue';

export default {
  components: {
    Title, IconWhats, IconEmail
  },
  data() {

  }
};

</script>

<template>
  <div id="s-contact" class="contact">
    
    <Title number=4 title="Qual será o próximo?" position="center"/>

    <div class="contact__text">
        <p>Se você tem uma pergunta, oportunidade ou apenas quer dizer oi, farei o possível para entrar em contato com você!</p>
    </div>

    <div class="contact__buttons">
        <a class="" href=""><IconWhats/> Diga oi</a>
        <a href=""><IconEmail/></a>
    </div>
  </div>
</template>

<style>

</style>
