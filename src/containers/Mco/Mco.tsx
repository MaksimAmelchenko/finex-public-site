import React from 'react';
import clsx from 'clsx';
import { useLocalization } from 'gatsby-theme-i18n';

import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../Header/Header';
import { Jumbotron, mcoLink } from './Jumbotron/Jumbotron';
import { Seo } from '../../components/Seo/Seo';

import { ReactComponent as LogoMco } from './assets/logo-mco.svg';

import styles from './Mco.module.scss';

export const Mco = () => {
  const { locale } = useLocalization();

  return (
    <div className={styles.root}>
      <Seo lang={locale} title="Подключение МОИ ЧЕКИ ОНЛАЙН">
        {locale !== 'ru' && <link rel="canonical" href="https://finex.io/ru/moi-cheki-onlain/" />}
      </Seo>
      <Header />
      <main className={clsx(styles.root__main, styles.main)}>
        <Jumbotron />

        <section className={styles.root__section}>
          <Container>
            <div className={styles.infoSection}>
              <h2 className={styles.infoSection__heading}>
                Что такое{' '}
                <a href={mcoLink} className={styles.mcoLogotype}>
                  МОИ ЧЕКИ ОНЛАЙН
                </a>
                <div className={styles.mcoLogoMark}>
                  <LogoMco />
                </div>{' '}
                ?
              </h2>
              <div className={styles.infoSection__content}>
                <p>
                  Это инновационный сервис ФНС России, предлагающий получение электронных чеков как от
                  интернет-магазинов, так и от традиционных торговых точек, переходящих к электронному документообороту.
                </p>
                <p>Ваши чеки будут автоматически перенаправлены в сервис при выполнении следующих условий:</p>
                <ul>
                  <li>Вы предоставили продавцу номер телефона или адрес электронной почты.</li>
                  <li>Вы отсканировали QR-код на чеке в мобильном приложении «Проверка чеков ФНС России».</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.root__section}>
          <Container>
            <FeatureCard
              heading={<div>Преимущества подключения МОИ ЧЕКИ ОНЛАЙН к FINEX</div>}
              items={[
                'Экономьте время: расходные операции создаются автоматически.',
                'Объедините управление и контроль ваших финансов в одном удобном интерфейсе.',
              ]}
            />
          </Container>
        </section>

        <section className={styles.root__section}>
          <Container>
            <FeatureCard
              heading="Как избавиться от ручного ввода расходов?"
              items={[
                'Зарегистрируйтесь на сервисе FINEX',
                'Перейдите на страницу "Настройки" -> "МОИ ЧЕКИ ОНЛАЙН"',
                'Введите номер телефона и нажмите на кнопку "Подключить"',
                'Вы будете перенаправлены на портал "МОИ ЧЕКИ ОНЛАЙН", где вам потребуется авторизоваться и принять приглашение от FINEX.',
                'После возврата в приложение FINEX укажите счета для "наличных" и "безналичных" расходов, операции по которым будут создаваться на основе ваших чеков.',
              ]}
            />
          </Container>
        </section>

        <section className={styles.root__getInTouch}>
          <Container>
            <div className={styles.getInTouch}>
              <div className={styles.getInTouch__headingAndSupportingText}>
                <h2 className={styles.getInTouch__heading}>Остались вопросы?</h2>
                <div className={styles.getInTouch__supportingText}>
                  Напишите нам в телеграмме, мы с радостью ответим на все ваши вопросы.
                </div>
              </div>
              <div className={styles.getInTouch__actions}>
                <Button variant="primary" size="xl" href="https://t.me/finex_support">
                  Написать в телеграмм
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};
