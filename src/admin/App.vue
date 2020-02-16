<template lang="pug">
  .div
    header.header__admin
      .admin__info
        //- +image('user','user__admin')
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
      ul.administation__list
        li.administation__item.administration__item--about
          .administration__heading
            h4 Блок "Обо мне"
            button добавить группу
          .administration-about
            ul.administration-about__list
              li.administration-about__item
                form.administration__form
                  label.administration__label
                    .control__about
                      //- +icon('pencil','pencil')
                      //- +icon('tick','tick')
                      //- +icon('cross','cross')
                    input(type="text" placeholder='Название новой группы' tabindex="1" required)
                    .error
                  label.administration__label
                    input(type="text" placeholder='Новый навык' tabindex="2" required)
                    .error
                    input(type="text" placeholder='100 %' tabindex="3" required)
                    .error
                    input(type="submit" tabindex="4" required)
              li.administration-about__item
                form.administration__form
                  label.administration__label
                    .control
                      //- +icon('pencil','pencil')
                      //- +icon('tick','tick')
                      //- +icon('cross','cross')
                    input(type="text" placeholder='Название новой группы' tabindex="1" required)
                    .error
                  label.administration__label
                    input(type="text" placeholder='Новый навык' tabindex="1" required)
                    input(type="text" placeholder='%' tabindex="2" required)
                    .contol
                      //- +icon('trash','trash')
                      //- +icon('pencil','pencil')
                      //- +icon('tick','tick')
                      //- +icon('cross','cross')
                  label.administration__label
                    input(type="text" placeholder='Новый навык' tabindex="2" required)
                    .error
                    input(type="text" placeholder='%' tabindex="3" required)
                    .error
                    input(type="submit" tabindex="4" required)
        li.administation__item.administration__item--work
          .administration__heading
            h4 Блок 'Работы'
          .administration-work
            .edit-work
              form.edit-work__form
                h4 Редактирование работы
                .add-image
                  h3 Перерещите или загрузите для загрузки изображение
                  input(type="image" placeholder='загрузить' required)
                  .error
                .fill-work
                  label.fill-work__label
                    .fill-work__name Название
                    input(type="text" tabindex="1" name="name" required).fill-work__text
                    .error
                  label.fill-work__label
                    .fill-work__name Ссылка
                    input(type="text" tabindex="2" name="link" required).fill-work__text
                    .error
                  label.fill-work__label
                    .fill-work__name Описание
                    textarea(name="text" tabindex="3" required).fill-work__textarea
                    .error
                  label.fill-work__label
                    .fill-work__name Добавление тэга
                    input(type="text" tabindex="4" name="tag").fill-work__text
                    .tag html
                    .tag css 
                    .tag Javascript
                  label.fill-work__label
                    input(type="button" tabindex="2" name="cancel").cancel
                    input(type="submit" tabindex="1" name="submit").send
            .added-work
              ul.added-work__list 
                li.added-work__item 
                  p Добавить работу
                  input(type="button" name="add").add__work
                li.added-work__item
                  .added-work__block
                    //- +image('','')
                    .added-block__information
                      h3 Cайт школы образования
                      p Этот парень проходил обучение веб-разбработке не где-то, а в Loftschool! 4,5 месяца толькоамых важных тяжелых испытаний и бессоных ночей.
                      a http://loftschool.ru
                    .control-added-work
                      button.edit__work-button
                      //- +icon('pencil','pencil')
                      button.delete__work-button
                      //- +icon('cross','cross')
        li.administation__item.administration__item--review
          .administration__heading
            h4 Блок 'Отзывы'
          .administration-review
              .edit-review
                form.edit-review__form
                    h4 Новый отзыв
                    .add-image__review
                      //- +image('user','user')
                      input(type="image" placeholder='добавить фото' required)
                      .error
                    .fill-review
                      label.fill-review__label
                          .fill-review__name Имя автора
                          input(type="text" tabindex="1" name="name" required).fill-review__text
                          .error
                      label.fill-review__label
                        .fill-review__name Титул автора
                        input(type="text" tabindex="2" name="link" required).fill-review__text
                        .error
                      label.fill-review__label
                        .fill-review__name Отзыв
                        textarea(name="text" tabindex="3" required).fill-review__textarea
                        .error
                      label.fill-review__label
                        input(type="button" tabindex="2" name="cancel").review-cancel
                        input(type="submit" tabindex="1" name="submit").review-send
              .added-review
                ul.added-review_list 
                  li.added-review__item 
                    p Добавить отзыв
                    input(type="button" name="add").add__review
                  li.added-review__item
                    .added-review__block
                      .added-review-person  
                        //- +image('','')
                        .added-review__name Владимир Сабанцев
                        .added-review__job Преподаватель
                    .added-block__information
                      p Этот парень проходил обучение веб-разбработке не где-то, а в Loftschool! 4,5 месяца толькоамых важных тяжелых испытаний и бессоных ночей. 
                    .control-added-review
                      button.edit__review-button
                      //- +icon('pencil','pencil')
                      button.delete__review-button
                      //- +icon('cross','cross')
</template>
