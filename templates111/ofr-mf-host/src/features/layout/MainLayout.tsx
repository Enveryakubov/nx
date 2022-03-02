import React, { useEffect } from 'react';
import styled from 'styled-components';
import { notification } from 'antd';
import logo from '../../assets/images/Logo.png';
import designedBy from '../../assets/images/designedby.png';
import { useHistory } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProgram } from '../../data-access/products/actions';
import { setPersonalInfo } from '../../data-access/user/actions';
import { saveProgramAsync } from '../../data-access/products/api';
// eslint-disable-next-line react/jsx-no-useless-fragment
const StyledWrapper = styled.div``;

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const programSelected = useSelector((state: any) => state.products.currentProgram);
  const personalInfo = useSelector((state: any) => state.user.personalInfo);

  useEffect(() => {
    window.addEventListener('ofr_mf_programList:programSelected', (e: any) => {
      dispatch(setSelectedProgram(e.detail));
      history.push(`/programs/${e.detail.programId}`);
    });
    window.addEventListener('ofr_mf_contacts:formSubmitted', (e: any) => {
      dispatch(setPersonalInfo(e.detail.formData));
      history.push(`/programs/${e.detail.programId}/payment`);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('ofr_mf_payment:paymentDone', (e: any) => {
      if (personalInfo && programSelected) {
        saveProgramAsync({
          productData: {
            code: '1',
            ...programSelected,
          },
          personalData: personalInfo,
        }).then(() =>
          notification.open({
            message: 'Покупка совершена',
            description: 'Мы отправили стаховку на вашу почту. Спасибо, что Вы выбераете нас!',
            placement: 'bottomRight',
          }),
        );
      }
    });
  }, [personalInfo]);

  return (
    <StyledWrapper>
      <div className={styles.container}>
        <div className={styles.layout}>{children}</div>
        <div className={styles.footer}>
          <div>
            <img src={designedBy} className={styles.imgLeft} />
            <img src={logo} className={styles.imgRight} />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default MainLayout;
