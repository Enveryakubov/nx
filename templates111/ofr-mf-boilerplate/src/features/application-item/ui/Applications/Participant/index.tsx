import React from 'react';

import type { IPerson } from '@interfaces';

import {
  UiForm,
  UiContainer,
  UiTextField,
  UiGridItem,
  UiRadioGroup,
  UiRadio,
  UiDatePicker,
  UiCheckbox,
} from '@ofr/ui-kit';

interface ParticipantInfoProps {
  participant: IPerson;
}

const ParticipantCard: React.FC<ParticipantInfoProps> = ({ participant }) => (
  <UiForm layout="vertical">
    <UiContainer>
      <UiTextField name="lastName" label="Фамилия" value={participant?.lastName} disabled />
      <UiTextField name="firstName" label="Имя" value={participant?.firstName} disabled />
      <UiTextField name="secondName" label="Отчество" value={participant?.secondName} disabled />
    </UiContainer>
    <UiContainer columns={6}>
      <UiGridItem columns={{ start: 1, end: 4 }}>
        <UiTextField name="phone" label="Мобильный телефон" value={participant?.phone} disabled />
      </UiGridItem>
      <UiGridItem columns={{ start: 4, end: -1 }}>
        <UiTextField name="email" label="Электронная почта" value={participant?.email} disabled />
      </UiGridItem>
    </UiContainer>
    <UiContainer rowGap={0}>
      <UiGridItem columns={-1}>
        <h3>Паспортные данные</h3>
      </UiGridItem>
      <UiRadioGroup name="gender" value={participant?.gender} disabled>
        <UiRadio value="male">Мужской</UiRadio>
        <UiRadio value="female">Женский</UiRadio>
      </UiRadioGroup>
    </UiContainer>
    <UiContainer>
      <UiDatePicker label="Дата рождения" name="dateOfBirth" value={participant?.dateOfBirth} disabled />
      <UiGridItem columns={{ start: 2, end: -1 }}>
        <UiTextField name="placeOfBirth" label="Место рождения" value={participant?.placeOfBirth} disabled />
      </UiGridItem>
    </UiContainer>
    <UiContainer>
      <UiDatePicker label="Дата выдачи" name="issueDate" value={participant?.identityDoc?.issueDate} disabled />
      <UiTextField name="departCode" label="Код подразделения" value={participant?.identityDoc?.departCode} disabled />
      <UiTextField name="issuedBy" label="Кем выдан" value={participant?.identityDoc?.issuedBy} disabled />
    </UiContainer>
    <UiContainer>
      <UiGridItem columns={-1}>
        <UiTextField name="regAddress" label="Адрес постоянной регистрации" value={participant?.regAddress} disabled />
      </UiGridItem>
      <UiGridItem columns={-1}>
        <UiCheckbox
          name="regAddressIsEqualToFactAddress"
          label="Адрес проживания совпадает с адресом регистрации"
          value={participant?.regAddress === participant?.factAddress}
          disabled
        />
      </UiGridItem>
      <UiGridItem columns={-1}>
        <UiTextField name="factAddress" label="Адрес проживания" value={participant?.factAddress} disabled />
      </UiGridItem>
    </UiContainer>
  </UiForm>
);

export default ParticipantCard;
