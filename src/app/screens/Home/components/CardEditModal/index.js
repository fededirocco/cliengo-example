import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { t } from 'i18next';

import FormInput from '../../../../components/FormInput';

import styles from './styles.module.scss';

function CardEditModal({ title, description, isOpen, handleClose }) {
  const [textArea, setTextArea] = useState(description); 
  
  const onTextAreaChange = e => {
    setTextArea(e.target.value || '');
  };

  const handleSubmit = () => {
    console.log(textArea);
  };

  const onHandleClose = () => {
    handleBackgroundBlurRemove();
    handleClose();
  }

  const handleBackgroundBlurRemove = () => {
    const rootElement = document.getElementById('root');
    rootElement.classList.remove(styles.modalBlur);
  };

  const handleBackgroundBlurAdd = () => {
    const rootElement = document.getElementById('root');
    rootElement.classList.add(styles.modalBlur);
  };
  
  return (
    <div className={`column ${styles.container}`}>
      <ReactModal
      isOpen={isOpen}
      onRequestClose={onHandleClose}
      className={`column ${styles.modalContent}`}
      contentLabel="Example Modal"
      overlayClassName={styles.modalOverlay}
      onAfterOpen={handleBackgroundBlurAdd}
      >
        <div className={`row space-between ${styles.titleContainer}`}>
          <div className="row">
            <i className={`fa fa-bolt ${styles.iconBolt}`} aria-hidden="true" />
            <p className="title-modal">
              <span className={styles.subtitle}>{t('EditModal:answerTo')}</span>
              {title}
            </p>
          </div>
          <i className={`fa fa-times ${styles.iconClose}`} aria-hidden="true" onClick={onHandleClose} />
        </div>
        <div className={`column middle ${styles.content}`}>
          <p className={`description-card ${styles.description}`}>
            {t('EditModal:attentionHours')}
          </p>
          <form className={`column ${styles.formContainer}`} onSubmit={handleSubmit}>
            <FormInput
              isTextarea
              name="Text"
              value={textArea}
              inputType="text"
              inputClassName={`full-width description-card ${styles.textArea}`}
              onChange={onTextAreaChange}
            />
            <button type="submit" className={`row center text-button ${styles.button}`}>
            {t('EditModal:save')}
            </button>
          </form>
        </div>
      </ReactModal>
    </div>
  );
}

export default CardEditModal;