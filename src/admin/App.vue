<style lang="postcss">
/* base */
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
$light: rgb(128, 121, 113);
$violet: rgb(62, 62, 89);
$violet-light: rgb(19, 90, 227);
$violet-dark: rgb(2, 6, 181);
$sky: rgb(247, 249, 254);
$dark: rgb(71, 81, 104);

body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}
ul {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}
p {
  margin: 0;
}
input,
textarea:invalid {
  box-shadow: none;
}

.wrapper {
  overflow: hidden;
  min-height: 650px;
  width: 100%;
  min-height: 100%;
  position: relative;
}
.admin__cover {
  width: inherit;
  min-height: inherit;
}
/* header */
.header__admin {
  width: 98%;
  margin: 0 auto;
  padding: 1%;
  background-color: $violet;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.admin__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;

  & > h3 {
    font-size: 1.125rem;
    font-weight: bold;
    color: white;
  }
  & > p {
    font-size: 0.867rem;
    font-weight: 400;
    color: $light;
  }
}
.admin__pic {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}

.exit__link {
  color: $light;
  font-size: 1rem;
  font-weight: 400;
  transition: 0.1s;
  &:hover,
  &:focus {
    color: white;
  }
}
/* navigation  */
.navigation {
  width: 98%;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  &__list {
    width: 27%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    height: 100%;
    width: 33%;
    font-size: 1rem;
    font-weight: 400;
    color: $light;
    cursor: pointer;
    transition: 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover,
    &:focus {
      color: $violet-light;
      border-bottom: 3px solid $violet-light;
    }
  }
}
/* administration */
.administration {
  background-color: $sky;
  width: 100%;
  &__list {
    width: 98%;
    margin: 0 auto;
  }
  &__item {
    width: 100%;
  }
  &__heading {
    font-size: 1.166rem;
    font-weight: 700;
    color: $dark;
    display: flex;
    align-items: center;
    padding: 5% 1%;
    &--name {
      margin-right: 5%;
    }
    & > button {
      font-size: 1rem;
      font-weight: 400;
      color: $violet-light;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
      background-color: transparent;
      border: none;
      padding: 0;
      width: 13%;
      outline: none;
    }
  }
}
/* about */
.round {
  content: "";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background: linear-gradient(90deg, $violet-light, $violet-dark);
  margin-right: 2%;
}
.plus {
  width: inherit;
  height: inherit;
  background: svg-load('plus.svg', fill=#fff, width=100%, height=100%)  no-repeat;
}
.administration-about {
  width: 100%;
  &__list {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
  }
  &__item {
    width: 48%;
    height: 24rem;
    background-color: white;
    box-shadow: 0 0 10px $violet;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4%;
  }
}
.administration-about__form {
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.administration__label {
  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &-added {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.type-group {
  color: $light;
  font-size: 1.125rem;
  font-weight: 400;
  padding: 2%;
  border: transparent;
  border-bottom: 1px solid $violet;
  outline: none;
  text-align: left;
  width: 60%;
  &::placeholder {
    color: $light;
  }
  &__name {
    width: 40%;
    margin-right: 3%;
  }
  &__procent {
    width: 10%;
    margin-right: 3%;
  }
  &--added-name {
    width: 50%;
  }
  &--added-procent {
    width: 10%;
  }
}
.round__group {
  width: 3rem;
  height: 3rem;
  margin: 0;
}
.control__about--added {
  width: 22%;
}
/* work */
.edit-work {
  width: 100%;
  height: 51rem;
  background: white;
  box-shadow: 0 0 10px $violet;
  margin-bottom: 2%;
  &__form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &__heading {
    color: $dark;
    font-size: 1.125rem;
    width: 95%;
    padding: 3% 0;
    border-bottom: 1px solid $light;
  }
}
.edit-work__space {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  height: 83%;
}
.add-work {
  width: 48%;
  height: 45%;
  background: #dee4ed;
  border: 1px solid $violet;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h3 {
    font-size: 1rem;
    color: $light;
    width: 50%;
    text-align: center;
    line-height: 2;
    margin-bottom: 5%;
  }
  &__pic {
    width: 40%;
    height: 20%;
    border-radius: 50px;
    background: linear-gradient(90deg, $violet-light, $violet-dark);
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;

    &-file {
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
    }
  }
}
.fill-work {
  width: 48%;
  height: 95%;
  &__label {
    width: 100%;
    margin-bottom: 2%;
    color: $light;
    display: flex;
    flex-direction: column;
  }
  &__name {
    margin-bottom: 1%;
  }
  &__textarea {
    color: $light;
  }
  &__text {
    resize: none;
    width: 96%;
    height: 30%;
    padding: 2%;
    outline: none;
    font-size: 1.125rem;
  }
  &__buttons {
    display: flex;
    height: 11%;
    margin-top: 5%;
  }
}
.type__work {
  width: 96%;
}

.tags {
  margin-top: 3%;
  width: 100%;
  height: 10%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.tag {
  padding: 1% 2%;
  margin-right: 1%;
  display: flex;
  background: #dee4ed;
  border-radius: 50px;
}
.cancel {
  font-size: 1rem;
  font-weight: bold;
  color: $violet-light;
  border: none;
  background: transparent;
  margin-right: 1%;
  outline: none;
  cursor: pointer;
}

.send {
  cursor: pointer;
  background: linear-gradient(90deg, $violet-light, $violet-dark);
  color: white;
  width: 50%;
  height: 85%;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  &__review {
    width: 30%;
  }
}
.added-work {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &__list {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
  }
  &__item {
    width: 30%;
    height: 35rem;
    margin-right: 3%;
    margin-bottom: 4%;
    box-shadow: 0 0 10px $violet;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &:nth-last-child() {
      margin-right: 0;
    }
  }
  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(90deg, $violet-light, $violet-dark);
    & > p {
      color: white;
      font-size: 1.125rem;
      font-weight: 700;
      width: 35%;
      text-align: center;
    }
  }
}
.round__add {
  width: 10rem;
  height: 10rem;
  margin-bottom: 7%;
  border: 2px solid white;
}
.slide {
  width: 100%;
  height: 13rem;
  margin-bottom: 5%;
}
.added-information {
  width: 90%;
  & > h3 {
    color: $light;
    margin-bottom: 3%;
  }
  & > p {
    margin-bottom: 3%;
  }
}
.control-added {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10%;
  &__work {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    color: $light;
    & > p {
      margin-right: 3%;
    }
  }
}
.administration-review {
  width: 100%;
}
.edit-review {
  width: 100%;
  height: 36rem;
  background: white;
  box-shadow: 0 0 10px $violet;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5%;
  & > h4 {
    color: $dark;
    font-size: 1.125rem;
    width: 95%;
    padding: 3% 0;
    border-bottom: 1px solid $light;
  }

  &__form {
    width: 95%;
    height: 80%;
    display: flex;
    align-items: center;
  }
}
.add-image__review {
  width: 25%;
  height: 90%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.add-review__pic {
  position: relative;
  color: $violet-light;
  font-size: 1rem;
  font-weight: 400;
}
.add-review__pic-file {
  opacity: 0;
  position: absolute;
  cursor: pointer;
}
.image-review {
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  background: #dee4ed;
  margin-bottom: 20%;
}
.fill-review {
  width: 65%;
  height: 90%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  &__label {
    width: 45%;
    color: $light;
    margin-bottom: 5%;
    &--text {
      width: 100%;
    }
    &--button {
      width: 100%;
      height: 5rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  &__textarea {
    width: 96%;
    padding: 2%;
    resize: none;
    height: 10rem;
    outline: none;
  }
  &__text {
    width: 96%;
  }
}
.added-review {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__list {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  &__item {
    width: 30%;
    height: 25rem;
    margin-right: 3%;
    margin-bottom: 4%;
    box-shadow: 0 0 10px $violet;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &:nth-last-child() {
      margin-right: 0;
    }
  }
  &__button {
    background: linear-gradient(90deg, $violet-light, $violet-dark);
    justify-content: center;
    & > p {
      color: white;
      width: 25%;
      font-size: 1rem;
      text-align: center;
    }
  }
}
.round__review {
  width: 10rem;
  height: 10rem;
  margin-bottom: 7%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.added-review__person{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin-top:2%;
}
.review__pic{
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
.person-info{
  &__name{
    color: $violet-dark;
    font-size: 1.125rem;
    font-weight: 700;
  }
  &__job{
    color: $light;
    font-size: 1rem;
    font-weight: 400;
  }
}
.added-review__information{
  width: 85%;
  font-size: 1rem;
  font-weight: 500;
  color: $dark;
}
.control-added-review{
  width:85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
 }
</style>

<template lang="pug">
  .admin__cover
    header.header__admin
      .admin__info
        img(src="./../images/content/user.png").admin__pic
        h3.admin__name Рахманова Севара
        p Панель администрирования
      .exit
        a(href='#' class='exit__link') Выйти
    section.navigation
      ul.navigation__list
        li.navigation__item Обо мне
        li.navigation__item Работы
        li.navigation__item Отзывы
    section.administration
      ul.administration__list
        li.administration__item.administration__item--about
          .administration__heading
            h4.administration__heading--name Блок «Обо мне»
            button
              p Добавить группу
              .round
                .plus
          .administration-about
            ul.administration-about__list
              li.administration-about__item
                form.administration-about__form
                  label.administration__label.administration__label-top
                    input(type="text" placeholder='Название новой группы' tabindex="1" required).type-group
                    .error
                    .control__about
                      img(src="./../images/icons/tick.svg" alt="tick").tick
                      img(src="./../images/icons/cross.svg" alt="cross").cross
                  label.administration__label.administration__label-bottom
                    input(type="text" placeholder='Новый навык' tabindex="2" required).type-group.type-group__name
                    .error
                    input(type="text" placeholder='100 %' tabindex="3" required).type-group.type-group__procent
                    .error
                    .round.round__group
                      img(src="./../images/icons/plus.svg" alt="plus").plus
              li.administration-about__item
                form.administration-about__form
                  label.administration__label.administration__label-top
                    input(type="text" placeholder='Название новой группы' tabindex="1" required).type-group
                    .error
                    .control__about
                      img(src="./../images/icons/pencil.svg" alt="pencil").pencil
                      img(src="./../images/icons/tick.svg" alt="tick").tick
                      img(src="./../images/icons/cross.svg" alt="cross").cross
                  label.administration__label.administration__label-added
                    .type-group.type-group--added-name Git
                    .type-group.type-group--added-procent 100%
                    .contol__about.control__about--added
                      img(src="./../images/icons/pencil.svg" alt="pencil").pencil
                      img(src="./../images/icons/trash.svg" alt="pencil").trash
                      img(src="./../images/icons/tick.svg" alt="tick").tick
                      img(src="./../images/icons/cross.svg" alt="cross").cross
                  label.administration__label.administration__label-bottom
                    input(type="text" placeholder='Новый навык' tabindex="2" required).type-group.type-group__name
                    .error
                    input(type="text" placeholder='100 %' tabindex="3" required).type-group.type-group__procent
                    .error
                    .round.round__group
                      img(src="./../images/icons/plus.svg" alt="plus").plus
              li.administration-about__item
                form.administration-about__form
                  label.administration__label.administration__label-top
                    input(type="text" placeholder='Название новой группы' tabindex="1" required).type-group
                    .error
                    .control__about
                      img(src="./../images/icons/pencil.svg" alt="pencil").pencil
                      img(src="./../images/icons/tick.svg" alt="tick").tick
                      img(src="./../images/icons/cross.svg" alt="cross").cross
                  label.administration__label.administration__label-added
                    .type-group.type-group--added-name Git
                    .type-group.type-group--added-procent 100%
                    .contol__about.control__about--added
                      img(src="./../images/icons/pencil.svg" alt="pencil").pencil
                      img(src="./../images/icons/trash.svg" alt="pencil").trash
                      img(src="./../images/icons/tick.svg" alt="tick").tick
                      img(src="./../images/icons/cross.svg" alt="cross").cross
                  label.administration__label.administration__label-bottom
                    input(type="text" placeholder='Новый навык' tabindex="2" required).type-group.type-group__name
                    .error
                    input(type="text" placeholder='100 %' tabindex="3" required).type-group.type-group__procent
                    .error
                    .round.round__group
                      img(src="./../images/icons/plus.svg" alt="plus").plus
        li.administration__item.administration__item--work
          .administration__heading
            h4 Блок «Работы»
          .administration-work
            .edit-work
              form.edit-work__form
                .edit-work__heading
                  h4 Редактирование работы
                .edit-work__space
                  label.add-work
                    h3 Перетащите или загрузите для загрузки изображение
                    .add-work__pic загрузить
                      input(type="file" accept="image/png,image/jpeg" tabindex='1' required).add-work__pic-file
                    .error
                  .fill-work
                    label.fill-work__label
                      .fill-work__name Название
                      input(type="text" tabindex="2" name="name" required).type-group.type__work
                      .error
                    label.fill-work__label
                      .fill-work__name Ссылка
                      input(type="text" tabindex="3" name="link" required).type-group.type__work
                      .error
                    label.fill-work__textarea
                      .fill-work__name Описание
                      textarea(name="text" tabindex="4" required).fill-work__text
                      .error
                    label.fill-work__label
                      .fill-work__name Добавление тэга
                      input(type="text" tabindex="5" name="tag").type-group.type__work
                      ul.tags
                        li.tag
                          p html
                          img(src="./../images/icons/cross.svg" alt="cross").cross
                        li.tag
                          p css
                          img(src="./../images/icons/cross.svg" alt="cross").cross
                        li.tag
                          p Javascript
                          img(src="./../images/icons/cross.svg" alt="cross").cross
                    label.fill-work__buttons
                      button(type="button" tabindex="1" name="cancel").cancel
                        p Отмена
                      input(type="submit" tabindex="2" name="submit").send
            .added-work
              ul.added-work__list
                li.added-work__item.added-work-button
                  .round.round__add
                    img(src="./../images/icons/plus.svg" alt="plus").plus
                  p Добавить работу
                li.added-work__item
                  img(src="./../images/content/slide1.png").slide
                  .added-information
                    h3 Cайт школы образования
                    p Этот парень проходил обучение веб-разбработке не где-то, а в Loftschool! 4,5 месяца толькоамых важных тяжелых испытаний и бессоных ночей.
                    a(href='http://loftschool.ru') http://loftschool.ru
                  .control-added
                    .control-added__work
                      p Править
                      img(src="./../images/icons/pencil.svg" alt="plus").pencil__edit
                    .control-added__work
                      p Удалить
                      img(src="./../images/icons/plus.svg" alt="plus").delete__edit
        li.administration__item.administration__item--review
          .administration__heading
            h4 Блок «Отзывы»
          .administration-review
              .edit-review
                h4 Новый отзыв
                form.edit-review__form
                  label.add-image__review
                    .image-review
                       img(src="./../images/icons/user2.svg" alt="plus").person
                    .add-review__pic Добавить фото
                      input(type="file" accept="image/png,image/jpeg" tabindex='1' required).add-review__pic-file
                    .error
                  .fill-review
                    label.fill-review__label
                        .fill-review__name Имя автора
                        input(type="text" tabindex="1" name="name" required).type-group.fill-review__text
                        .error
                    label.fill-review__label
                      .fill-review__name Титул автора
                      input(type="text" tabindex="2" name="link" required).type-group.fill-review__text
                      .error
                    label.fill-review__label.fill-review__label--text
                      .fill-review__name Отзыв
                      textarea(name="text" tabindex="3" required).fill-review__textarea
                      .error
                    label.fill-review__label.fill-review__label--button
                      button(type="button" tabindex="1" name="cancel").cancel
                        p Отмена
                      input(type="submit" tabindex="2" name="submit").send.send__review
              .added-review
                ul.added-review__list
                  li.added-review__item.added-review__button
                    .round.round__review
                      img(src="./../images/icons/plus.svg" alt="plus").plus
                    p Добавить отзыв
                  li.added-review__item
                    .added-review__person
                      img(src="./../images/content/dima.png").review__pic
                      .person-info
                        .person-info__name Владимир Сабанцев
                        .person-info__job Преподаватель
                    .added-review__information
                      p Этот парень проходил обучение веб-разбработке не где-то, а в Loftschool! 4,5 месяца толькоамых важных тяжелых испытаний и бессоных ночей.
                    .control-added-review
                      .control-added__work
                        p Править
                        img(src="./../images/icons/pencil.svg" alt="plus").pencil__edit
                      .control-added__work
                        p Удалить
                        img(src="./../images/icons/plus.svg" alt="plus").delete__edit
</template>

