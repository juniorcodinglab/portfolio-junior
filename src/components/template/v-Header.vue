<script>
import IconCV from './../../img/Icon-CV.vue';
import IconMenu from './../../img/Icon-Menu.vue';

export default {
  data() {
    return {
      logo: {
        src: './public/img/Logo.png' 
      },
      icon: {
        cv: {
          src: './public/img/Icon-CV.svg' 
        }
      }
    }
  },
  components: {
    IconCV,
    IconMenu,
  }
}
</script>

<template>
  <header class="header">
    <div class="header__menu">
      <Icon-Menu />
    </div>

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
        <span>Currículo</span>
      </a>
    </div>
  </header>
</template>

<style>

</style>
