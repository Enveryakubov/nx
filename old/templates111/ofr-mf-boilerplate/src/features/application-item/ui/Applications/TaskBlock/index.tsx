import React, { useEffect } from 'react';

import { TasksActions, TasksSelectors } from '@data-access/tasks';
import { ApplicationsSelectors } from '@data-access/applications';
import { useDispatch, useSelector } from 'react-redux';
import { UiCard, UiSkeleton } from '@ofr/ui-kit';
import { TaskFilter } from '@interfaces';
import cx from 'classnames';

import styles from './TaskBlock.module.scss';

const TaskBlock: React.FC = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(TasksSelectors.getTasksData);
  const isLoading = useSelector(TasksSelectors.isTasksDataLoading);
  const application = useSelector(ApplicationsSelectors.getCurrentApplication);

  const emptyStyles = cx(styles['task-bloc'], {
    [styles['task-bloc__empty']]: !isLoading && !tasks.length,
  });

  useEffect(() => {
    dispatch(
      TasksActions.getTasksAsync.request({ filter: TaskFilter.BY_APPLICATION, applicationNumber: application?.number }),
    );

    return () => {
      dispatch(TasksActions.clearTasks());
    };
  }, []);

  if (isLoading) {
    return (
      <div className={styles['task-bloc']}>
        <UiSkeleton paragraph={{ rows: 1 }} active />
      </div>
    );
  }

  if (!isLoading && !tasks.length) {
    return <div className={emptyStyles}>Похоже, что по этой заявке нет задач</div>;
  }

  return (
    <div className={styles['task-bloc']}>
      {tasks.map((task) => (
        <UiCard title={`Задача #${task.code}`} key={task.id}>
          {task.name}
        </UiCard>
      ))}
    </div>
  );
};

export default TaskBlock;
