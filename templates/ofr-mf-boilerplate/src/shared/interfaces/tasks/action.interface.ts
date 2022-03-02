/**
 * Действие по отношению к задаче
 */
export interface IAction {
  /**
   * ID действия
   */
  readonly id?: string;
  /**
   * Код действия
   */
  readonly code?: string;
  /**
   * Наименование действия
   */
  readonly name?: string;
  /**
   * Путь к ресурсу
   */
  readonly path?: string;
  /**
   * Используемый метод
   */
  readonly method?: string;
}
