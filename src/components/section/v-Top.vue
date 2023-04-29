<script>
import Icon_Github from './../../img/Icon-Github.vue';
import Icon_Insta from './../../img/Icon-Insta.vue';
import Icon_Twitter from './../../img/Icon-Twitter.vue';
import Icon_Linkedin from './../../img/Icon-Linkedin.vue';
import Icon_Whats from './../../img/Icon-Whats.vue';
import Icon_Email from './../../img/Icon-Email.vue';

export default {
  components: {
    'Icon-Github': Icon_Github,
    'Icon-Insta': Icon_Insta,
    'Icon-Twitter': Icon_Twitter,
    'Icon-Linkedin': Icon_Linkedin,
    'Icon-Whats': Icon_Whats,
    'Icon-Email': Icon_Email,
  }
}
</script>

<template>
  <div class="top">
    <div class="top__box">
      <h4>Olá, meu nome é</h4>
      <h1>Silvio Junior</h1>
      <h2>Construo coisas para web.</h2>
      <p>
        Sou desenvolvedor full-stack apaixonado por projetos e resolver problemas cotidianos. 
        Não tenho medo de <span>questionar</span>, <span>aprender</span> sobre processos da empresa e de <span>participar</span> ativamente em tudo oque for do meu escopo.
      </p>
    </div>
  </div>

  <div class="top__social">
    <div>
      <Icon-Github />
      <Icon-Insta />
      <Icon-Twitter />
      <Icon-Linkedin />
      <Icon-Whats />
      <Icon-Email />
    </div>
  </div>

  <div class="top__email">
    <span>silvio_cbsj@hotmail.com</span>
  </div>
</template>

<style>

</style>
