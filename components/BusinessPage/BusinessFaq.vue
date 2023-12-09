<template>
  <div class="wrap faq">
    <div class="container">
      <Accordion>
        <AccordionItem v-for="item in service.faqs" :key="item.id">
          <template slot="accordion-trigger">
            <h4 class="title">{{ item.question }}</h4>

            <div class="arrow"></div>
          </template>
          <template slot="accordion-content">
            <p class="txt">{{ item.answer }}</p>
          </template>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'

export default {
  name: 'HajtexBusinessFaq',

  components: {
    Accordion,
    AccordionItem,
  },

  props: ['service'],

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  background: white;
  padding: 80px 0;
}
.title {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  font-family: var(--decor);
  text-transform: uppercase;
  margin: 0;
}
.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5d5d5f;
  margin: 0;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 24px 0 80px 0;
  }
}
</style>
