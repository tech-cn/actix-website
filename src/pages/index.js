import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CodeBlock from '../components/code_block.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faBatteryFull,
  faPuzzlePiece,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const context = useDocusaurusContext();
  const siteConfig = context;

  return (
    <Layout description={siteConfig.tagline}>
      <Hero />
      <main className={styles.main}>
        <Highlights />
        <Examples />
      </main>
    </Layout>
  );
};

const highlights = [
  {
    icon: faShieldAlt,
    title: '类型安全',
    description: (
      <>
        忘记字符串类型的对象，从请求到响应，一切都有类型。
      </>
    ),
  },
  {
    icon: faBatteryFull,
    title: '功能丰富',
    description: (
      <>Actix 提供了大量的开箱即用的功能。Http/2，日志等。</>
    ),
  },
  {
    icon: faPuzzlePiece,
    title: '可扩展',
    description: (
      <>轻松创建任何 Actix 应用可使用的扩展。</>
    ),
  },
  {
    icon: faTachometerAlt,
    title: '极速',
    description: (
      <>
        Actix 是相当快的。不只是说说而已 -- <a href='https://www.techempower.com/benchmarks/#section=data-r21&hw=ph&test=fortune' target='_blank' rel='noopener noreferrer'>自己来看！</a>
      </>
    ),
  },
];

const Hero = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;

  return (
    <header id="hero" className={clsx('hero', styles.banner)}>
      <div className="container">
        <img
          src={useBaseUrl(`img/logo.png`)}
          alt="Actix Logo"
          className={styles.logo}
        />

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to={useBaseUrl('docs/')}
          >
            开始使用
          </Link>
        </div>
      </div>
    </header>
  );
};

const Highlights = () => {
  return (
    <>
      <section id="highlights" className={styles.highlights}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                {highlights.map((highlight, idx) => (
                  <div
                    className={clsx('col col--6', styles.highlight)}
                    key={idx}
                  >
                    <div className="item">
                      <div className={styles.header}>
                        <div className={styles.icon}>
                          <FontAwesomeIcon icon={highlight.icon} size="lg" />
                        </div>
                        <h2 className={styles.title}>{highlight.title}</h2>
                      </div>
                      <p>{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Examples = () => {
  return (
    <div className={styles.examples}>
      <div className={styles.example}>
        <div className={styles.exampleContent}>
          <div className={styles.featureText}>
            <h3 className={styles.featureTitle}>你好，世界！</h3>
            <p>
              开始使用 Actix 非常简单。Actix 应用程序带有一个 URL 路由系统，让您可以匹配 URL 并调用单个处理程序。
            </p>
          </div>
          <div className={styles.example__code}>
            <CodeBlock example="request-routing" section="request-routing" />
          </div>
        </div>
      </div>
      <div className={styles.example}>
        <div className={styles.exampleContent}>
          <div className={styles.featureText}>
            <h3 className={styles.featureTitle}>灵活的响应</h3>
            <p>
              Actix 的处理函数可以返回实现 <code>Responder</code> trait 的各种对象。
              这使得从 API 返回一致的响应变得轻而易举。
            </p>
          </div>
          <div className={styles.example__code}>
            <CodeBlock
              example="flexible-responders"
              section="flexible-responders"
            />
          </div>
        </div>
      </div>
      <div className={styles.example}>
        <div className={styles.exampleContent}>
          <div className={styles.featureText}>
            <h3 className={styles.featureTitle}>功能强大的提取器</h3>
            <p>
              Actix 带来了一个强大的提取器系统，它从传入的 HTTP 请求中提取数据并将其传递给您的视图函数。
              这不仅使得 API 方便，而且还意味着您的视图函数可以是同步代码，并且仍然可以从异步 IO 处理中受益。
            </p>
          </div>
          <div className={styles.example__code}>
            <CodeBlock
              example="powerful-extractors"
              section="powerful-extractors"
            />
          </div>
        </div>
      </div>
      <div className={styles.example}>
        <div className={styles.exampleContent}>
          <div className={styles.featureText}>
            <h3 className={styles.featureTitle}>轻松的表单处理</h3>
            <p>
              处理 JSON 或 URL 编码的表单数据很容易。只需定义一个可以反序列化的结构，Actix 将处理其余部分。
            </p>
          </div>
          <div className={styles.example__code}>
            <CodeBlock
              example="easy-form-handling"
              section="easy-form-handling"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
