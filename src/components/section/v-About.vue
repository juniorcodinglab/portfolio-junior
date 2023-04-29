<script>

export default {
  data() {
    return {
      thumb: {
        src: './src/img/Foto-Perfil.png',
        alt: "Foto de Perfil - Junior Coding"
      },
    }
  }
};

</script>

<template>
  <div class="about">
    <div class="about__title">
      <h4><span class="number">01.</span> <span class="title">Sobre mim</span></h4>
    </div>
    <div class="about__content">

      <div class="text">
        <p>
          Atualmente trabalho no e-commerce FutFanatics, estou como Desenvolvedor WEB há +1 ano e meio.
          Durante esse período, estou aprendendo um leck gigantesco de soft skills como: comunicação 
          entre as áreas, suporte aos colaboradores, entendimento e mapeamento de processos, e solução de 
          problemas de forma eficaz e rápida. Tenho um instagram (@junior.coding) com 10K de seguidores, onde 
          estou compartilhando diversos conhecimentos e dicas para Devs. Pretendo seguir mais forte com as 
          redes sociais nesse ano de 2023.
        </p>

        <ul>
          <li>JavaScript (ES6+)</li>
          <li>Node.JS</li>
          <li>React.JS</li>
          <li>Next.JS</li>
          <li>Typescript</li>
          <li>PHP</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </div>

      <div class="thumb-border"></div>
      <div class="thumb">
        <img :src="thumb.src" :alt="thumb.alt">
      </div>
      
    </div>
  </div>
</template>

<style>

</style>
