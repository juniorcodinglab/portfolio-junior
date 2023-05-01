<script>

import Title from './../../components/widgets/v-Title.vue';

export default {
  components: {
    Title
  },
  data() {
    return {
        experiences: [
            {
                enterprise: "FutFanatics",
                title: 'Desenvolvedor Full-Stack',
                subtitle: "Junho 2021 - Atualmente",
                active: true,
                actions: [
                    'Desenvolvimento front-end para páginas de campanhas e tema da loja virtual.',
                    'Atualização e manutenção dos sistemas back-end da empresa.',
                    'Coordenador técnico da versão 2 do APP Mobile.',
                    'Suporte interno a plataforma Tray para os colaboradores.'
                ],
                techs: ['PHP', "MySQL", "MongoDB", "HTML", "CSS", "SASS", "JS", "jQuery"],
                link: "https://www.futfanatics.com.br/",
            }, {   
                enterprise: "Andorinha S.A",
                title: 'Estagiário de TI',
                subtitle: "Janeiro 2020 - Junho - 2021",
                active: false,
                actions: [
                    'Manutenção de computadores e suporte técnico aos colaboradores.',
                    'Desenvolvimento para WEB com PHP e C#.',
                    'Organização do inventário de TI.',
                ],
                techs: ['PHP', "C#", "Oracle"],
                link: "https://www.andorinha.com/",
            }
        ]
    }
  }
};

</script>

<template>
  <div class="experience">
    
    <Title number=2 title="Experiências" />

    <div class="experience__box box">
        <div class="box__menu">
            <div v-for="experience in experiences" class="item" :class="experience.active ? 'active' : '' ">
                {{ experience.enterprise }}
            </div>
        </div>

        <div class="box__content">
            <template v-for="experience in experiences">
                <div class="item" :class="experience.active ? 'active' : ''">
                    <h5>{{ experience.title }}</h5>
                    <span class="item__subtitle">{{ experience.subtitle }}</span>

                    <ul>
                        <li v-for="action in experience.actions">{{ action }}</li>
                    </ul>

                    <div class="techs">
                        <span v-for="tech in experience.techs">{{ tech }}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
    
  </div>
</template>

<style>

</style>
