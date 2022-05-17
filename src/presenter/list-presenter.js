import { render, RenderPosition } from '../render.js';
import FilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';
import TripSortView from '../view/trip-sort-view.js';
import TripEventView from '../view/trip-event-view.js';
import NewPointView from '../view/new-point-view.js';

export default class ListPresenter {
  init(filterContainer, tripInfoContainer, tripSortContainer) {
    render(new TripInfoView(), tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView(), filterContainer);
    render(new TripSortView(), tripSortContainer);
    render(new NewPointView(), tripSortContainer);
    for (let i = 0; i < 3; i++) {
      render(new TripEventView(), tripSortContainer, RenderPosition.AFTEREND);
    }
  }
}
