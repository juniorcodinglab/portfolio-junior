<script>

import SVG_CV from './../img/Icon-CV.vue';

export default {
  data() {
    return {
      logo: {
        src: './src/img/Logo.png' 
      },
      icon: {
        cv: {
          src: './src/img/Icon-CV.svg' 
        }
      }
    }
  },
  components: {
    'Icon-CV': SVG_CV
  }
}
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img :src="logo.src" alt="Logo Junior Coding">
      <span>junior<b>.</b>coding</span>
    </div>
    <nav class="header__nav">
      <ul>
        <li>
          <a href="#">Sobre Mim</a>
        </li>
        <li>
          <a href="#">Experiência</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
    <div class="header__cv">
      <a href="#">
        <Icon-CV />
        Currículo
      </a>
    </div>
  </header>
</template>

<style>

</style>
