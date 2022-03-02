import { IAction } from './action.interface';
import { IExecutor } from './executor.interface';
import { TaskStatus } from './taskStatus.enum';

export interface ITask {
  /**
   * ID задачи
   * @template UUID
   */
  readonly id: string;
  /**
   * Код задачи
   */
  readonly code?: string;
  /**
   * Наименование задачи
   */
  readonly name?: string;
  /**
   * Группа потенциальных исполнителей
   */
  readonly candidateGroup?: string;
  /**
   * Потенциальный исполнитель
   */
  readonly candidateUserId?: string;
  /**
   * Группа супервизоров
   */
  readonly supervisorGroup?: string;
  /**
   * Дата и время создания задачи
   * @template ГГГГ-ММ-ДДTЧЧ:мм:СС.мс
   * @example 2021-11-12T15:06:31.405259500
   */
  readonly createDate?: string;
  /**
   * Дата и время последнего обновления задачи
   * @template ГГГГ-ММ-ДДTЧЧ:мм:СС.мс
   * @example 2021-11-12T15:06:31.405259500
   */
  readonly lastUpdateDate?: string;
  /**
   * Плановые дата и время выполнения задачи
   * @template ГГГГ-ММ-ДДTЧЧ:мм:СС.мс
   * @example 2021-11-12T15:06:31.405259500
   */
  readonly planCompleteDate?: string;
  /**
   * Статус задачи
   */
  readonly status?: TaskStatus;
  /**
   * Название сервиса-источника задачи
   */
  sourceName?: string;
  /**
   * Код задачи в Camunda
   */
  sourceTaskCode?: string;
  /**
   * ID задачи в Camunda
   */
  sourceTaskId?: string;
  /**
   * ID процесса в Camunda
   */
  sourceProcessId?: string;
  businessKey?: string;
  processDefinitionKey?: string;
  /**
   * Код выбранного действия
   */
  selectedActionCode?: string;
  /**
   * Информация об исполнителях задачи
   */
  readonly executors?: Array<IExecutor>;
  /**
   * Информация о доступных действиях с задачей
   */
  readonly actions?: Array<IAction>;
}
