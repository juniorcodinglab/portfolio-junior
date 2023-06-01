<script>

import Title from './../../components/widgets/v-Title.vue';

import img_rvtech from '../../../static/RV-Tech.png';
import img_cowboys from '../../../static/Cowboys.png';
import img_instagram from '../../../static/Instagram.png';

export default {
  components: {
    Title
  },
  data() {
    return {
        projects: [
            {
                subtitle: 'E-commerce',
                title: 'Distribuidora RVTech',
                text: 'Um e-commerce de artigos automobilisticos. Nesse projeto realizei o desenvolvimento do tema da loja e a configuração do ambiente na plataforma Tray.',
                techs: [
                    'HTML', 'CSS', 'JavaScript', 'Tray', 'Twig'
                ],
                link: 'https://www.rvtechdistribuidora.com.br/',
                img: {
                    src: img_rvtech,
                    alt: 'Projeto Distribuidora RVTech',
                }
            },{
                subtitle: 'E-commerce',
                title: 'Cowboys',
                text: 'A cowboys é uma loja de moda country, que tem sua sede em Pres. Prudente. Nesse projeto realizei o desenvolvimento do tema da loja na plataforma Tray.',
                techs: [
                    'HTML', 'CSS', 'JavaScript', 'Tray', 'Twig'
                ],
                link: 'https://www.cowboys.com.br/',
                img: {
                    src: img_cowboys,
                    alt: 'Projeto Cowboys',
                }
            },{
                subtitle: 'Instagram',
                title: '@junior.coding',
                text: 'Meu instagram com 11K de seguidores, onde estou compartilhando diversos posts com dicas, memes e frases sobre programação.',
                techs: [
                    'Produção de conteúdo', 'Mkt. Digital'
                ],
                link: 'https://www.instagram.com/junior.coding/',
                img: {
                    src: img_instagram,
                    alt: 'Instagram',
                }
            }
        ]
    }
  }
};

</script>

<template>
  <div id="s-project" class="project">
    
    <Title number=3 title="Projetos" />

    <div class="project__box box" v-for="(project, i) in projects" :class="(i % 2 == 1) ? 'left': '' ">

        <div class="box__img">
            <img :src="project.img.src" :alt="project.img.alt">
        </div>
        <div class="box__content">
            <h5>{{ project.subtitle }}</h5>
            <h4>{{ project.title }}</h4>

            <img :src="project.img.src" :alt="project.img.alt">

            <div class="box__content-text">
                <p>{{ project.text }}</p>
            </div>

            <div class="box__content-techs">
                <span v-for="tech in project.techs">
                    {{ tech }}
                </span>
            </div>

            <a :href="project.link">Link do projeto</a>
        </div>
    </div>
  </div>
</template>

<style>

</style>
