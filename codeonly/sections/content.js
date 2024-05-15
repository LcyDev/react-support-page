import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Input from 'antd/es/input';
import Select from 'antd/es/select';
import 'antd/dist/antd.css';

import styles from './css/content.module.scss';

function renderContentSection(props) {
  return (
    <section className={styles.contentSection}>
      <div className={styles.wrapper}>
        <div className={styles.flexColumn}>
          <div className={styles.article}>
            <h1 className={styles.heroTitle}>
              Soporte
            </h1>
            <h2 className={styles.subtitle}>
              ¿Necesitas ayuda? Póngase en contacto con nuestro equipo para obtener soporte
              <br />
            </h2>
          </div>

          <div className={styles.flexCol}>
            <div className={styles.formGroup}>
              <div className={styles.flexCol1}>
                <div className={styles.flexRowFullname}>
                  <div className={styles.flexColName}>
                    <h5 className={styles.highlight}>
                      Nombre
                    </h5>
                    <button className={styles.btnNameBoxBox_box}>
                      <input className={styles.btnNameBoxBox} type={'text'} placeholder={`John`} />
                    </button>
                  </div>

                  <div className={styles.flexColSurname}>
                    <h5 className={styles.highlight}>
                      Apellido
                    </h5>
                    <button className={styles.btnSurnameBoxBox_box}>
                      <input className={styles.btnSurnameBoxBox} type={'text'} placeholder={`Doe`} />
                    </button>
                  </div>
                </div>

                <div className={styles.flexColEmail}>
                  <h5 className={styles.highlight}>
                    Correo Electronico
                  </h5>
                  <button className={styles.btnEmailBoxBox_box}>
                    <input className={styles.btnEmailBoxBox} type={'text'} placeholder={`ejemplo@email.com`} />
                  </button>
                </div>

                <div className={styles.flexColHelpCategory}>
                  <h5 className={styles.highlight}>
                    Con que podemos ayudarte?
                  </h5>

                  <button className={styles.btnHelpCategory}>
                    <h5 className={styles.btnText}>
                      Categoria
                    </h5>
                    <img className={styles.btnIcon} src={'/assets/036c364f922c955943a4fc3537b66132.png'} alt="alt text" />
                  </button>

                  <Select className={styles.antDesignSelect} placeholder="Categoria" size="large">
                    {['option'].map((option) => (
                      <Select.Option key={option} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </div>

                <div className={styles.flexColProblemType}>
                  <h5 className={styles.highlight}>
                    Problema experimentado
                  </h5>

                  <button className={styles.btnProblemType}>
                    <h5 className={styles.btnText}>
                      {props.btn_text}
                    </h5>
                    <img className={styles.btnIcon} src={'/assets/036c364f922c955943a4fc3537b66132.png'} alt="alt text" />
                  </button>

                  <Select className={styles.antDesignSelect} placeholder="Tipo de problema" size="large">
                    {['option'].map((option) => (
                      <Select.Option key={option} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </div>

                <div className={styles.flexColDescription}>
                  <h5 className={styles.highlight}>
                    Tu mensaje
                  </h5>
                  <button className={styles.btnDescriptionBoxBox_box}>
                    <input className={styles.btnDescriptionBoxBox} type={'text'} placeholder={`Ingresa tu pregunta o mensaje`} />
                  </button>
                  <Input.TextArea className={styles.antDesignTextArea} size="large" placeholder="Ingresa tu pregunta o mensaje" />
                  <div className={styles.htmlTextarea}>
                    <textarea style={{ width: '100%', height: '100%' }} placeholder="Ingresa tu pregunta o mensaje" />
                  </div>

                  <button className={styles.btnAttachment}>
                    <h5 className={styles.btnTextAttachment}>
                      Adjuntar archivos
                    </h5>
                    <img className={styles.btnIconAttachment} src={'/assets/b53d16f0a9a901f39993c63cd502eef6.png'} alt="alt text" />
                  </button>
                </div>
              </div>

              <button className={styles.btnSend}>
                Enviar Solucitud
              </button>
            </div>
          </div>
        </div>

        <img className={styles.supportLogo} src={'/assets/a84df205e6991066852dd75b45dc4851.svg'} alt="support_logo" />
      </div>
    </section>
  );
}

renderContentSection.propTypes = {
  btn_text: PropTypes.string.isRequired
};

export default renderContentSection;
