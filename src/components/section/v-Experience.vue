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
                id: 1,
                enterprise: "FutFanatics",
                title: 'Desenvolvedor Full-Stack',
                subtitle: "Junho 2021 - Atualmente",
                active: true,
                actions: [
                    'Desenvolvimento front-end para páginas de campanhas e tema da loja virtual.',
                    'Atualização e manutenção dos sistemas back-end da empresa.',
                    'Back-end e Coordenador técnico da versão 2 do APP Mobile da FUT.',
                    'Suporte interno a plataforma Tray para os colaboradores.',
                    'Análise de processos utilizando BPMN.'
                ],
                techs: ['PHP', "MySQL", "MongoDB", "HTML", "CSS", "SASS", "JS", "jQuery", "BPMN"],
                link: "https://www.futfanatics.com.br/",
            }, {   
                id: 2,
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
  }, 
  methods: {
    changeExperience(e, id) {

        this.experiences.map((el) => {
            el.active = el.id == id ? true : false;
            return {...el}
        })
    }
  }
};

</script>

<template>
  <div id="s-experience" class="experience">
    
    <Title number=2 title="Experiências" />

    <div class="experience__box box">
        <div class="box__menu">
            <div v-for="experience in experiences" class="item" :class="experience.active ? 'active' : '' " @click="changeExperience($event,experience.id)">
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
