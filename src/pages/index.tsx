import { NextPageWithLayout } from './_app'
import Layout from '@components/layout'
import styles from '@styles/home.module.css'


const Home: NextPageWithLayout = () => {

  return (
    <main className={`${styles['content']}`}>
        <div className={`${styles['content__cover']}`}>
            <div className={`${styles['content__cover-column']}`}>
                <div className={`${styles['content__cover-text-wrap']}`}>
                    <div className={`${styles['content__cover-text-title']}`}>Добро пожаловать на сайт cемейного клуба «Мамантёнок»</div>
                    <div className={`${styles['content__cover-text-descr']}`}>
                        Мы создали это онлайн-пространство для гостей и членов нашего клуба
                    </div>
                </div>
                <div className={`${styles['content__cover-button-wrap']}`}>
                    <a className={`${styles['content__contact-button']}`} href="#contact">Связаться</a>
                </div>
            </div>
            <div className={`${styles['content__cover-image-wrap']}`}>
                <div className={`${styles['content__cover-image']}`}></div>
            </div>
        </div>
        <div className={`${styles['rec_pt_105 rec_pb_30 rec_gray']}`}>
            <div className={`${styles['content__title-wrap']}`}>
                <div className={`${styles['content__title']}`}>О нашем клубе</div>
            </div>
        </div>
        <div className={`${styles['rec_pt_60 rec_pb_60 rec_gray']}`}>
            <div className={`${styles['content__video-wrap']}`}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sJyMiqPYVjE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </div>
        <div className={`${styles['rec_pt_45 rec_pb_90 rec_gray']}`}>
            <div className={`${styles['content__text-wrap']}`}>
                <div className={`${styles['content__text']}`}>
                    Основной целью работы семейного клуба «Мамантёнок» является комплексная поддержка семей, приходящих
                    в наш клуб. Это консультации семейного психолога, дефектолога, специалиста в области физического
                    развития детей и педагогические консультации для детей дошкольного и младшего школьного возраста.
                </div>
            </div>
        </div>
        <div className={`${styles['rec_pt_105 rec_pb_30']}`}>
            <div className={`${styles['content__title-wrap']}`}>
                <div className={`${styles['content__title']}`}>Как мы работаем</div>
            </div>
        </div>
        <div className={`${styles['rec_pt_45 rec_pb_90']}`}>
            <div className={`${styles['content__text-wrap']}`}>
                <div className={`${styles['content__text']}`}>
                    Нам важно видеть членов нашего клуба счастливыми, физически благополучными и психически здоровыми
                    людьми. Мы делаем все возможное для осуществления этой цели.
                    <br /><br />
                    В нашем клубе есть индивидуальные и групповые занятия для детей дошкольного возраста, курсы
                    психологического направления на развитие личности детей и взрослых, а также
                    <a className={`${styles['content__text-link']}`} href="/courses">дистанционные курсы</a> для
                    детей дошкольного возраста. Для взрослых и детей предусмотрены индивидуальные сессии с психологом.
                    <br /><br />
                    Любое занятие для детей дошкольного возраста проходит в игровой форме с опорой на наглядный
                    материал. Ведь ведущими аспектами в развитии ребёнка являются игровая деятельность и
                    наглядно-образное мышление.
                    <br /><br />
                    Наши дети проходят увлекательный путь в дошкольном детстве. Родители создают свои уникальные
                    коллективы и их дружба продолжается на протяжении многих лет.
                </div>
            </div>
        </div>
        <div className={`${styles['rec_pt_105 rec_pb_45 rec_gray']}`}>
            <div className={`${styles['content__title-wrap']}`}>
                <div className={`${styles['content__title']}`}>Наш клуб</div>
            </div>
            <div className={`${styles['content__descr-wrap']}`}>
                <div className={`${styles['content__descr']}`}>
                    Мы рады принять в наш дружелюбный клуб тех, кто хочет весело развиваться и дружить
                </div>
            </div>
        </div>
        <div id="contact" className={`${styles['rec_pt_105 rec_pb_45']}`}>
            <div className={`${styles['content__title-wrap']}`}>
                <div className={`${styles['content__title']}`}>Связаться с нами</div>
            </div>
            <div className={`${styles['content__descr-wrap']}`}>
                <div className={`${styles['content__descr']}`}>
                    Наш менеджер с радостью проконсультирует Вас по любому интересующему вопросу.
                    <br />
                    Оставьте заявку и мы свяжемся с Вами в ближайшее время!
                </div>
            </div>
        </div>
        <div className={`${styles['rec_pb_150']}`}>
            <div className={`${styles['content__form-wrap']}`}>
                <form className={`${styles['content__form']}`}>
                    <div className={`${styles['content__success-msg']}`}></div>
                    <div className={`${styles['content__input-group']}`}>
                        <div className={`${styles['content__input-title']}`}>E-mail</div>
                        <input className={`${styles['content__input']}`} placeholder="mycompany@co.com" />
                        <div className={`${styles['contnet__input-err']}`}></div>
                    </div>
                    <div className={`${styles['content__input-group']}`}>
                        <div className={`${styles['content__input-title']}`}>Имя</div>
                        <input className={`${styles['content__input']}`} placeholder="Сергей Иванов" />
                    </div>
                    <div className={`${styles['content__input-group']}`}>
                        <div className={`${styles['content__input-title']}`}>Телефон</div>
                        <input className={`${styles['content__input']}`} placeholder="+1234 567 8901" />
                    </div>
                    <div className={`${styles['content__error-msg']}`}></div>
                    <div className={`${styles['content__submit-wrap']}`}>
                        <button type="submit" className={`${styles['content__submit-btn']}`}>Отправить</button>
                    </div>
                </form>
                <div className={`${styles['content__form-bottom-text']}`}>
                    Нажимая на кнопку, вы соглашаетесь с
                    <a className={`${styles['content__policy-link']}`} href="/policy">
                        условиями обработки персональных данных
                    </a>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
