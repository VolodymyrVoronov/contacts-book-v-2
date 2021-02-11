import React from "react";

import { CSSTransition } from "react-transition-group";

import useStore from "./../../store/appStore";

import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

import { filterButtons } from "./../../helpers/const";

import "./Filter.scss";

const Filter = () => {
  const { activeFilterIndex, setActiveFilterIndex, setFilterType } = useStore();

  const [showFilters, setShowFilters] = React.useState(false);
  const nodeRef = React.useRef(null);

  const onShowFiltersClick = () => {
    setShowFilters(!showFilters);
  };

  const onAllClick = () => {
    setFilterType(`All`);
    setActiveFilterIndex(0);
  };

  const onFiltersBtnClick = (index, title) => {
    setFilterType(title);
    setActiveFilterIndex(index);
  };

  const classesTransition = {
    enter: "enter",
    enterActive: "enter-active",
    exit: "exit",
    exitActive: "exit-active",
    exitDone: "exit-done",
  };

  return (
    <div className="filter">
      <button onClick={onShowFiltersClick} className="filter__more-filters-btn">
        Filters
        <span
          className={`filter__more-filters-btn-icon ${
            showFilters
              ? `filter__more-filters-btn-icon--down `
              : `filter__more-filters-btn-icon--up`
          }`}
        >
          {showFilters ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </span>
      </button>

      <CSSTransition
        nodeRef={nodeRef}
        in={showFilters}
        timeout={500}
        classNames={classesTransition}
        unmountOnExit
        mountOnEnter
      >
        <section ref={nodeRef} className="filter__btns">
          <button
            onClick={onAllClick}
            type="button"
            className={`filter__btn ${
              activeFilterIndex === 0 ? `filter__btn--active` : ``
            }`}
            disabled={activeFilterIndex === 0}
          >
            All
            <span className="filter__btn-icon">
              {activeFilterIndex === 0 ? (
                <IoChevronDownOutline />
              ) : (
                <IoChevronForwardOutline />
              )}
            </span>
          </button>

          {filterButtons.map((button) => {
            const { id, title } = button;

            return (
              <button
                onClick={() => onFiltersBtnClick(id, title)}
                key={id}
                type="button"
                className={`filter__btn ${
                  activeFilterIndex === id ? `filter__btn--active` : ``
                }`}
                disabled={activeFilterIndex === id}
              >
                {title}
                <span className="filter__btn-icon">
                  {activeFilterIndex === id ? (
                    <IoChevronDownOutline />
                  ) : (
                    <IoChevronForwardOutline />
                  )}
                </span>
              </button>
            );
          })}
        </section>
      </CSSTransition>
    </div>
  );
};

export default Filter;
