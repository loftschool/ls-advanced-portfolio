import Card from "./card.vue";

export default {
  title: "Card",
  component: Card,
};

export const defaultView = () => ({
  components: { Card },
  template: `
    <card
      title="Заголовок" 
    >
      <h1 slot="content">Содержание</h1>
    </card>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}

export const complexView = () => ({
  components: {Card},
  template: `
    <card>
      <h1 slot="title">Заголовок</h1> 
      <h1 slot="content">Содержимое</h1> 
    </card> 
  `
})

complexView.story = {
  name: "Блок в заголовке"
}


export const simpleView = () => ({
  components: { Card },
  template: `
    <card simple>
      <h1>Содержимое</h1> 
    </card>
  `,
});

simpleView.story = {
  name: "Упрощенный вид"
}
