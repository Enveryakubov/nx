import React, { useEffect } from 'react';

import { ApplicationsActions, ApplicationsSelectors } from '@data-access/applications';
import { useDispatch, useSelector } from 'react-redux';
import { UiTable, UiButtonLink } from '@ofr/ui-kit';
import { Link } from 'react-router-dom';
import { getPath } from '@routes';

import styles from './Applications.module.scss';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (id: string) => <Link to={getPath('application', id)}>{id}</Link>,
  },
  {
    title: 'Номер',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Канал поступления',
    dataIndex: 'channel',
    key: 'channel',
  },
  {
    title: 'Дата создания',
    dataIndex: 'createDate',
    key: 'createDate',
  },
  {
    title: 'Наименование продукта',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Заёмщик',
    dataIndex: 'borrowerName',
    key: 'borrowerName',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
];

const ApplicationList: React.FC = () => {
  const dispatch = useDispatch();

  const applications = useSelector(ApplicationsSelectors.getApplicationsData);

  useEffect(() => {
    dispatch(ApplicationsActions.getApplicationsAsync.request({}));



    return () => {
      dispatch(ApplicationsActions.clearCurrentApplication());
    };
  }, []);

  return (
    <>
      <UiTable columns={columns} dataSource={applications} />

      <Link to={getPath('createApplication')} component={UiButtonLink}>
        to create
      </Link>
    </>
  );
};

export default ApplicationList;
