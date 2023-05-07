<script>
import IconCV from './../../img/Icon-CV.vue';
import IconMenu from './../../img/Icon-Menu.vue';

export default {
  data() {
    return {
      logo: {
        src: '/static/Logo.png' 
      },
      cv: {
        src: '/static/Curriculo_FullStack.pdf'
      },
      menuActive: false,
    }
  },
  components: {
    IconCV,
    IconMenu,
  },
  methods: {
    openMenu() {
      this.menuActive = !this.menuActive
    }
  
  }
}
</script>

<template>
  <header class="header" :class="!this.menuActive || 'active' ">
    <div class="header__menu">
      <button class="btn-hamburger" @click="openMenu">
        <span></span>
      </button>
    </div>


    <div class="header__logo">
      <img :src="logo.src" alt="Logo Junior Coding">
      <span>junior<b>.</b>coding</span>
    </div>

    <nav class="header__nav">
      <ul>
        <li>
          <a href="#s-about">Sobre Mim</a>
        </li>
        <li>
          <a href="#s-experience">Experiência</a>
        </li>
        <li>
          <a href="#s-project">Serviços</a>
        </li>
        <li>
          <a href="#s-contact">Contato</a>
        </li>
      </ul>
    </nav>

    <div class="header__cv">
      <a :href="cv.src" target="_blank">
        <Icon-CV />
        <span>Currículo</span>
      </a>
    </div>
  </header>
</template>

<style>

</style>
