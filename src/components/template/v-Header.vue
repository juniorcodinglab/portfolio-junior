<script>
import IconCV from './../../img/Icon-CV.vue';
import IconMenu from './../../img/Icon-Menu.vue';

import img_logo from '../../../static/Logo.png';
import img_cv from '../../../static/Curriculo_FullStack_16-Ago.pdf';


export default {
  data() {
    return {
      logo: {
        src: img_logo
      },
      cv: {
        src: img_cv
      },
      menuActive: false,
      menuOpen: false,
      menu: [
        {
          text: 'Sobre Mim',
          href: '#s-about'
        },{
          text: 'Experiência',
          href: '#s-experience'
        },{
          text: 'Serviços',
          href: '#s-project'
        },{
          text: 'Contato',
          href: '#s-contact'
        },
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    IconCV,
    IconMenu,
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen
    },
    goToSection(e) {
      e.preventDefault();

      const $el = e.target;
      const id = $el.getAttribute('href');
      const $section = document.querySelector(id);
      // Where the element is the TOP
      const sectionTop = $section.offsetTop;
      console.log(sectionTop);

      window.scroll({
        top: sectionTop,
        behavior: "smooth",
      
      })
    },
    handleScroll(event) {
      console.log(event);

      if (window.scrollY > 50) {
        this.menuActive = true;
      } else {
        this.menuActive = false;
      }
    }
  }
}
</script>

<template>
  <header :class="{ 'fixed' : this.menuActive }">
    <div class="header" :class="{ 'fixed' : this.menuActive, 'active' : this.menuOpen  }">
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
          <li v-for="item in menu">
            <a :href="item.href" @click="goToSection">{{item.text}}</a>
          </li>
        </ul>
      </nav>

      <div class="header__cv">
        <a :href="cv.src" target="_blank">
          <Icon-CV />
          <span>Currículo</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style>

</style>
