import ListPresenter from './presenter/list-presenter';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripInfoContainer = document.querySelector('.trip-main');
const tripSortContainer = document.querySelector('.trip-events');

const presenter = new ListPresenter();

presenter.init(
  filterContainer,
  tripInfoContainer,
  tripSortContainer);

