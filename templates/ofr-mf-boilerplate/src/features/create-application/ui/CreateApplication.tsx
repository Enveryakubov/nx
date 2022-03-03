import React, { useCallback } from 'react';

import { ApplicationsActions } from '@data-access/applications';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { validateSchema } from '..';
import { formatDate } from '@utils';
import {
  ICreateApplicationRequest,
  ProductType,
  DeliveryType,
  ParticipantRole,
  ParticipantType,
  BranchPickupType,
  PersonGender,
} from '@interfaces';
import {
  UiTextField,
  UiContainer,
  UiForm,
  UiGridItem,
  UiRadioGroup,
  UiRadio,
  UiDatePicker,
  UiButton,
  UiCheckbox,
} from '@ofr/ui-kit';

import styles from './Application.module.scss';

interface ICreateApplicationRules {
  lastName: string;
  firstName: string;
  secondName: string;
  phone: string;
  email: string;
  gender: PersonGender;
  dateOfBirth: string;
  placeOfBirth: string;
  issueDate: string;
  departCode: string;
  issuedBy: string;
  regAddress: string;
  regAddressIsEqualToFactAddress?: boolean;
  factAddress?: string;
}

const CreateApplication: React.FC = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<ICreateApplicationRules>({
    resolver: yupResolver(validateSchema),
  });

  const onSubmit = useCallback((data: ICreateApplicationRules) => {
    const { dateOfBirth, issueDate, departCode, issuedBy, regAddress, regAddressIsEqualToFactAddress } = data;
    let { factAddress } = data;

    if (regAddressIsEqualToFactAddress) {
      factAddress = regAddress;
    }

    const payload: ICreateApplicationRequest = {
      participants: [
        {
          ...data,
          dateOfBirth: formatDate(new Date(dateOfBirth)),
          factAddress,
          regAddress,
          identityDoc: {
            departCode,
            issueDate: formatDate(new Date(issueDate)),
            issuedBy,
            number: '0',
            series: '0',
            type: 'PASSPORT',
          },
          role: ParticipantRole.BORROWER,
          type: ParticipantType.CLIENT,
        },
      ],
      product: {
        codeword: 'test',
        receive: {
          type: DeliveryType.PICKUP,
          branchName: BranchPickupType.BRANCH1,
        },
        limit: 0,
        productType: ProductType.CREDITCARD,
      },
    };

    dispatch(ApplicationsActions.createApplicationAsync.request(payload));
  }, []);

  return (
    <div className={styles.application}>
      <UiForm layout="vertical">
        <UiContainer>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { ref, ...field }, fieldState }) => (
              <UiTextField {...field} {...fieldState} label="Фамилия" />
            )}
          />
          <Controller
            control={control}
            name="firstName"
            render={({ field: { ref, ...field }, fieldState }) => (
              <UiTextField {...field} {...fieldState} label="Имя" />
            )}
          />
          <Controller
            control={control}
            name="secondName"
            render={({ field: { ref, ...field }, fieldState }) => (
              <UiTextField {...field} {...fieldState} label="Отчество" />
            )}
          />
        </UiContainer>
        <UiContainer columns={6}>
          <UiGridItem columns={{ start: 1, end: 4 }}>
            <Controller
              control={control}
              name="phone"
              render={({ field: { ref, ...field }, fieldState }) => (
                <UiTextField
                  {...field}
                  {...fieldState}
                  label="Мобильный телефон"
                  placeholder="+ 7"
                  mask="+9 (999) 999-99-99"
                />
              )}
            />
          </UiGridItem>
          <UiGridItem columns={{ start: 4, end: -1 }}>
            <Controller
              control={control}
              name="email"
              render={({ field: { ref, ...field }, fieldState }) => (
                <UiTextField {...field} {...fieldState} label="Электронная почта" />
              )}
            />
          </UiGridItem>
        </UiContainer>
        <UiContainer rowGap={0}>
          <UiGridItem columns={-1}>
            <h3>Паспортные данные</h3>
          </UiGridItem>
          <Controller
            control={control}
            name="gender"
            render={({ field: { ref, ...field }, fieldState }) => (
              <UiRadioGroup {...field} {...fieldState}>
                <UiRadio value="male">Мужской</UiRadio>
                <UiRadio value=" female">Женский</UiRadio>
              </UiRadioGroup>
            )}
          />
        </UiContainer>
        <UiContainer>
          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field: { ref, ...field }, fieldState }) => (
              <UiDatePicker label="Дата рождения" placeholder="ДД.ММ.ГГГГ" {...field} {...fieldState} />
            )}
          />
          <UiGridItem columns={{ start: 2, end: -1 }}>
            <Controller
              control={control}
              name="placeOfBirth"
              render={({ field: { ref, ...field }, fieldState }) => (
                <UiTextField {...field} {...fieldState} label="Место рождения" />
              )}
            />
          </UiGridItem>
        </UiContainer>
        <UiContainer>
          <Controller
            control={control}
            name="issueDate"
            render={({ field: { ref, ...field }, fieldState }) => (
              <UiDatePicker label="Дата выдачи" placeholder="ДД.ММ.ГГГГ" {...field} {...fieldState} />
            )}
          />
          <Controller
            control={control}
            name="departCode"
            render={({ field: { ref, ...field }, fieldState }) => (
              <UiTextField {...field} {...fieldState} label="Код подразделения" />
            )}
          />
          <Controller
            control={control}
            name="issuedBy"
            render={({ field: { ref, ...field }, fieldState }) => (
              <UiTextField {...field} {...fieldState} label="Кем выдан" />
            )}
          />
        </UiContainer>
        <UiContainer>
          <UiGridItem columns={-1}>
            <Controller
              control={control}
              name="regAddress"
              render={({ field: { ref, ...field }, fieldState }) => (
                <UiTextField {...field} {...fieldState} label="Адрес постоянной регистрации" />
              )}
            />
          </UiGridItem>
          <UiGridItem columns={-1}>
            <Controller
              control={control}
              name="regAddressIsEqualToFactAddress"
              render={({ field: { ref, ...field }, fieldState }) => (
                <UiCheckbox {...field} {...fieldState} label="Адрес проживания совпадает с адресом регистрации" />
              )}
            />
          </UiGridItem>
          <UiGridItem columns={-1}>
            <Controller
              control={control}
              name="factAddress"
              render={({ field: { ref, ...field }, fieldState }) => (
                <UiTextField {...field} {...fieldState} label="Адрес проживания" />
              )}
            />
          </UiGridItem>
          <UiGridItem justifyItems="center" columns={-1}>
            <UiButton onClick={handleSubmit(onSubmit, console.error)}>Отправить</UiButton>
          </UiGridItem>
        </UiContainer>
      </UiForm>
    </div>
  );
};

export default CreateApplication;
